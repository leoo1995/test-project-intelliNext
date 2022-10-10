import { Box } from "@mui/material"
import { ReactNode } from "react"

type Props = {
  header: ReactNode
  leftSide: ReactNode
  rightSide: ReactNode
  main: ReactNode
}
export const Layout = ({ header, leftSide, rightSide, main }: Props) => {
  return (
    <Box display="grid" gridTemplateColumns={"repeat(4,1fr)"} gap={3}>
      <Box component={"header"} gridColumn="1/-1">
        {header}
      </Box>
      <Box display={"flex"} flexDirection="column" gap={3}>
        {leftSide}
      </Box>
      <Box
        component={"main"}
        gridColumn="span 2"
        display={"flex"}
        flexDirection={"column"}
        gap={3}
      >
        {main}
      </Box>
      <Box component={"aside"} display={"flex"} flexDirection="column" gap={3}>
        {rightSide}
      </Box>
    </Box>
  )
}
