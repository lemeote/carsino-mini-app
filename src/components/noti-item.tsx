import Image, { StaticImageData } from "next/image";

interface NotiItemProps {
  notiIcon: StaticImageData,
  title: string,
  content: string,
  unread: boolean,
  alerttime: string,
}

const NotiItem: React.FC<NotiItemProps> = ({ notiIcon, title, content, unread, alerttime }) => {
  return (
    <div className={`p-6 flex gap-3 text-white ${unread === true ? 'bg-basic border border-border-color' : ''}`}>
      <div className="flex justify-center items-center !w-[34px] !h-[34px] rounded-full bg-[#31254C]">
        <Image src={notiIcon} alt="" width={16} height={16} />
      </div>
      <div className="text-left">
        <div className="flex justify-between w-full">
          <h1>{title}</h1>
          <span className="text-xs text-[#b9b9b933]">{alerttime}</span>
        </div>
        <span className="text-[14px]">
          {content}
        </span>
      </div>
    </div>
  );
}

export default NotiItem;