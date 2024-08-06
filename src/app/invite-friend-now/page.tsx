"use client";

import Header from "@/components/Header";
import { TaskHeader } from "@/components/task-header";
import { ico_user_heart } from "../../../assets";
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
  return (
    <>
      <div className="w-full h-full min-h-screen text-white bg-bgcolor">
        <Header imageSrc={ico_user_heart} />
        <main className="px-6 mt-6 pb-4 overflow-auto">
          <TaskHeader imgSrc={ico_user_heart} title={"Daily task"} />
          <div className="flex flex-col gap-24 mt-6">
            <div className="flex flex-col gap-4">
              {taskInviteRule.map((item, index) => (
                <InviteRule index={index+1} content={item.content} />
              ))}
            </div>
            <div className="flex flex-col gap-4">
                <div className="bg-inherit "></div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default InviteFriendNow;
