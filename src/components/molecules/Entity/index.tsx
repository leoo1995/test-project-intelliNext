import { Avatar, Box, BoxProps, Typography } from "@mui/material"
import { Title } from "../../atoms"

type Props = {
  src?: string
  title?: string
  subtitle?: string | React.ReactNode
  avatarSize?: number
  containerProps?: BoxProps
}
export const Entity = ({
  src,
  title,
  subtitle,
  avatarSize = 56,
  containerProps,
}: Props) => {
  return (
    <Box display={"flex"} gap={2} alignItems={"center"} {...containerProps}>
      <Avatar
        src={src}
        sx={{ height: avatarSize, width: avatarSize }}
        alt="image profile"
      ></Avatar>
      <Box flex={"auto"}>
        <Title m={0}>{title}</Title>
        <Typography
          variant="subtitle1"
          fontWeight={300}
          color={"GrayText"}
          m={0}
        >
          {subtitle}
        </Typography>
      </Box>
    </Box>
  )
}
