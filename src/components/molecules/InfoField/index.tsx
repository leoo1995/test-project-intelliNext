import { Typography } from "@mui/material"
import { Paragraph } from "../../atoms/Paragraph/index"

type Props = {
  title?: string
  message?: string
}
export const InfoField = ({ title, message }: Props) => {
  return (
    <>
      <Typography variant="subtitle1" color="text.primary">
        {title}
      </Typography>
      <Paragraph>{message}</Paragraph>
    </>
  )
}
