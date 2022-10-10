import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Input,
  TextField,
} from "@mui/material"
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

type Props = {
  id: string | number
  user: {
    firstName: string
    lastName: string
    photo?: string
  }
  alsoLikedTo: [{}]
  body?: string
  image?: string
  likes: number
  timesShared: number
  createdAt: string
}

export const Post = ({}) => {
  return (
    <ContainerPaper maxWidth={800} display="grid" gap={1}>
      <Entity
        src="https://randomuser.me/api/portraits/women/93.jpg"
        title="Adriana Mancilla"
        subtitle="12 Dec 2018 at 1:16 AM"
      />

      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At voluptates
        molestias totam repellendus qui animi ad facere provident eligendi amet.
      </Paragraph>
      <Box display={"flex"} justifyContent="center">
        <Image
          style={{ width: "100%" }}
          src="https://imagenes.elpais.com/resizer/LLQ-80CfQIaEguzMtA6ByfCJnew=/1960x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/ZZ4XQLZXJ4PEMM4PTAK4TWKYFU.jpg"
        />
      </Box>

      <Box display={"flex"} alignItems="center">
        <IconContainer icon={<LikeIcon />} label={345} />
        <AvatarGroup sx={{ flex: "auto", justifyContent: "start" }}>
          <Avatar src="https://randomuser.me/api/portraits/women/33.jpg" />
          <Avatar src="https://randomuser.me/api/portraits/men/33.jpg" />

          <Avatar src="https://randomuser.me/api/portraits/women/3.jpg" />
        </AvatarGroup>
        <IconContainer
          icon={<ShareOutlinedIcon fontSize="small" />}
          label={345}
        />
        <IconContainer
          icon={<ChatBubbleOutlineOutlinedIcon fontSize="small" />}
          label={345}
        />
      </Box>
      <Box>
        <Comment
          likes={3}
          src="https://media-exp1.licdn.com/dms/image/C4E03AQG67U94J9um8g/profile-displayphoto-shrink_800_800/0/1615622754806?e=1670457600&v=beta&t=CnaNpC_YQ0HjhB-lutpi_BgOrZvyUnHN4gJ9k6RGR48"
          title="Luis Eduardo Ortiz"
          message="Este es un comentario Este es un comentarioEste es un comentarioEste es un comentarioEste es un comentarioEste es un comentario"
        />
      </Box>
      <TextField variant="outlined" placeholder="Add Comment" multiline />
      <Box>
        <Button>Post Comment</Button>
      </Box>
    </ContainerPaper>
  )
}
