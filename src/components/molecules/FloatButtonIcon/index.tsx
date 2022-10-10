import { ButtonIcon } from "../../atoms"
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined"

export const FloatButtonIcon = () => {
  return (
    <ButtonIcon
      sx={{
        position: "fixed",
        right: 0,
        border: "none",
        borderRadius: "8px 0 0 8px",
        zIndex: 2,
        opacity: 1,
        width: 36,
        height: 36,
      }}
    >
      <SettingsOutlinedIcon fontSize="small" sx={{ color: "#fff" }} />
    </ButtonIcon>
  )
}
