'use client'


import Image from "next/image";

import Header from "@/components/Header";
import MainGames from "@/components/main-games";
import Carousel from "@/components/Carousel";
import { logo, main, gems, dice_card } from "../../assets";
import MainEarnGems from "@/components/main-earn-gems";
import MainLeaderBoard from "@/components/main-leaderboard";
import { Navbar } from "@/components/Navbar";

export default function Home() {

  return (
    <>
      <div className="w-full h-full p-6 text-white bg-bgcolor">
        <Header imageSrc={logo} />
        <main className="flex flex-col items-center gap-10 mt-10">
          <Carousel images={[main, gems, main, gems]}/>
          <MainGames />
          <MainEarnGems />
          <MainLeaderBoard />
        </main>
      </div>
      <Navbar />
    </>
  );
}
