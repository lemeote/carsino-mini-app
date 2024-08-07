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
