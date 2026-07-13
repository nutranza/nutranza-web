const enabled = (value: string | undefined) => value?.trim().toLowerCase() === "true"

export const serverFeatures = Object.freeze({
  payments: enabled(process.env.FEATURE_PAYMENTS),
  logistics: enabled(process.env.FEATURE_LOGISTICS),
  mediaUploads: enabled(process.env.FEATURE_MEDIA_UPLOADS),
  email: enabled(process.env.FEATURE_EMAIL),
  visualSearch: enabled(process.env.FEATURE_VISUAL_SEARCH),
})

export function requireFeature(
  feature: keyof typeof serverFeatures,
  label: string
): void {
  if (!serverFeatures[feature]) {
    throw new Error(`${label} is not enabled for this Nutranza environment.`)
  }
}
