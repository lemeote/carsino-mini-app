import { useRouter } from "next/navigation";
import Image, { StaticImageData } from "next/image";
import { FaArrowLeft } from "react-icons/fa6";

import { Icons } from "./Icons";
import { logo } from "../../assets";

interface ImageProps {
  imageSrc: StaticImageData;
}

const Header: React.FC<ImageProps> = ({ imageSrc }) => {

  const router = useRouter();
  const notification = () => {
    router.push('/notification');
  }

  return (
    <div className="flex items-center justify-between w-full">
      {
        imageSrc === logo ?
          <Image src={imageSrc} alt="" width={96} height={38} />
          : <div className="flex items-center justify-center w-12 h-12 bg-button rounded-xl">
            <FaArrowLeft size={24} />
          </div>
      }
      <div className="flex gap-3">
        <div className="flex justify-center items-center gap-2 rounded-xl bg-button w-[123px] h-12 border border-border-color
">
          <Icons.headerButton.diamond_amount />
          <span>0,567889</span>
        </div>
        <div className="flex items-center justify-center w-12 h-12 border bg-button rounded-xl border-border-color" onClick={notification}>
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