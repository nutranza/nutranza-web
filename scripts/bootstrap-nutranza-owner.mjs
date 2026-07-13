import { createClient } from "@supabase/supabase-js"

const required = (name) => {
  const value = process.env[name]?.trim()
  if (!value) throw new Error(`${name} is required`)
  return value
}

const url = required("NEXT_PUBLIC_SUPABASE_URL")
const serviceRoleKey = required("SUPABASE_SERVICE_ROLE_KEY")
const email = required("NUTRANZA_OWNER_EMAIL").toLowerCase()
const password = required("NUTRANZA_OWNER_PASSWORD")
const firstName = required("NUTRANZA_OWNER_FIRST_NAME")
const lastName = required("NUTRANZA_OWNER_LAST_NAME")
const phone = process.env.NUTRANZA_OWNER_PHONE?.replace(/\D/g, "") || null

if (password.length < 12) {
  throw new Error("NUTRANZA_OWNER_PASSWORD must be at least 12 characters")
}

const supabase = createClient(url, serviceRoleKey, {
  auth: { autoRefreshToken: false, persistSession: false },
})

const { data: role, error: roleError } = await supabase
  .from("admin_roles")
  .upsert(
    { name: "Owner", description: "Nutranza store owner", permissions: ["*"] },
    { onConflict: "name" }
  )
  .select("id")
  .single()

if (roleError) throw roleError

const { data: created, error: createError } = await supabase.auth.admin.createUser({
  email,
  password,
  email_confirm: true,
  phone: phone || undefined,
  phone_confirm: Boolean(phone),
  user_metadata: { first_name: firstName, last_name: lastName, phone },
})

let user = created.user
if (createError) {
  const { data: users, error: listError } = await supabase.auth.admin.listUsers()
  if (listError) throw listError
  user = users.users.find((candidate) => candidate.email?.toLowerCase() === email) || null
  if (!user) throw createError
}

const { error: profileError } = await supabase.from("profiles").upsert({
  id: user.id,
  email,
  contact_email: email,
  phone,
  first_name: firstName,
  last_name: lastName,
  role: "admin",
  admin_role_id: role.id,
  updated_at: new Date().toISOString(),
})

if (profileError) throw profileError
console.log(`Nutranza owner ready: ${email}`)
