import Image from "next/image";
import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";

import { Icons } from "./Icons";
import { keno_card, dice_card, plinko_card } from "@assets";
import { useRouter } from "next/navigation";

const Header = () => {
  return (
    <div className="flex justify-between w-full">
      <div className="flex items-center justify-center gap-2">
        <Icons.mainIcon.games_icon />
        <span>All Games</span>
      </div>
      <div className="flex gap-6">
        <span className="flex items-center justify-center rounded-sm p-2 px-3 bg-button font-medium text-sm">
          See All
        </span>
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

const GamesList = () => {
  const router = useRouter();
  const goToKeno = () => {
    router.push("/games/keno");
  };
  const goToDice = () => {
    router.push("/games/dice");
  };
  return (
    <div className="w-full">
      <Header />
      <main className="flex flex-wrap w-full justify-evenly gap-14 mt-6">
        <Image src={keno_card} alt="" width={150} onClick={goToKeno} className="cursor-pointer" />
        <Image src={dice_card} alt="" width={150} onClick={goToDice} className="cursor-pointer" />
        <Image src={plinko_card} alt="" width={150} />
      </main>
    </div>
  );
};

export default GamesList;
