
interface IMedia {
  title: string
  source: string
}

export const Video = ({ source, title }: IMedia) => {
  return (
    <video autoPlay={true}  controls={false} loop title={title} disablePictureInPicture  muted playsInline>
      <source type="video/webm"  src={`${source}.webm`}></source>
    </video>
  )
}

