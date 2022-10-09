import { useState } from "react"
import { Avatar, Box, Typography } from "@mui/material"
import { LikeIcon } from "../../atoms/LikeIcon"
import { IconContainer } from "../../atoms/IconContainer/index"
import { Paragraph } from "../../atoms/Paragraph/index"

type Props = {
  title: string
  src?: string
  message: string
  likes: number
  avatarSize?: number
}

export const Comment = ({
  title,
  src,
  message,
  likes,
  avatarSize = 48,
}: Props) => {
  const [liked, setLiked] = useState<boolean>(false)

  return (
    <Box display={"flex"} gap={2}>
      <Avatar
        src={src}
        sx={{ height: avatarSize, width: avatarSize }}
        alt="image profile"
      ></Avatar>
      <Box flex={"auto"}>
        <Box display={"flex"}>
          <Typography flex={"auto"} variant="subtitle1" color="initial" m={0}>
            {title}
          </Typography>
          <IconContainer
            icon={<LikeIcon active={liked} />}
            onClick={() => setLiked(!liked)}
            label={123}
          />
        </Box>
        <Paragraph>{message}</Paragraph>
      </Box>
    </Box>
  )
}
