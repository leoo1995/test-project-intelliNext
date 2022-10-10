import {
  Avatar,
  AvatarGroup,
  Box,
  FormControlLabel,
  Radio,
} from "@mui/material"
import { Paragraph, BorderLinearProgress, Title } from "../../atoms"

import people from "../../../assets/data/suggestions.json"

type Props = {
  valueOption: string
  label: string
  percentage: number
  name?: string
}
export const Poll = ({ label, valueOption, percentage, name }: Props) => {
  return (
    <Box display={"grid"} gap={1}>
      <Box
        display="flex"
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <FormControlLabel
          control={<Radio />}
          label={<Title>{label}</Title>}
          value={valueOption}
          name={name}
        />
        <Paragraph>{percentage}%</Paragraph>
      </Box>
      <BorderLinearProgress value={percentage} />
      <AvatarGroup total={people.length} sx={{ justifyContent: "start" }}>
        {people.map(person => (
          <Avatar
            key={person.id}
            src={person.profilePhoto}
            alt={person.firstName}
          />
        ))}
      </AvatarGroup>
    </Box>
  )
}
