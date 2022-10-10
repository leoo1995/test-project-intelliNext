import { Box, IconButton, Typography } from "@mui/material"
import { FavoriteIcon, Paragraph } from "../../atoms"
import TaskAltIcon from "@mui/icons-material/TaskAlt"
import { Entity } from "../../molecules"

type Props = {
  photoUser: string
  name: string
  username: string
  message: string
  hashtags?: string[]
  favorite?: boolean
}
export const TwitterFeed = ({
  photoUser,
  name,
  message,
  hashtags,
  username,
  favorite,
}: Props) => {
  return (
    <Box display={"grid"} gap={2}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Entity
          src={photoUser}
          title={name}
          subtitle={
            <>
              {username} <TaskAltIcon fontSize="small" color={"primary"} />
            </>
          }
        />
        <IconButton>
          {" "}
          <FavoriteIcon size="medium" active={favorite} />
        </IconButton>
      </Box>
      <Paragraph>{message}</Paragraph>
      <Typography color="primary">{hashtags?.join(" ")}</Typography>
    </Box>
  )
}
