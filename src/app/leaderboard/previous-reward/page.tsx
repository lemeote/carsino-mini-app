"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import Header from "@/components/Header";
import { Icons } from "@/components/Icons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Navbar } from "@/components/Navbar";
import { RewardRankItem } from "@/components/main-leaderboard";
import { leaderboardUserList } from "@temp";
import { ico_earning, ico_right_arrow } from "@assets";

const LeaderBoardHeader = () => {
  return (
    <div className="flex justify-between w-full px-6 mt-6">
      <div className="flex items-center justify-center gap-2">
        <div className="w-6 h-6">
          <Icons.mainIcon.leaderboard />
        </div>
        <span className="text-lg font-bold">Previous winnings</span>
      </div>
    </div>
  );
};

const MyReward = () => {
  return (
    <div className="flex items-center justify-between w-full p-4 bg-[#7819F3] border border-gray-400 rounded-xl my-4">
      <div className="flex gap-2 justify-center items-center">
        <span>My rewards</span>
        <Image src={ico_right_arrow} alt="" />
      </div>
      <div className="flex flex-col text-right">
        <div className="flex gap-2 items-center">
          <span className="text-xs text-gray-400">1206</span>
          <Icons.mainIcon.gems_icon />
        </div>
        <span className="text-xs">230$</span>
      </div>
    </div>
  );
};

const LeaderBoard = () => {
  const [active, setActive] = useState<string>("Daily");

  return (
    <div className="w-full h-full pb-40 text-white min-h-screen pt-0 bg-bgcolor">
      <Header imageSrc={ico_earning} />
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
            <MyReward />
            <div className="flex flex-col gap-4">
              {leaderboardUserList.map((item, index) => (
                <div key={index}>
                  <RewardRankItem
                    rank={item.rank}
                    userImage={item.userImage}
                    userStatus={item.userStatus}
                    userId={item.userId}
                    userName={item.userName}
                    amount={item.amount}
                    earnedAmount={item.earnedAmount}
                  />
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="Weekly">
            <MyReward />
            <div className="flex flex-col gap-4">
              {leaderboardUserList.map((item, index) => (
                <div key={index}>
                  <RewardRankItem
                    rank={item.rank}
                    userImage={item.userImage}
                    userStatus={item.userStatus}
                    userId={item.userId}
                    userName={item.userName}
                    amount={item.amount}
                    earnedAmount={item.earnedAmount}
                  />
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="Monthly">
            <MyReward />
            <div className="flex flex-col gap-4">
              {leaderboardUserList.map((item, index) => (
                <div key={index}>
                  <RewardRankItem
                    rank={item.rank}
                    userImage={item.userImage}
                    userStatus={item.userStatus}
                    userId={item.userId}
                    userName={item.userName}
                    amount={item.amount}
                    earnedAmount={item.earnedAmount}
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
