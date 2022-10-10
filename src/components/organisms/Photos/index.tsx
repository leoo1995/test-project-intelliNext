import { Box } from "@mui/material"
import { ContainerPaper, Image, Title } from "../../atoms"
import photos from "../../../assets/data/photos.json"
export const Photos = () => {
  return (
    <ContainerPaper>
      <Title>Latest Photos</Title>
      <Box
        display={"grid"}
        gridTemplateColumns={"repeat(3, 1fr)"}
        gap={"8px 16px"}
      >
        {photos.map(photo => (
          <Image src={photo.src} alt={photo.src} />
        ))}
      </Box>
    </ContainerPaper>
  )
}
