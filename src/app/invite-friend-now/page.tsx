"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import { TaskHeader } from "@/components/task-header";
import { ico_user_heart, ico_copy, ico_linkedin, ico_whatsapp, ico_share_line, ico_instagram, ico_share, user_avatar } from "../../../assets";
import { taskInviteRule } from "../temp";

interface Props {
  index: Number;
  content: String;
}

const InviteRule: React.FC<Props> = ({ index, content }) => {
  return (
    <div className="flex gap-3">
      <div>
        <span className="bg-inherit rounded-full w-8 h-8 p-3 flex justify-center items-center border border-border-color">
          {index.toString()}
        </span>
      </div>
      <span>{content}</span>
    </div>
  );
};

const InviteFriendNow = () => {
  const router = useRouter();
  const goToInviteFriendsList = () => {
    router.push("/invite-friends-list")
  }
  return (
    <>
      <div className="w-full h-full min-h-screen text-white bg-bgcolor">
        <Header imageSrc={ico_user_heart} />
        <main className="px-6 mt-6 pb-8 overflow-auto">
          <TaskHeader imgSrc={ico_user_heart} title={"Daily task"} />
          <div className="flex flex-col w-full h-full min-h-screen justify-between gap-16 mt-6">
            <div className="flex flex-col gap-4">
              {taskInviteRule.map((item, index) => (
                <div key={index}>
                  <InviteRule index={index + 1} content={item.content} />
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              <div className="bg-basic border border-border-color rounded-3xl p-6 flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm">
                    You have referred total 01 friends
                  </span>
                  <span className="text-xs" onClick={goToInviteFriendsList}>See all</span>
                </div>
                <div className="w-full flex justify-between items-center">
                  <div className="flex gap-3">
                    <div className="w-10 h-10">
                      <Image
                        src={user_avatar}
                        alt=""
                        width={38}
                        height={38}
                      />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-sm font-medium">
                        Alison williams
                      </span>
                      <span className="text-xs text-[#ffffff30]">
                        Earn 100 gems
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between text-xs">
                    <span>Invited by you</span>
                    <span className="text-[#ffffff30]">10/24/2024</span>
                  </div>
                </div>
              </div>
              <div className="bg-basic border border-border-color rounded-3xl p-6 flex flex-col justify-between gap-10">
                <div className="w-full flex bg-inherit border border-[#ffffff05] rounded-xl">
                  <Input
                    className="bg-inherit border border-border-color text-[#ffffff30] focus:border-none"
                    placeholder="https://examplebot.com/referral?token=your_unique_token_here"
                  />
                  <div className="rounded-r-xl bg-[#7819F3] border border-[#ffffff05] flex justify-center items-center gap-2 px-4">
                    <Image src={ico_copy} alt="" />
                    <span>Copy</span>
                  </div>
                </div>
                <div className="w-full flex bg-inherit border border-[#ffffff05] rounded-xl justify-between items-center p-2">
                    <span>What rewards you will get</span>
                    <span className="w-5 h-5 rounded-full bg-white text-black font-bold p-1 flex items-center justify-center">?</span>
                </div>
                <div className="flex flex-col justify-center items-center gap-4">
                    <span className="text-sm text-[#ffffff30]">Share your link</span>
                    <div className="grid grid-cols-5 gap-4">
                      <Image src={ico_linkedin} alt="" />
                      <Image src={ico_whatsapp} alt="" />
                      <Image src={ico_share_line} alt="" />
                      <Image src={ico_instagram} alt="" />
                      <Image src={ico_share} alt="" />
                    </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default InviteFriendNow;
