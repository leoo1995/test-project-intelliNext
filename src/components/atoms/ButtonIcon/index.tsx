import { ButtonProps, IconButton, Tooltip } from "@mui/material"

type Props = ButtonProps & { tooltipTitle?: string }
export const ButtonIcon = ({ children, tooltipTitle, ...rest }: Props) => {
  const buttonSides = 30

  return (
    <Tooltip title={tooltipTitle}>
      <IconButton
        {...rest}
        sx={{
          width: buttonSides,
          height: buttonSides,
          borderRadius: 1,
          border: "1px solid",
          bgcolor: "primary.main",
          color: "#fff",
          "&:hover": {
            bgcolor: "primary.dark",
          },
          ...rest?.sx,
        }}
      >
        {children}
      </IconButton>
    </Tooltip>
  )
}
