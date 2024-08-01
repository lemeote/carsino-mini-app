'use client'


import Image from "next/image";

import Header from "@/components/Header";
import MainGames from "@/components/main-games";
import MainCarousel from "@/components/Carousel";
import { logo, main } from "../../assets";
import MainEarnGems from "@/components/main-earn-gems";
import MainLeaderBoard from "@/components/main-leaderboard";
import { Navbar } from "@/components/Navbar";

export default function Home() {

  return (
    <>
      <div className="w-full h-full p-6 bg-basic">
        <Header imageSrc={logo} />
        <main className="flex flex-col items-center gap-10 mt-10">
          {/* <MainCarousel /> */}
          <div className="m-auto">
            <Image src={main} alt="" width={400} height={300} />
          </div>
          <MainGames />
          <MainEarnGems />
          <MainLeaderBoard />
        </main>
      </div>
      <Navbar />
    </>
  );
}
