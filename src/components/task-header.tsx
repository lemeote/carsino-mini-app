import Image, { StaticImageData } from "next/image"

interface Props {
  imgSrc: StaticImageData,
  title: String,
}

export const TaskHeader:React.FC<Props> = ({imgSrc, title}) => {
  return (
    <div className="flex items-center gap-2">
      <Image src={imgSrc} alt="" />
      <span className="text-lg font-bold">{title}</span>
    </div>
  )
}