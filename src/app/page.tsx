'use client'

import Header from "@/components/Header";
import MainGames from "@/components/main-games";
import Carousel from "@/components/Carousel";
import MainEarnGems from "@/components/main-earn-gems";
import MainLeaderBoard from "@/components/main-leaderboard";
import { Navbar } from "@/components/Navbar";
import { logo, main, gems } from "../../assets";


const MainCarousel = () => {
  return (
    <div className="w-full">
      <Carousel images={[main, gems, main]} />
    </div>
  )
}

export default function Home() {

  return (
    <>
      <div className="w-full h-full min-h-screen text-white bg-bgcolor">
        <Header imageSrc={logo} />
        <main className="flex flex-col items-center justify-between gap-6 px-6 mt-10">
          <MainCarousel />
          <MainGames />
          <MainEarnGems />
          <MainLeaderBoard />
        </main>
      </div>
      <Navbar />
    </>
  );
}
