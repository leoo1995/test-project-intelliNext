import React from "react"
import Typography, { TypographyProps } from "@mui/material/Typography"

type Props = TypographyProps & {}
export const Paragraph = ({ children, ...rest }: Props) => {
  return (
    <Typography
      variant="subtitle1"
      color="text.secondary"
      fontWeight={300}
      {...rest}
    >
      {children}
    </Typography>
  )
}
