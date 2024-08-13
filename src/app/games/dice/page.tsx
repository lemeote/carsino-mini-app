"use client";

import Image from "next/image";

import { user1, user2, ico_battle, diamond_icon, ico_filter } from "@assets";
import { Icons } from "@/components/Icons";
import Header from "@/components/Header";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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

const DiceHeader = () => {
  return (
    <div className="flex flex-wrap justify-evenly w-full gap-2">
      <span className="text-lg font-bold">12 Active battle</span>
      <div className="flex gap-2 items-center">
        <div className="flex justify-center items-center bg-inherit border-border-color border rounded-full">
          <SelectDemo />
        </div>
        <div className="flex justify-center items-center bg-[#7819F3] border border-border-color gap-1 p-3 rounded-md">
          <Image src={ico_battle} alt="" />
          <span>Create battle</span>
        </div>
      </div>
    </div>
  );
};

const BetItem = () => {
  return (
    <div className="bg-basic border border-border-color rounded-3xl p-5 flex flex-wrap justify-evenly items-center gap-2">
      <div className="flex justify-between gap-1 items-center">
        <div className="flex flex-col gap-1 justify-center items-center w-11">
          <div className="w-8 h-8">
            <Image
              src={user1}
              alt="user1"
              width={32}
              height={32}
              className="border rounded-full"
            />
          </div>
          <span>Nenson</span>
        </div>
        <span className="text-sm text-gray-500 leading-4 italic font-extrabold">
          VS
        </span>
        <div className="flex flex-col gap-1 justify-center items-center w-11">
          <div className="w-8 h-8">
            <Image
              src={user2}
              alt="user1"
              width={32}
              height={32}
              className="border rounded-full"
            />
          </div>
          <span>Tervor</span>
        </div>
      </div>
      <div className="flex flex-col justify-between gap-2 items-center">
        <span className="text-sm font-bold leading-4 text-gray-500">01/05</span>
        <span>Round</span>
      </div>
      <div className="flex flex-col justify-center gap-2 items-end">
        <div className="py-2 px-3 bg-button border border-border-color rounded-xl">
          View bet
        </div>
        <div className="flex gap-1 items-center">
          <span className="text-xs text-gray-500 leading-4 font-semibold">
            Bet:
          </span>
          <span>100000</span>
          <Icons.headerButton.diamond_amount />
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
        <DiceHeader />
        <div className="flex flex-col gap-4 min-h-screen w-full h-full mt-6">
          {Array.from({ length: 10 }, (_, index) => (
            <BetItem />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dice;
