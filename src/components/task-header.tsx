import Image, { StaticImageData } from "next/image"

interface Props {
  imgSrc: StaticImageData
}

export const TaskHeader:React.FC<Props> = ({imgSrc}) => {
  return (
    <div className="flex items-center gap-2">
      <Image src={imgSrc} alt="" />
      <span className="text-lg font-bold">Earn gems</span>
    </div>
  )
}