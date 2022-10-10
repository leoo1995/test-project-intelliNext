import { Avatar, AvatarGroup, Box, Button, TextField } from "@mui/material"
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined"
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined"
import {
  ContainerPaper,
  IconContainer,
  Image,
  LikeIcon,
  Paragraph,
} from "../../atoms"
import { Comment, Entity } from "../../molecules"
import { Post as PostType } from "../../../types"
import { formatDatePost } from "../../../utils"

type Props = PostType & {}

export const Post = ({
  name,
  photoUser,
  alsoLikedTo = [],
  body,
  image,
  likes,
  timesShared,
  createdAt,
  comments,
}: Props) => {
  return (
    <ContainerPaper maxWidth={800} display="grid" gap={1}>
      <Entity
        src={photoUser}
        title={name}
        subtitle={formatDatePost(createdAt)}
      />

      <Paragraph>{body}</Paragraph>
      <Box display={"flex"} justifyContent="center">
        <Image style={{ width: "100%" }} src={image} />
      </Box>

      <Box display={"flex"} alignItems="center">
        <IconContainer icon={<LikeIcon />} label={likes} />
        <AvatarGroup sx={{ flex: "auto", justifyContent: "start" }}>
          {alsoLikedTo.map(person => (
            <Avatar key={person.id} src={person.src} alt={person.name} />
          ))}
        </AvatarGroup>
        <IconContainer
          icon={<ShareOutlinedIcon fontSize="small" />}
          label={timesShared}
        />
        <IconContainer
          icon={<ChatBubbleOutlineOutlinedIcon fontSize="small" />}
          label={comments.length}
        />
      </Box>
      <Box>
        {comments.map(comment => (
          <Comment
            key={comment.id}
            likes={comment.likes}
            src={comment.src}
            message={comment.message}
            title={comment.title}
          />
        ))}
      </Box>
      <TextField variant="outlined" placeholder="Add Comment" multiline />
      <Box>
        <Button>Post Comment</Button>
      </Box>
    </ContainerPaper>
  )
}
