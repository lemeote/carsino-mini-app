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
    <div className={`p-6 flex w-full justify-between gap-3 text-white hover:bg-button ${unread === true ? 'bg-basic border border-border-color' : ''}`}>
      <div className="flex justify-center p-2 h-full items-center rounded-full bg-[#31254C]">
        <div style={{ width: 16, height: 17 }}>
          <Image src={notiIcon} alt="" width={16} height={16} />
        </div>
      </div>
      <div className="text-left">
        <div className="flex justify-between w-full">
          <h1>{title}</h1>
          <div className="flex justify-center items-center gap-1">
            <div className={`${unread === true ? 'w-2 h-2 rounded-full bg-[#7819F3]':'hidden'}`}></div>
            <span className="text-xs text-[#b9b9b933]">{alerttime}</span>
          </div>
        </div>
        <span className="text-[14px] text-[#b9b9b933]">
          {content}
        </span>
      </div>
    </div>
  );
}

export default NotiItem;