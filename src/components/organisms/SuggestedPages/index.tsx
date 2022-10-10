import { ContainerPaper, FavoriteIcon, Title } from "../../atoms"
import suggestionsData from "../../../assets/data/suggestedPages.json"
import { Box, IconButton } from "@mui/material"
import { Entity } from "../../molecules"

export const SuggestedPages = () => {
  return (
    <ContainerPaper>
      <Title mb={3}>Suggested Pages</Title>
      <Box display={"grid"} gap={1}>
        {suggestionsData.map(
          ({ profilePhoto, firstName, lastName, id, favorite, company }) => (
            <Box key={id} display="flex" alignItems={"center"} gap={2}>
              <Entity
                src={profilePhoto}
                title={`${firstName} ${lastName}`}
                subtitle={company}
                containerProps={{
                  flex: "auto",
                }}
              />
              <IconButton>
                <FavoriteIcon active={favorite} />
              </IconButton>
            </Box>
          ),
        )}
      </Box>
    </ContainerPaper>
  )
}
