import { useRouter } from "next/navigation";
import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";

import GameSlide from "@/components/GameSlide";
import React, { useRef } from "react";
import { Icons } from "./Icons";
import { keno_card, dice_card, plinko_card } from "@assets";

interface HeaderProps {
  scrollPrev: () => void;
  scrollNext: () => void;
}

const Header: React.FC<HeaderProps> = ({ scrollPrev, scrollNext }) => {
  const router = useRouter();
  const goToGamesPage = () => {
    router.push("/games");
  };
  return (
    <div className="flex justify-between w-full">
      <div className="flex items-center justify-center gap-2">
        <Icons.mainIcon.games_icon />
        <span>Games</span>
      </div>
      <div className="flex gap-6">
        <span
          className="flex items-center justify-center p-2 px-3 text-sm font-medium rounded-sm bg-button cursor-pointer"
          onClick={goToGamesPage}
        >
          See All
        </span>
        <div className="flex items-center justify-center gap-3">
          <div
            className="p-2 rounded-sm bg-button cursor-pointer"
            onClick={scrollPrev}
          >
            <IoMdArrowDropleft size={18} />
          </div>
          <div
            className="p-2 rounded-sm bg-[#7819F3] cursor-pointer"
            onClick={scrollNext}
          >
            <IoMdArrowDropright size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

const MainGames = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const scrollPrev = () => {
    prevRef?.current?.click();
  };

  const scrollNext = () => {
    nextRef?.current?.click();
  };

  return (
    <>
      <Header scrollPrev={scrollPrev} scrollNext={scrollNext} />
      <GameSlide
        images={[keno_card, dice_card, plinko_card]}
        prevRef={prevRef}
        nextRef={nextRef}
      />
    </>
  );
};

export default MainGames;
