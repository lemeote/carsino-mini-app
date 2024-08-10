"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import Header from "@/components/Header";
import { Icons } from "@/components/Icons";
import { ico_earning } from "@assets";
import { FAQListContent } from "@temp";

interface FAQListProps {
  title: string;
  content: {
    index: string;
    content: string;
  }[];
}

const FAQHeader = () => {
  return (
    <div className="flex justify-between w-full px-6 mt-6">
      <div className="flex items-center justify-center gap-2">
        <div className="w-6 h-6">
          <Icons.mainIcon.leaderboard />
        </div>
        <span className="text-lg font-bold">How to it works</span>
      </div>
    </div>
  );
};

const FAQTitle = ({ title }: { title: string }) => {
  return (
    <div className="flex gap-4 items-center">
      <span className="bg-white rounded-[3px] w-5 h-5 text-black text-center flex items-center justify-center">
        #
      </span>
      <span className="text-base font-semibold">{title}</span>
    </div>
  );
};

const FAQ: React.FC<{ content: { index: string; content: string } }> = ({
  content,
}) => {
  return (
    <div className="flex gap-3 text-gray-600">
      <span className="bg-inherit flex justify-center items-center">
        {content.index}
      </span>
      <span>{content.content}</span>
    </div>
  );
};

const FAQList: React.FC<FAQListProps> = ({ title, content }) => {
  return (
    <div className="flex flex-col gap-6">
      <FAQTitle title={title} />
      {content.map((item, index) => (
        <FAQ key={index} content={item} />
      ))}
    </div>
  );
};

const LeaderBoardFAQ = () => {
  return (
    <div className="w-full h-full pb-40 text-white min-h-screen pt-0 bg-bgcolor">
      <Header imageSrc={ico_earning} />
      <FAQHeader />
      <main>
        {FAQListContent.map((item, index) => (
          <div key={index} className="p-6">
            <FAQList title={item.title} content={item.content} />
          </div>
        ))}
      </main>
    </div>
  );
};

export default LeaderBoardFAQ;
