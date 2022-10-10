import { ButtonIcon, ContainerPaper, Title } from "../../atoms"
import suggestionsData from "../../../assets/data/suggestions.json"
import { Box } from "@mui/material"
import { Entity } from "../../molecules"
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined"

export const Suggestions = () => {
  return (
    <ContainerPaper>
      <Title mb={3}>Suggestions</Title>
      <Box display={"grid"} gap={1}>
        {suggestionsData.map(
          ({ profilePhoto, firstName, lastName, mutualFriends, id }) => (
            <Box key={id} display="flex" alignItems={"center"} gap={2}>
              <Entity
                src={profilePhoto}
                title={`${firstName} ${lastName}`}
                subtitle={`${mutualFriends} Mutual Friends`}
                containerProps={{
                  flex: "auto",
                }}
              />
              <ButtonIcon tooltipTitle="Add friend">
                <PersonAddAltOutlinedIcon fontSize="small" />
              </ButtonIcon>
            </Box>
          ),
        )}
      </Box>
    </ContainerPaper>
  )
}
