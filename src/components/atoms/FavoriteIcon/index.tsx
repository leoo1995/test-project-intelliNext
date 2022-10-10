import StarOutlineIcon from "@mui/icons-material/StarOutline"
import StarIcon from "@mui/icons-material/Star"
type Props = {
  active?: boolean
  size?: "small" | "inherit" | "large" | "medium" | undefined
}
export const FavoriteIcon = ({ active, size = "small" }: Props) => {
  return (
    <>
      {active ? (
        <StarIcon fontSize={size} sx={{ color: "#FF9F43" }} />
      ) : (
        <StarOutlineIcon fontSize={size} sx={{ color: "text.secondary" }} />
      )}
    </>
  )
}
