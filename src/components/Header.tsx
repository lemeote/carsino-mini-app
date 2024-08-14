import { useRouter, usePathname } from "next/navigation";
import Image, { StaticImageData } from "next/image";
import { FaArrowLeft } from "react-icons/fa6";

import { Icons } from "./Icons";
import { logo } from "@assets";

interface ImageProps {
  imageSrc: StaticImageData;
}

const Header: React.FC<ImageProps> = ({ imageSrc }) => {
  const router = useRouter();
  const pathName = usePathname();

  const notification = () => {
    router.push("/notification");
  };

  const userProfile = () => {
    router.push("/user-info");
  };

  const backButton = () => {
    router.back();
  };

  const gotomainpage = () => {
    router.push("/");
  };

  return (
    <div className="sticky top-0 z-50 flex items-center justify-between w-full gap-5 p-3 pt-6 overflow-auto bg-inherit">
      {imageSrc === logo ? (
        <div className="w-24 cursor-pointer" onClick={gotomainpage}>
          <Image src={imageSrc} alt="" width={96} height={38} />
        </div>
      ) : (
        <div
          className="flex items-center justify-center w-12 h-12 cursor-pointer bg-button rounded-xl"
          onClick={backButton}
        >
          <FaArrowLeft size={24} />
        </div>
      )}
      <div className="flex gap-2 justify-stretch">
        <div
          className="flex justify-center items-center gap-2 rounded-xl bg-button w-[123px] h-12 border border-border-color
"
        >
          <Icons.headerButton.diamond_amount />
          <span>0,567889</span>
        </div>
        {pathName !== "/notification" ? (
          <div
            className="flex items-center justify-center w-12 h-12 border cursor-pointer bg-button rounded-xl border-border-color"
            onClick={notification}
          >
            <Icons.headerButton.noti_button color="#584D74" />
          </div>
        ) : (
          <div
            className={`flex items-center justify-center w-12 h-12 border bg-[#7819F3] rounded-xl border-border-color cursor-none`}
          >
            <Icons.headerButton.noti_button color="#FFF" />
          </div>
        )}
        {pathName !== "/user-info" ? (
          <div
            className="flex items-center justify-center w-12 h-12 border cursor-pointer bg-button rounded-xl border-border-color"
            onClick={userProfile}
          >
            <Icons.headerButton.user_avatar color="#584D74" />
          </div>
        ) : (
          <div className="flex items-center justify-center w-12 h-12 border bg-[#7819F3] rounded-xl border-border-color">
            <Icons.headerButton.user_avatar color="#FFF" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
