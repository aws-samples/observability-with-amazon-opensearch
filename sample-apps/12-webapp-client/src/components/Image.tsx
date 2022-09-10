type Image = {
  src: string,
  title?: string
}

export default function Image({ src, title }: Image) {

  return (
    <img src={src} title={title || ""} />
  )
}