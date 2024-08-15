"use client";

import { useRouter } from "next/navigation";

import Header from "@/components/Header";
import { TaskHeader } from "@/components/task-header";
import { Button } from "@/components/ui/button";
import Dropdown from "@/components/task-dropdownitem";
import { ico_user_heart } from "@assets";
import { taskDropDownList } from "@temp";

const InviteFriends = () => {
  const router = useRouter();
  const goToInviteNow = () => {
    router.push("invite-friend-now");
  };

  return (
    <>
      <div className="w-full h-full min-h-screen text-white bg-bgcolor">
        <Header imageSrc={ico_user_heart} />
        <main className="px-6 mt-6">
          <TaskHeader imgSrc={ico_user_heart} title={"Invite friends"} />
          <div className="mt-6  overflow-auto">
            <div className="w-full h-full bg-invite-friend bg-no-repeat bg-cover bg-center rounded-3xl p-4">
              <div className="w-full h-full flex flex-col gap-2 mb-8">
                <span className="text-[28px] font-extrabold">
                  Invite friends and get 100 gems
                </span>
                <span className="text-[#ffffff70] text-sm">
                  Share your referral link with friends using social media or
                  directly.
                </span>
              </div>
              <Button
                className="px-4 py-2 mb-6 bg-gradient-to-t from-[#929DFF] to-[#6B79FF]"
                onClick={goToInviteNow}
              >
                Invite now
              </Button>
            </div>
            <div className="mt-8 flex flex-col gap-4 pb-12">
              <div className="flex gap-4 items-center">
                <span className="bg-white rounded-[3px] w-5 h-5 text-black text-center flex items-center justify-center">
                  #
                </span>
                <span className="text-base font-semibold">FAQ</span>
              </div>
              <div className="flex flex-col gap-3">
                {taskDropDownList.map((item, index) => (
                  <div key={index}>
                    <Dropdown title={item.title} content={item.content} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default InviteFriends;
