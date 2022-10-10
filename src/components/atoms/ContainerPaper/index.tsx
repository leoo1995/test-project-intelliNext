import { BoxProps, Box } from "@mui/material"

type Props = BoxProps & {}
export const ContainerPaper = ({ children, ...rest }: Props) => {
  return (
    <Box
      {...rest}
      sx={{
        p: 2,
        background: "#fff",
        borderRadius: 1,
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
        ...rest?.sx,
      }}
    >
      {children}
    </Box>
  )
}
