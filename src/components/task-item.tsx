import { useRouter } from "next/navigation"
import Image, { StaticImageData } from "next/image"
import { Button } from "@/components/ui/button"
import { TitleProps } from "@telegram-apps/telegram-ui";

interface Props {
  icoSrc: StaticImageData,
  title: string,
  content: string,
  buttonTitle: string,
}


export const TaskItem: React.FC<Props> = ({ icoSrc, title, content, buttonTitle }) => {
  
  const router = useRouter();
  const gotoDetailItem = (e:string) => {
    if(e === "Claim now")
    {
      router.push('/daily-bonus')
    }
  }
  return (
    <div className="flex gap-2 p-6 justify-between items-center bg-inherit border border-border-color rounded-3xl">
      <div className="w-auto h-auto flex items-center justify-center">
        <Image src={icoSrc} alt="" width={57} height={57} />
      </div>
      <div className="flex flex-col gap-2 w-[75%]">
        <div className="flex flex-wrap justify-around items-center gap-2 w-full">
          <span className="text-base font-medium">{title}</span>
          <Button className="bg-inherit border border-border-color text-xs rounded-sm" onClick={(
  )=>gotoDetailItem(buttonTitle)}>{buttonTitle}</Button>
        </div>
        <div className="text-xs text-[#ffffff60]">{content}</div>
      </div>
    </div>
  )
}