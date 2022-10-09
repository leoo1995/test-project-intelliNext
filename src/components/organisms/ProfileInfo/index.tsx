import { Box, Typography } from "@mui/material"
import { ContainerPaper } from "../../atoms"
import info from "../../../assets/data/authUser.json"
import { formatDateMedium } from "../../../utils/formatDateMedium"
import { InfoField } from "../../molecules"
export const ProfileInfo = () => {
  const userAuth = info
  const { location } = userAuth
  const fields = [
    { title: "About", message: userAuth.description },
    { title: "Joined", message: formatDateMedium(userAuth.joined) },
    { title: "Lives", message: `${location.city}, ${location.country}` },
    { title: "Email", message: userAuth.email },
    { title: "Website", message: userAuth.website },
  ]
  return (
    <ContainerPaper>
      <Box display="flex" flexDirection={"column"} gap={1}>
        {fields.map(field => (
          <InfoField
            key={field.title}
            title={field.title}
            message={field.message}
          />
        ))}
      </Box>
    </ContainerPaper>
  )
}
