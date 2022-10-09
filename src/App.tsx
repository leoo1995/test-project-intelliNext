import { Box } from "@mui/material"
import { ContainerPaper } from "./components/atoms"
import { Comment } from "./components/molecules"
import { Entity } from "./components/molecules/Entity/index"
import { ProfileInfo } from "./components/organisms/ProfileInfo"

function App() {
  return (
    <Box bgcolor={"#f8f8f8"} minHeight="100vh" p={1}>
      <ContainerPaper width={300}>
        <h1>Hola mundo</h1>

        <Entity
          src="https://media-exp1.licdn.com/dms/image/C4E03AQG67U94J9um8g/profile-displayphoto-shrink_800_800/0/1615622754806?e=1670457600&v=beta&t=CnaNpC_YQ0HjhB-lutpi_BgOrZvyUnHN4gJ9k6RGR48"
          title="Luis Eduardo Ortiz"
          subtitle="Desarrollador Web"
        />
        <Comment
          likes={3}
          src="https://media-exp1.licdn.com/dms/image/C4E03AQG67U94J9um8g/profile-displayphoto-shrink_800_800/0/1615622754806?e=1670457600&v=beta&t=CnaNpC_YQ0HjhB-lutpi_BgOrZvyUnHN4gJ9k6RGR48"
          title="Luis Eduardo Ortiz"
          message="Este es un comentario Este es un comentarioEste es un comentarioEste es un comentarioEste es un comentarioEste es un comentario"
        />

        <ProfileInfo />
      </ContainerPaper>
    </Box>
  )
}

export default App
