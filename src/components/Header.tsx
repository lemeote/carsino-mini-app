import Image, { StaticImageData } from "next/image";

import { Icons } from "./Icons";

interface ImageProps {
  imageSrc: StaticImageData;
}

const Header: React.FC<ImageProps> = ({ imageSrc }) => {
  return (
    <div className="flex items-center justify-between w-full">
      <Image src={imageSrc} alt="" width={96} height={38}/>
      <div className="flex gap-3">
        <div className="flex justify-center items-center gap-2 rounded-xl bg-button w-[123px] h-12 border border-border-color
">
          <Icons.headerButton.diamond_amount />
          <span>0,567889</span>
        </div>
        <div className="flex items-center justify-center w-12 h-12 border bg-button rounded-xl border-border-color">
            <Icons.headerButton.noti_button />
        </div>
        <div className="flex items-center justify-center w-12 h-12 border bg-button rounded-xl border-border-color">
          <Icons.headerButton.user_avatar />
        </div>
      </div>
    </div>
  );
}

export default Header;