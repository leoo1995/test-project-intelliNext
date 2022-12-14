import { Button, ButtonProps, Typography } from "@mui/material"
import React from "react"
import { compactNumber } from "../../../utils"
type Props = {
  icon?: JSX.Element
  label?: string | number
  buttonProps?: ButtonProps
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}
export const IconContainer = ({ icon, label, buttonProps, onClick }: Props) => {
  return (
    <Button {...buttonProps} onClick={onClick} sx={{ p: 0 }} variant="text">
      {icon}
      <Typography variant="subtitle1" color="GrayText">
        {typeof label === "number" ? compactNumber(label).toLowerCase() : label}
      </Typography>
    </Button>
  )
}
