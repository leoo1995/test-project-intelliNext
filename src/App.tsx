import { Box } from "@mui/material"
import { ContainerPaper } from "./components/atoms"
import { Comment } from "./components/molecules"
import { Entity } from "./components/molecules/Entity/index"
import { Header, SuggestedPages, Suggestions } from "./components/organisms"
import { ProfileInfo } from "./components/organisms/ProfileInfo"
import { Photos } from "./components/organisms/Photos/index"
import { Polls } from "./components/organisms/Polls"
import { Post } from "./components/organisms/Post"
import { Layout } from "./components/templates/Layout/index"

function App() {
  return (
    <Box
      bgcolor={"#f8f8f8"}
      minHeight="100vh"
      p={2}
      display="flex"
      gap={2}
      flexWrap="wrap"
    >
      <Layout
        header={<Header />}
        leftSide={[<ProfileInfo />, <SuggestedPages />]}
        main={[<Post />]}
        rightSide={[<Photos />, <Suggestions />, <Polls />]}
      />
    </Box>
  )
}

export default App
