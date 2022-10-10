import { FC, ReactNode } from "react"
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material"

const theme = createTheme({
  palette: {
    primary: { main: "#7367F0" },
    text: {
      primary: "#605A74",
      secondary: "#6F6C7C",
    },
  },
  typography: {
    fontFamily: "'Nunito Sans',Roboto, sans-serif",
  },
  components: {
    MuiButton: {
      defaultProps: {
        style: {
          textTransform: "none",
        },
        variant: "contained",
      },
    },
  },
})

type ThemeProps = {
  children: ReactNode
}
export const ThemeConfig: FC<ThemeProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
