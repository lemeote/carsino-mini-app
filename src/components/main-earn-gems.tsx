import Image from "next/image";
import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";

import { Icons } from "./Icons"
import { gems, main } from "../../assets";
import Carousel from "./Carousel";

const Header = () => {
  return (
    <div className="flex justify-between w-full">
      <div className="flex items-center justify-center gap-2">
        <Icons.mainIcon.gems_icon />
        <span>Earn Gems</span>
      </div>
      <div className="flex gap-6">
        <span className="flex items-center justify-center p-2 px-3 text-sm font-medium rounded-sm bg-button">See All</span>
        <div className="flex items-center justify-center gap-3">
          <div className="p-2 rounded-sm bg-button">
            <IoMdArrowDropleft size={18} />
          </div>
          <div className="p-2 rounded-sm bg-[#7819F3]">
            <IoMdArrowDropright size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

const MainEarnGems = () => {
  return (
    <>
      <Header />
      <div className="w-full">
        <Carousel images={[gems, main, gems]} />
      </div>
    </>
  );
}

export default MainEarnGems;