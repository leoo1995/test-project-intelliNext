import { Paragraph, Title } from "../../atoms"

type Props = {
  title?: string
  message?: string
}
export const InfoField = ({ title, message }: Props) => {
  return (
    <>
      <Title>{title}</Title>
      <Paragraph>{message}</Paragraph>
    </>
  )
}
