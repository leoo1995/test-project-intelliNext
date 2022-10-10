import dayjs from "dayjs"
export const formatDatePost = (date: string | Date): string => {
  return dayjs(date).format("DD MMM YYYY [at] h:mm A")
}
