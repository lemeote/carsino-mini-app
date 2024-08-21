"use client";

import { useState } from "react";
import Image from "next/image";

import Header from "@/components/Header";
import { BetAmount } from "@/components/games-keno-bet-amount";
import { NumberSelect } from "@/components/games-keno-number-select";
import { diamond_icon, ico_voice, ico_question } from "@assets";

const KenoHeader = () => {
  return (
    <div className="flex justify-between w-full gap-2">
      <span className="text-lg font-bold">KENO</span>
      <div className="flex gap-2 items-center">
        <div className="flex justify-center items-center bg-inherit border-border-color border w-6 h-6 rounded-full">
          <Image src={ico_voice} alt="" />
        </div>
        <div className="flex justify-center items-center border border-border-color gap-1 px-2 py-1 rounded-md">
          <Image src={ico_question} alt="" />
          <span className="text-[#584D74] font-bold leading-[18px] text-center">
            How to play
          </span>
        </div>
      </div>
    </div>
  );
};

const Keno = () => {
  const [betStatus, setBetStatus] = useState<boolean>(false);
  const [randomNumberList, setRandomNumberList] = useState<number[]>([]);
  const kenoBet = () => {
    setBetStatus(true);
  };

  const autoBet = (min: number, max: number, count: number) => {
    let randomNumbers: number[] = [];
    while (randomNumbers.length < count) {
      const num = Math.floor(Math.random() * (max - min + 1)) + min;
      if (!randomNumbers.includes(num)) randomNumbers.push(num);
    }
    setRandomNumberList(randomNumbers);
    setBetStatus(true);

  };

  return (
    <div className="w-full h-full min-h-screen text-white text-xs bg-bgcolor pb-6">
      <header>
        <Header imageSrc={diamond_icon} />
      </header>
      <main className="px-6 mt-6">
        <KenoHeader />
        <div className="flex flex-col gap-2 min-h-screen w-full h-full mt-6">
          <NumberSelect
            betStatus={betStatus}
            randomNumbers={randomNumberList}
          />
          <BetAmount kenoBet={kenoBet} autoBet={()=>autoBet(1, 40, 10)} />
        </div>
      </main>
    </div>
  );
};

export default Keno;
