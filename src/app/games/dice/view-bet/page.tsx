"use client";

import React, { useState } from "react";
import Image from "next/image";

import { AllBets, DicePlayer } from "@/components/games-dice-bet-item";
import { diamond_icon, ico_voice, ico_question } from "@assets";
import Header from "@/components/Header";

const DiceHeader = () => {
  return (
    <div className="flex justify-between w-full gap-2">
      <span className="text-lg font-bold">Dice Battle</span>
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

const Main = () => {
  const [playerOne, setPlayerOne] = useState<boolean>(true);
  const [playerTwo, setPlayerTwo] = useState<boolean>(false);
  const selectedPlayer = () => {
    setPlayerOne(!playerOne);
    setPlayerTwo(!playerTwo);
  };

  return (
    <div className="w-full h-full min-h-screen text-white text-xs bg-bgcolor pb-6">
      <header>
        <Header imageSrc={diamond_icon} />
      </header>
      <main className="px-6 mt-6">
        <div className="relative">
          <DiceHeader />
          <div className="flex flex-col gap-4 mt-6">
            <DicePlayer
              player={1}
              status={playerOne}
              selectplayer={selectedPlayer}
            />
            <DicePlayer
              player={2}
              status={playerTwo}
              selectplayer={selectedPlayer}
            />
            <AllBets />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Main;
