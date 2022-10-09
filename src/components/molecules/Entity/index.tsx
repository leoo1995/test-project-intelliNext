import { Avatar, Box, Typography } from "@mui/material"

type Props = {
  src?: string
  title?: string
  subtitle?: string
  avatarSize?: number
}
export const Entity = ({ src, title, subtitle, avatarSize = 56 }: Props) => {
  return (
    <Box display={"flex"} gap={2} alignItems={"center"}>
      <Avatar
        src={src}
        sx={{ height: avatarSize, width: avatarSize }}
        alt="image profile"
      ></Avatar>
      <Box flex={"auto"}>
        <Typography variant="subtitle1" color="initial" m={0}>
          {title}
        </Typography>
        <Typography variant="subtitle1" color={"GrayText"} m={0}>
          {subtitle}
        </Typography>
      </Box>
    </Box>
  )
}
