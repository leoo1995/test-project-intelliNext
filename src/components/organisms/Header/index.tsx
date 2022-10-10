import { Avatar, Box, Typography } from "@mui/material"
import { ContainerPaper, Image } from "../../atoms"
import { Navbar } from "../../molecules"
import userAuth from "../../../assets/data/authUser.json"
export const Header = () => {
  return (
    <ContainerPaper
      sx={{
        p: 0,
        background: `url(${userAuth.backgroundPhoto})`,
        minHeight: 300,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
      overflow="hidden"
    >
      <Box display={"flex"} flex="auto" alignItems={"end"}>
        <Box
          p={1}
          ml={4}
          bgcolor={"#fff"}
          borderRadius={1}
          zIndex={1}
          sx={{
            transform: "translateY(40px)",
            boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
          }}
        >
          <Avatar
            variant="rounded"
            sx={{ width: 126, height: 126 }}
            src={userAuth.profilePhoto}
          />
        </Box>
        <Box mb={2} ml={3}>
          <Typography variant="h4" color={"#fff"}>
            {userAuth.firstName} {userAuth.lastName}
          </Typography>
          <Typography color={"#fff"}>{userAuth.title}</Typography>
        </Box>
      </Box>
      <Navbar />
    </ContainerPaper>
  )
}
