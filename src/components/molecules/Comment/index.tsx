import { useState } from "react"
import { Avatar, Box } from "@mui/material"
import { LikeIcon } from "../../atoms/LikeIcon"
import { IconContainer, Paragraph, Title } from "../../atoms"

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
          <Title flex={"auto"} m={0}>
            {title}
          </Title>
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
