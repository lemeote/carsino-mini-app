import Image, { StaticImageData } from "next/image";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { Icons } from "./Icons"
import { ico_up, ico_down, user_avatar } from "../../assets";
import React from "react";

const userList = [
  {
    userStatus: "up",
    userImage: user_avatar,
    userName: "Ana Wenderson",
    userId: "@wenderson",
    amount: 3450
  },
  {
    userStatus: "up",
    userImage: user_avatar,
    userName: "Thomas Duw",
    userId: "@duet",
    amount: 3350
  },
  {
    userStatus: "down",
    userImage: user_avatar,
    userName: "Nana Nenson",
    userId: "@nensoon",
    amount: 2132
  },
  {
    userStatus: "down",
    userImage: user_avatar,
    userName: "Ana Wenderson",
    userId: "@wenderson",
    amount: 3450
  },
  {
    userStatus: "up",
    userImage: user_avatar,
    userName: "Trevor Collin",
    userId: "@wenderson",
    amount: 3450
  },
  {
    userStatus: "up",
    userImage: user_avatar,
    userName: "Alison Williams",
    userId: "@wenderson",
    amount: 3450
  },

]

interface UserInfoProps {
  index: number
  userStatus: string,
  userImage: StaticImageData,
  userName: string,
  userId: string,
  amount: number,
}

const Header = () => {
  return (
    <div className="flex justify-between w-full">
      <div className="flex items-center justify-center gap-2">
        <Icons.mainIcon.leaderboard />
        <span>Learderboard</span>
      </div>
      <div className="flex items-center justify-center p-2 px-3 rounded-sm bg-button">
        <span className="font-medium text-[14px]">View leaderboard</span>
      </div>
    </div>
  );
};

const RankItem: React.FC<UserInfoProps> = ({ index, userStatus, userImage, userName, userId, amount }) => {
  return (
    <div className="flex items-center justify-between w-full p-5 border border-border-color rounded-xl">
      <div className="flex items-center justify-center gap-2">
        <span>{index+1}</span>
        {userStatus == "up" ?
          <Image src={ico_up} alt=""/> : <Image src={ico_down} alt="" />
        }
        <Image src={userImage} alt="" width={42} height={42} />
        <div className="flex flex-col items-left">
          <span className=" font-semibold text-[14px]">
            {userName}
          </span>
          <span className="text-xs font-medium">
            {userId}
          </span>
        </div>
      </div>
      <div className="flex gap-2">
        <span className="flex items-center justify-center text-xs font-medium">
          {amount}
        </span>
        <Icons.mainIcon.gems_icon />
      </div>
    </div>
  )
}

const UserRank = () => {
  return (
    <div className="flex items-center justify-between w-full p-2 px-5 bg-button rounded-xl">
      <div className="flex items-center justify-center gap-2">
        <span>{"203"}</span>
        <Image src={ico_down} alt="" />
        <Image src={user_avatar} alt="" width={42} height={42} />
        <div className="flex flex-col items-start">
          <span className=" font-semibold text-[14px]">
            {'me'}
          </span>
          <span className="text-xs font-medium text-left ">
            {"@mean"}
          </span>
        </div>
      </div>
      <div className="flex gap-2">
        <span className="flex items-center justify-center text-xs font-medium">
          {2019}
        </span>
        <Icons.mainIcon.gems_icon />
      </div>
    </div>
  );
}

const LoadMore = () => {
  return (
    <div className="flex justify-between w-full">
        <div className="flex items-center justify-center gap-3">
          <span className="text-xs ">{`15/37`}</span>
          <div className="h-[6px] w-[110px] bg-button relative rounded-full ">
            <div className="bg-[#7819F3] w-[36%] absolute h-[6px] rounded-full"></div>
          </div>
          <div className="text-xs">36%</div>
        </div>
        <div className="flex items-center justify-center px-5 py-2 border rounded-[12px] bg-button border-border-color">
            <span>Load more</span>
        </div>
    </div>
  )
}

const MainLeaderBoard = () => {
  return (
    <div className="flex flex-col w-full gap-6 pb-24">
      <Header />
      <main className="flex flex-col gap-4">
          <UserRank />
          {userList.map((item, index) => (
            <div key={index}>
            <RankItem index={index} userImage={item.userImage} userStatus={item.userStatus} userId={item.userId} userName={item.userName} amount={item.amount} />
          </div>
        ))}
      </main>
      <LoadMore />
    </div>
  );
};

export default MainLeaderBoard