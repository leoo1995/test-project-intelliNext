import { Button, ButtonProps } from "@mui/material"

type Props = ButtonProps & {
  active?: boolean
}
export const NavButton = ({ children, active, ...rest }: Props) => {
  return (
    <Button
      {...rest}
      variant={active ? "contained" : "text"}
      color={active ? "primary" : "inherit"}
    >
      {children}
    </Button>
  )
}
