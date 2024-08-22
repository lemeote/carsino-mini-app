"use client";

import Image from "next/image";

import { ico_battle, diamond_icon, ico_filter } from "@assets";
import Header from "@/components/Header";
import { BetItem } from "@/components/games-dice-bet-item";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DICE_BET_LIST } from "@temp";
import { useRouter } from "next/navigation";

interface ActiveBattleProps {
  count: number;
}

const SelectDemo = () => {
  return (
    <Select>
      <SelectTrigger className="bg-bgcolor text-white">
        <div className="flex gap-2 text-[#584D74]">
          <Image src={ico_filter} alt="" />
          <SelectValue defaultValue={"High"} placeholder="High" />
        </div>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="High">High</SelectItem>
          <SelectItem value="Medium">Medium</SelectItem>
          <SelectItem value="Low">Low</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

const DiceHeader: React.FC<ActiveBattleProps> = ({ count }) => {
  const router = useRouter();
  const gotoCreateBattle = () => {
    router.push("/game/dice/create-bet");
  };

  return (
    <div className="flex flex-wrap justify-evenly w-full gap-2">
      <span className="text-lg font-bold">{`${count} Active battle`}</span>
      <div className="flex gap-2 items-center">
        <div className="flex justify-center items-center bg-inherit border-border-color border rounded-full">
          <SelectDemo />
        </div>
        <div
          className="flex justify-center items-center bg-[#7819F3] border border-border-color gap-1 p-3 rounded-md cursor-pointer"
          onClick={gotoCreateBattle}
        >
          <Image src={ico_battle} alt="" />
          <span>Create battle</span>
        </div>
      </div>
    </div>
  );
};

const Dice = () => {
  return (
    <div className="w-full h-full min-h-screen text-white text-xs bg-bgcolor pb-6">
      <header>
        <Header imageSrc={diamond_icon} />
      </header>
      <main className="px-6 mt-6">
        <DiceHeader count={13} />
        <div className="flex flex-col gap-4 min-h-screen w-full h-full mt-6">
          {DICE_BET_LIST.map((item, index) => (
            <BetItem user1={item.user1} user2={item.user2} key={index} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dice;
