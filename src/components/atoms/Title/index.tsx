import Typography, { TypographyProps } from "@mui/material/Typography"

type Props = TypographyProps & {}
export const Title = ({ children, ...rest }: Props) => {
  return (
    <Typography variant="subtitle1" color="text.primary" {...rest}>
      {children}
    </Typography>
  )
}
