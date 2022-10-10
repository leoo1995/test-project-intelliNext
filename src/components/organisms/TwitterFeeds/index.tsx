import { Box } from "@mui/material"

import { ContainerPaper, Title } from "../../atoms"
import { TwitterFeed } from "../../molecules"
import feeds from "../../../assets/data/twitterFeeds.json"

export const TwitterFeeds = () => {
  return (
    <ContainerPaper display={"grid"} gap={2}>
      <Title>Twitter Feeds</Title>
      <Box display={"grid"} gap={2}>
        {feeds.map(feed => (
          <TwitterFeed
            key={feed.id}
            photoUser={feed.photoUser}
            name={feed.name}
            message={feed.message}
            username={feed.username}
            favorite={feed.favorite}
            hashtags={feed.hashtags}
          />
        ))}
      </Box>
    </ContainerPaper>
  )
}
