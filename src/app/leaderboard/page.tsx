"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import Header from "@/components/Header";
import { Icons } from "@/components/Icons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Navbar } from "@/components/Navbar";
import { RankItem, MyRank } from "@/components/main-leaderboard";
import { myRank, leaderboardUserList, leaderboardEarnedRank } from "@temp";
import { bg_union, logo } from "@assets";

const LeaderBoardHeader = () => {
  const router = useRouter();
  const goToFAQ = () => {
    router.push("/leaderboard/FAQ");
  }

  return (
    <div className="flex justify-between w-full px-6 mt-6">
      <div className="flex items-center justify-center gap-2">
        <div className="w-6 h-6">
          <Icons.mainIcon.leaderboard />
        </div>
        <span className="text-lg font-bold">leaderboard</span>
      </div>
      <div className="bg-inherit text-gray-600 border border-border-color rounded-xl px-3 py-1 flex gap-2 justify-center items-center cursor-pointer" onClick={goToFAQ}>
        <span className="w-5 h-5 rounded-full bg-gray-600 text-black font-bold p-1 flex items-center justify-center">
          !
        </span>
        <span>How it works</span>
      </div>
    </div>
  );
};

const EarnedRank = () => {
  const router = useRouter();
  const goToPreviousRewards = () => {
    router.push("/leaderboard/previous-reward");
  };
  return (
    <div className="w-full h-full bg-invite-friend bg-no-repeat bg-cover bg-center rounded-3xl p-4 flex flex-col gap-5">
      <div className="flex flex-wrap gap-3 justify-center">
        <div className="flex flex-col">
          <span className="text-xl font-extrabold text-center">
            Battle for the Top
          </span>
          <span className="text-sm font-medium text-center">
            Ends in: 15h 07m 38s
          </span>
        </div>
        <div
          className="bg-gradient-to-t from-[#929DFF] to-[#6B79FF] flex justify-center items-center px-3 py-1 rounded-xl cursor-pointer"
          onClick={goToPreviousRewards}
        >
          <span className="text-xs font-semibold text-center ">
            Previous winnings
          </span>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        {leaderboardEarnedRank.map((item, index) => (
          <div className="relative" key={index}>
            <Image src={bg_union} alt="" />
            <div className="absolute flex flex-col justify-center items-center top-0 left-0 w-full h-full text-xs">
              <span>{item.rank}</span>
              <span>{item.earned}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const LeaderBoard = () => {
  const [active, setActive] = useState<string>("Daily");

  return (
    <div className="w-full h-full pb-40 text-white min-h-screen pt-0 bg-bgcolor">
      <Header imageSrc={logo} />
      <LeaderBoardHeader />
      <main className="p-6">
        <Tabs defaultValue="Daily">
          <TabsList className="grid w-full grid-cols-3 bg-inherit border border-border-color rounded-xl">
            <TabsTrigger
              value="Daily"
              className={`${
                active === "Daily"
                  ? "bg-button text-white"
                  : "bg-inherit text-gray-600"
              }`}
              onClick={() => {
                setActive("Daily");
              }}
            >
              Daily
            </TabsTrigger>
            <TabsTrigger
              value="Weekly"
              className={`${
                active === "Weekly"
                  ? "bg-button text-white"
                  : "bg-inherit text-gray-600"
              }`}
              onClick={() => {
                setActive("Weekly");
              }}
            >
              Weekly
            </TabsTrigger>
            <TabsTrigger
              value="Monthly"
              className={`${
                active === "Monthly"
                  ? "bg-button text-white"
                  : "bg-inherit text-gray-600"
              }`}
              onClick={() => {
                setActive("Monthly");
              }}
            >
              Monthly
            </TabsTrigger>
          </TabsList>
          <TabsContent value="Daily">
            <div className="flex flex-col gap-4">
              <EarnedRank />
              <MyRank
                rank={myRank.rank}
                userId={myRank.userId}
                userName={myRank.userName}
                userImage={myRank.userImage}
                userStatus={myRank.userStatus}
                amount={myRank.amount}
              />
              {leaderboardUserList.map((item, index) => (
                <div key={index}>
                  <RankItem
                    rank={item.rank}
                    userImage={item.userImage}
                    userStatus={item.userStatus}
                    userId={item.userId}
                    userName={item.userName}
                    amount={item.amount}
                  />
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="Weekly">
            <div className="flex flex-col gap-4">
              <EarnedRank />
              <MyRank
                rank={myRank.rank}
                userId={myRank.userId}
                userName={myRank.userName}
                userImage={myRank.userImage}
                userStatus={myRank.userStatus}
                amount={myRank.amount}
              />
              {leaderboardUserList.map((item, index) => (
                <div key={index}>
                  <RankItem
                    rank={item.rank}
                    userImage={item.userImage}
                    userStatus={item.userStatus}
                    userId={item.userId}
                    userName={item.userName}
                    amount={item.amount}
                  />
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="Monthly">
            <div className="flex flex-col gap-4">
              <EarnedRank />
              <MyRank
                rank={myRank.rank}
                userId={myRank.userId}
                userName={myRank.userName}
                userImage={myRank.userImage}
                userStatus={myRank.userStatus}
                amount={myRank.amount}
              />
              {leaderboardUserList.map((item, index) => (
                <div key={index}>
                  <RankItem
                    rank={item.rank}
                    userImage={item.userImage}
                    userStatus={item.userStatus}
                    userId={item.userId}
                    userName={item.userName}
                    amount={item.amount}
                  />
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
      <Navbar />
    </div>
  );
};

export default LeaderBoard;
