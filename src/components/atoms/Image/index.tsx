import styles from "./styles.module.css"
type ImgProps = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>
type Props = ImgProps & {}

export const Image = (props: Props) => {
  return (
    <img {...props} className={[styles.image, props?.className].join(" ")} />
  )
}
