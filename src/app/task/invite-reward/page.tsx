"use client";

import Header from "@/components/Header";
import { TaskHeader } from "@/components/task-header";
import { ico_tasks } from "@assets";
import { taskRewardContent } from "@temp";

interface Props {
  index: Number;
  content: String;
}

const RewardContent: React.FC<Props> = ({ index, content }) => {
  return (
    <div className="flex gap-3">
      <div>
        <span>{index.toString()}</span>
      </div>
      <span>{content}</span>
    </div>
  );
};

const InviteFriendNow = () => {

  return (
    <>
      <div className="w-full h-full min-h-screen text-white bg-bgcolor">
        <Header imageSrc={ico_tasks} />
        <main className="px-6 mt-6 pb-8 overflow-auto">
          <TaskHeader imgSrc={ico_tasks} title={"Invite friends"} />
          <div className="flex flex-col w-full h-full min-h-screen justify-between gap-16 mt-6">
            <div className="flex flex-col gap-4">
              {taskRewardContent.map((item, index) => (
                <div key={index}>
                  <RewardContent index={index + 1} content={item.content} />
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default InviteFriendNow;
