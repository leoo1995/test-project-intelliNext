import { Box } from "@mui/material"

import { Header, SuggestedPages, Suggestions } from "./components/organisms"
import { ProfileInfo } from "./components/organisms/ProfileInfo"
import { Photos } from "./components/organisms/Photos/index"
import { Polls } from "./components/organisms/Polls"
import { Post } from "./components/organisms/Post"
import { Layout } from "./components/templates/Layout/index"
import { TwitterFeeds } from "./components/organisms/TwitterFeeds/index"
import posts from "./assets/data/posts.json"
import { FloatButtonIcon } from "./components/molecules"

function App() {
  return (
    <Box
      bgcolor={"#f8f8f8"}
      minHeight="100vh"
      p={2}
      display="flex"
      gap={2}
      flexWrap="wrap"
      // position={"relative"}
    >
      <FloatButtonIcon />
      <Layout
        header={<Header />}
        leftSide={[<ProfileInfo />, <SuggestedPages />, <TwitterFeeds />]}
        main={posts.map(p => (
          <Post key={p.id} {...p} />
        ))}
        rightSide={[<Photos />, <Suggestions />, <Polls />]}
      />
    </Box>
  )
}

export default App
