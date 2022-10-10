import StarOutlineIcon from "@mui/icons-material/StarOutline"
import StarIcon from "@mui/icons-material/Star"
type Props = {
  active?: boolean
}
export const FavoriteIcon = ({ active }: Props) => {
  return (
    <>
      {active ? (
        <StarIcon fontSize="small" sx={{ color: "#FF9F43" }} />
      ) : (
        <StarOutlineIcon fontSize="small" sx={{ color: "text.secondary" }} />
      )}
    </>
  )
}
