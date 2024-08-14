"use client";

import Image, { StaticImageData } from "next/image";

import Header from "@/components/Header";
import { TaskHeader } from "@/components/task-header";
import { diamond_icon, ico_user_heart } from "@assets";
import { taskInvitedItemList } from "@temp";
import { Icons } from "@/components/Icons";

interface Props {
  userName: string;
  userID: string;
  earnedAmount: number;
  userImage: StaticImageData;
  inviteBadge?: string;
}

const InvitedItem: React.FC<Props> = ({
  userName,
  userID,
  earnedAmount,
  userImage,
  inviteBadge,
}) => {
  return (
    <>
      <div className="relative bg-basic border border-border-color rounded-3xl p-6 flex flex-col justify-center items-center gap-2">
        <Image src={userImage} alt="" width={50} height={50} />
        <div className="grid grid-rows-2 gap-2 text-center">
          <span className="text-sm">{userName}</span>
          <span className="text-xs text-gray-600">{userID}</span>
        </div>
        <div className="flex flex-wrap w-full justify-evenly gap-2">
          <div className="flex gap-2">
            <span className="text-gray-600 text-xs">Refferal status:</span>
            <span className="text-[#1DCD00] text-xs">Successful</span>
          </div>
          <div className="flex gap-2">
            <span className="text-gray-600 text-xs">You earned:</span>
            <span className="text-xs">{earnedAmount}</span>
            <Image src={diamond_icon} alt="" />
          </div>
        </div>
        {inviteBadge && (
          <div className="absolute top-0 left-0">
            <Icons.invitedUserBadge textAnchor={inviteBadge} />
          </div>
        )}
      </div>
    </>
  );
};

const InviteFriendsList = () => {
  return (
    <div className="w-full h-full min-h-screen text-white bg-bgcolor">
      <Header imageSrc={ico_user_heart} />
      <main className="px-6 mt-6 pb-8 overflow-auto">
        <TaskHeader imgSrc={ico_user_heart} title={"Invited friend list"} />
        <div className="w-full h-full min-h-screen mt-6">
          <div className="bg-basic border border-border-color rounded-3xl p-6 flex flex-col gap-4 overflow-auto">
            <div className="w-full h-full bg-[url('../../../assets/bg_invited_friend_list.png')] bg-no-repeat bg-cover bg-center rounded-3xl p-4 flex flex-wrap justify-evenly gap-8 items-center">
              <div className="flex flex-col justify-center items-center gap-2">
                <span className="text-[28px] font-extrabold">top 5 earner</span>
                <span className="text-[#ffffff70] text-sm text-wrap text-center">
                  Here is the list of the{" "}
                  <span className="text-white font-bold ">Top 5</span> invites
                  from you
                </span>
              </div>
              <div className="flex flex-col justify-between gap-4 text-right">
                <div className="flex flex-col gap-1">
                  <div className="p-3 flex justify-center items-center bg-[#395FDA] rounded-xl gap-2">
                    <span>800</span>
                    <Image src={diamond_icon} alt="" />
                  </div>
                  <span className="text-xs drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                    Total earned
                  </span>
                </div>
                <span className="text-xs drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                  Total invite: 18
                </span>
              </div>
            </div>
            {taskInvitedItemList.map((item, index) => (
              <div key={index}>
                <InvitedItem
                  userName={item.userName}
                  userID={item.userID}
                  userImage={item.userImage}
                  earnedAmount={item.earnedAmount}
                  inviteBadge={item.inviteBadge}
                />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default InviteFriendsList;
