import { Box, RadioGroup } from "@mui/material"
import { ContainerPaper, Paragraph, Title } from "../../atoms"
import { Poll } from "../../molecules"

export const Polls = () => {
  return (
    <ContainerPaper>
      <Title>Polls</Title>
      <Paragraph>Who is the best actor in MCU?</Paragraph>
      <Box display="grid">
        <RadioGroup name={"poll"}>
          <Poll valueOption={"RDJ"} label={"RDJ"} percentage={80} />
          <Poll
            valueOption={"Chris Hemsworth"}
            label={"Chris Hemsworth"}
            percentage={50}
          />
        </RadioGroup>
      </Box>
    </ContainerPaper>
  )
}
