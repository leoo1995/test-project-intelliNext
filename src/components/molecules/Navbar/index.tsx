import { Box, Button, Toolbar } from "@mui/material"
import { NavButton } from "../../atoms"

export const Navbar = () => {
  const navButtons = [
    {
      label: "About",
      href: "#",
    },
    {
      label: "Photos",
      href: "#",
    },
    {
      label: "Friends",
      href: "#",
    },
  ]
  return (
    <Box>
      <Toolbar
        sx={{
          padding: 0,
          background: "#fff",
        }}
      >
        <Box ml={22} flexGrow={1} gap={1} display="flex">
          <NavButton href={"#"} active>
            Feed
          </NavButton>
          {navButtons.map(navButton => (
            <NavButton key={navButton.label} href={navButton.href}>
              {navButton.label}
            </NavButton>
          ))}
        </Box>
        <Button>Edit</Button>
      </Toolbar>
    </Box>
  )
}
