import dayjs from "dayjs"

export const formatDateMedium = (date: string | Date): string => {
  if (!new Date(date)) throw new Error("Date not valid")
  return dayjs(date).format("MMMM DD, YYYY")
}
