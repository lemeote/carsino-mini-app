"use client";

import Header from "@/components/Header";
import { Icons } from "@/components/Icons";
import { Navbar } from "@/components/Navbar";
import { ico_earning } from "@assets";
import { whyUnpaidRule } from "@temp";

const LeaderBoardHeader = () => {
  return (
    <div className="flex justify-between w-full px-6 mt-6">
      <div className="flex items-center justify-center gap-2">
        <div className="w-6 h-6">
          <Icons.mainIcon.leaderboard />
        </div>
        <span className="text-lg font-bold">Why unpaid</span>
      </div>
    </div>
  );
};

const Rule = ({ index, content }: { index: number; content: string }) => {
  return (
    <div className="flex gap-3 text-gray-600">
      <span className="bg-inherit flex justify-center items-center">
        {index <= 9 ? `0${index.toString()}` : index.toString()}
      </span>
      <span>{content}</span>
    </div>
  );
};

const WhyUnpaid = () => {
  return (
    <div className="w-full h-full pb-40 text-white min-h-screen pt-0 bg-bgcolor">
      <Header imageSrc={ico_earning} />
      <LeaderBoardHeader />
      <main className="p-6">
        <div className="flex flex-col gap-6">
          <div className="flex gap-4 items-center">
            <span className="bg-white rounded-[3px] w-5 h-5 text-black text-center flex items-center justify-center">
              #
            </span>
            <span className="text-base font-semibold">
              Why users might not get rewards
            </span>
          </div>
          <div className="flex flex-col gap-4">
            {whyUnpaidRule.map((item, index) => (
              <div key={index}>
                <Rule index={index + 1} content={item} />
              </div>
            ))}
          </div>
        </div>
      </main>
      <Navbar />
    </div>
  );
};

export default WhyUnpaid;
