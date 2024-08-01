'use client'

import Header from "@/components/Header";
import GamesList from "@/components/games-list";
import { logo } from "../../../assets";
import { Navbar } from "@/components/Navbar";

const Game = () => {
  return (
    <>
      <div className="w-full h-full min-h-screen p-6 bg-basic">
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