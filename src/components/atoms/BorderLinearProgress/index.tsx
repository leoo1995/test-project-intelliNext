import { styled } from "@mui/material/styles"

import LinearProgress, {
  linearProgressClasses,
  LinearProgressProps,
} from "@mui/material/LinearProgress"

const BorderLinearProgressCustom = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#EEEDFD",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.primary,
  },
}))

type Props = LinearProgressProps & {}
export const BorderLinearProgress = (props: Props) => {
  return <BorderLinearProgressCustom {...props} variant="determinate" />
}
