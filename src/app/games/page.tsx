"use client";

import Header from "@/components/Header";
import GamesList from "@/components/games-list";
import { logo } from "@assets";
import { Navbar } from "@/components/Navbar";

const Game = () => {
  return (
      <div className="w-full h-full min-h-screen pb-40 text-white bg-basic">
        <Header imageSrc={logo} />
        <main className="px-6 mt-10">
          <GamesList />
        </main>
        <Navbar />
      </div>
  );
};

export default Game;
