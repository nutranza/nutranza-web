import { NextRequest, NextResponse } from "next/server"
import { hasFixedAdminSession } from "@/lib/auth/fixed-admin"
import {
  getUploadMaxFileSizeBytes,
  isAllowedUploadFileType,
  type UploadFolder,
  UPLOAD_ALLOWED_FILE_TYPES,
} from "@/lib/constants/upload-file-types"
import { createAdminClient } from "@/lib/supabase/admin"
import { createClient } from "@/lib/supabase/server"

const SUPABASE_MEDIA_BUCKET = "nutranza-media"

const isUploadFolder = (value: string): value is UploadFolder =>
  Object.prototype.hasOwnProperty.call(UPLOAD_ALLOWED_FILE_TYPES, value)

async function canUpload(folder: UploadFolder) {
  if (await hasFixedAdminSession()) return true

  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) return false
  if (folder === "reviews") return true

  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .single()

  return profile?.role === "admin"
}

export async function PUT(request: NextRequest) {
  try {
    const folderValue = request.nextUrl.searchParams.get("folder") || ""
    const key = request.nextUrl.searchParams.get("key") || ""

    if (!isUploadFolder(folderValue)) {
      return NextResponse.json({ error: "Invalid upload folder." }, { status: 400 })
    }

    if (!(await canUpload(folderValue))) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    if (!key.startsWith(`${folderValue}/`) || key.includes("..")) {
      return NextResponse.json({ error: "Invalid upload key." }, { status: 400 })
    }

    const contentType = request.headers.get("content-type")?.split(";")[0] || ""
    if (!isAllowedUploadFileType(folderValue, contentType)) {
      return NextResponse.json({ error: "Invalid file type." }, { status: 415 })
    }

    const declaredSize = Number(request.headers.get("content-length"))
    if (
      Number.isFinite(declaredSize) &&
      declaredSize > getUploadMaxFileSizeBytes(folderValue)
    ) {
      return NextResponse.json({ error: "The uploaded file is too large." }, { status: 413 })
    }

    const bytes = await request.arrayBuffer()
    if (bytes.byteLength === 0) {
      return NextResponse.json({ error: "The uploaded file is empty." }, { status: 400 })
    }

    if (bytes.byteLength > getUploadMaxFileSizeBytes(folderValue)) {
      return NextResponse.json({ error: "The uploaded file is too large." }, { status: 413 })
    }

    const supabase = await createAdminClient()
    const { error } = await supabase.storage
      .from(SUPABASE_MEDIA_BUCKET)
      .upload(key, bytes, {
        contentType,
        cacheControl: "31536000",
        upsert: false,
      })

    if (error) {
      console.error("Supabase media upload failed:", error)
      return NextResponse.json(
        { error: "Unable to store the uploaded file." },
        { status: 500 }
      )
    }

    const { data } = supabase.storage.from(SUPABASE_MEDIA_BUCKET).getPublicUrl(key)

    return NextResponse.json({ key, url: data.publicUrl })
  } catch (error) {
    console.error("Media upload route failed:", error)
    return NextResponse.json(
      { error: "Unable to upload the file. Please try again." },
      { status: 500 }
    )
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const folderValue = request.nextUrl.searchParams.get("folder") || ""
    const key = request.nextUrl.searchParams.get("key") || ""

    if (!isUploadFolder(folderValue)) {
      return NextResponse.json({ error: "Invalid upload folder." }, { status: 400 })
    }

    if (!(await canUpload(folderValue))) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    if (!key.startsWith(`${folderValue}/`) || key.includes("..")) {
      return NextResponse.json({ error: "Invalid upload key." }, { status: 400 })
    }

    const supabase = await createAdminClient()
    const { error } = await supabase.storage
      .from(SUPABASE_MEDIA_BUCKET)
      .remove([key])

    if (error) {
      console.error("Supabase media cleanup failed:", error)
      return NextResponse.json({ error: "Unable to remove the file." }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Media cleanup route failed:", error)
    return NextResponse.json({ error: "Unable to remove the file." }, { status: 500 })
  }
}
