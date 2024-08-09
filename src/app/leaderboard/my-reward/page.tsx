"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import Header from "@/components/Header";
import { Icons } from "@/components/Icons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Navbar } from "@/components/Navbar";
import { MyRewardList } from "@/components/main-leaderboard";
import { myRewardList } from "@temp";
import { ico_earning, ico_right_arrow } from "@assets";

const LeaderBoardHeader = () => {
  return (
    <div className="flex justify-between w-full px-6 mt-6">
      <div className="flex items-center justify-center gap-2">
        <div className="w-6 h-6">
          <Icons.mainIcon.leaderboard />
        </div>
        <span className="text-lg font-bold">My winnings</span>
      </div>
    </div>
  );
};


const LeaderBoardMyReward = () => {
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
            <div className="flex flex-col gap-4">
              {myRewardList.map((item, index) => (
                <div key={index}>
                  <MyRewardList
                    PayDate={item.payDate}
                    payStatus={item.payStatus}
                    amount={item.amount}
                    earnedAmount={item.earnedAmount}
                  />
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="Weekly">
            <div className="flex flex-col gap-4">
              {myRewardList.map((item, index) => (
                <div key={index}>
                  <MyRewardList
                    PayDate={item.payDate}
                    payStatus={item.payStatus}
                    amount={item.amount}
                    earnedAmount={item.earnedAmount}
                  />
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="Monthly">
            <div className="flex flex-col gap-4">
              {myRewardList.map((item, index) => (
                <div key={index}>
                  <MyRewardList
                    PayDate={item.payDate}
                    payStatus={item.payStatus}
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

export default LeaderBoardMyReward;
