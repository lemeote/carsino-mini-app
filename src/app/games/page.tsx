'use client'

import Header from "@/components/Header";
import GamesList from "@/components/games-list";
import { logo } from "../../../assets";
import { Navbar } from "@/components/Navbar";

const Game = () => {
  return (
    <>
      <div className="w-full h-full min-h-screen pt-6 pb-40 text-white bg-basic">
        <Header imageSrc={logo} />
        <main className="mt-10 px-6">
          <GamesList />
        </main>
      </div>
      <Navbar />
    </>
  );
}

export default Game;