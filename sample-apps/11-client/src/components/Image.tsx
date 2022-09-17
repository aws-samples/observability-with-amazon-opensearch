type tImage = {
  src: string,
  title?: string
}

function Image({ src, title }: tImage) {
  return (
    <div>
      <img src={src} title={title || ""} alt="" />
    </div>
  )
}

export default Image;
