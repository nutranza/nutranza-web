type ConvertToLocaleParams = {
  amount: number
  currency_code: string
  minimumFractionDigits?: number
  maximumFractionDigits?: number
  locale?: string
}

export const convertToLocale = ({
  amount,
  minimumFractionDigits,
  maximumFractionDigits,
}: ConvertToLocaleParams) => {
  const safeAmount =
    typeof amount === "number" && Number.isFinite(amount) ? amount : 0

  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    currencyDisplay: "symbol",
    minimumFractionDigits,
    maximumFractionDigits,
  }).format(safeAmount)
}
