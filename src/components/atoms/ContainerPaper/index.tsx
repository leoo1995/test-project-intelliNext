import { BoxProps, Box } from "@mui/material"

type Props = BoxProps & {}
export const ContainerPaper = ({ children, ...rest }: Props) => {
  return (
    <Box
      {...rest}
      sx={{
        p: 2,
        borderRadius: 1,
        boxShadow:
          "0px 3px 5px -1px rgb(0 0 0 / 10%), 0px 6px 10px 0px rgb(0 0 0 / 10%), 0px 1px 18px 0px rgb(0 0 0 / 12%)",
        ...rest?.sx,
      }}
    >
      {children}
    </Box>
  )
}
