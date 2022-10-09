import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import FavoriteIcon from "@mui/icons-material/Favorite"
type Props = {
  active?: boolean
}
export const LikeIcon = ({ active }: Props) => {
  return (
    <>
      {active ? (
        <FavoriteIcon fontSize="small" sx={{ color: "#EA5455ff" }} />
      ) : (
        <FavoriteBorderIcon fontSize="small" color={"primary"} />
      )}
    </>
  )
}
