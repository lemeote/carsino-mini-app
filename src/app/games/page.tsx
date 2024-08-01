'use client'

import Header from "@/components/Header";
import GamesList from "@/components/games-list";
import { logo } from "../../../assets";
import { Navbar } from "@/components/Navbar";

const Game = () => {
  return (
    <>
      <div className="w-full h-full p-6 pb-40 text-white bg-basic">
        <Header imageSrc={logo} />
        <main className="flex flex-col items-center gap-10 mt-10">
          <GamesList />
        </main>
      </div>
      <Navbar />
    </>
  );
}

export default Game;