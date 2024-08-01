'use client'

import Header from "@/components/Header";
import GamesList from "@/components/games-list";
import { logo } from "../../../assets";
import { Navbar } from "@/components/Navbar";

const Game = () => {
  return (
    <>
      <div className="w-full h-screen p-6 pb-40 text-white bg-basic overflow-auto">
        <Header imageSrc={logo} />
        <main className="mt-10">
          <GamesList />
        </main>
      </div>
      <Navbar />
    </>
  );
}

export default Game;