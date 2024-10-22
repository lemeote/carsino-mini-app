"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image, { StaticImageData } from "next/image";

import { Progress } from "@radix-ui/react-progress";
import { Icons } from "./Icons";
import {
  ico_down,
  ico_up,
  ico_gold_medal,
  ico_2nd_medal,
  ico_3rd_medal,
  user1,
} from "@assets";
import { myRank } from "@/app/temp";

interface UserInfoProps {
  userStatus: string;
  userImage: StaticImageData;
  userName: string;
  userID: string;
  amount: number;
  userRank: number;
}

interface UserListProps {
  userList: {
    userStatus: string;
    userImage: StaticImageData;
    userName: string;
    userID: string;
    amount: number;
  }[];
}

interface EarnedRankInfoProps {
  userStatus: string;
  userImage: StaticImageData;
  userName: string;
  userID: string;
  amount: number;
  rank: number;
  earnedAmount: number;
}

interface RewardInfoProps {
  PayDate: Date;
  amount: number;
  earnedAmount: number;
  payStatus: boolean;
}

const Header = () => {
  const router = useRouter();
  const gotoleaderboard = () => {
    router.push("/leaderboard");
  };

  return (
    <div className="flex justify-between w-full">
      <div className="flex items-center justify-center gap-2">
        <Icons.mainIcon.leaderboard />
        <span>Learderboard</span>
      </div>
      <div
        className="flex items-center justify-center p-2 px-3 rounded-sm cursor-pointer bg-button"
        onClick={gotoleaderboard}
      >
        <span className="text-sm font-medium">View leaderboard</span>
      </div>
    </div>
  );
};

const Rank = ({ index }: { index: number }) => {
  switch (index) {
    case 1:
      return <Image src={ico_gold_medal} alt="Gold Medal" />;
    case 2:
      return <Image src={ico_2nd_medal} alt="Silver Medal" />;
    case 3:
      return <Image src={ico_3rd_medal} alt="Bronze Medal" />;
    default:
      return <span>{index}</span>;
  }
};

const CustomDate = ({ date }: { date: Date }) => {
  const options: Intl.DateTimeFormatOptions = {
    month: "long",
    year: "numeric",
  };

  return (
    <span className="text-sm font-semibold">
      {date.toLocaleDateString("en-US", options)}
    </span>
  );
};

export const RankItem: React.FC<UserInfoProps> = ({
  userStatus,
  userImage,
  userName,
  userID,
  amount,
  userRank,
}) => {
  return (
    <div className="flex items-center justify-between w-full p-5 border border-border-color rounded-xl">
      <div className="flex items-center justify-center gap-2">
        <div>
          <Rank index={userRank} />
        </div>
        <div>
          {userStatus === "up" ? (
            <Image src={ico_up} alt="Up Arrow" />
          ) : (
            <Image src={ico_down} alt="Down Arrow" />
          )}
        </div>
        <Image
          src={userImage}
          alt={userName}
          width={42}
          height={42}
          className="rounded-full"
        />
        <div className="flex flex-col items-left">
          <span className="text-sm font-semibold">{userName}</span>
          <span className="text-xs font-medium">{userID}</span>
        </div>
      </div>
      <div className="flex gap-2">
        <span className="flex items-center justify-center text-xs font-medium">
          {amount}
        </span>
        <Icons.mainIcon.gems_icon />
      </div>
    </div>
  );
};

export const RewardRankItem: React.FC<EarnedRankInfoProps> = ({
  userStatus,
  userImage,
  userName,
  userID,
  amount,
  earnedAmount,
}) => {
  return (
    <div className="flex items-center justify-between w-full p-5 border border-border-color rounded-xl">
      <div className="flex items-center justify-center gap-2">
        <div>
          <Rank index={2} />
        </div>
        <div>
          {userStatus === "up" ? (
            <Image src={ico_up} alt="Up Arrow" />
          ) : (
            <Image src={ico_down} alt="Down Arrow" />
          )}
        </div>
        <Image src={userImage} alt={userName} width={42} height={42} />
        <div className="flex flex-col items-left">
          <span className="text-sm font-semibold">{userName}</span>
          <span className="text-xs font-medium">{userID}</span>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex gap-2">
          <span className="flex items-center justify-center text-xs font-medium">
            {amount}
          </span>
          <Icons.mainIcon.gems_icon />
        </div>
        <span className="text-xs text-right">{earnedAmount}$</span>
      </div>
    </div>
  );
};

export const MyRank: React.FC<UserInfoProps> = ({
  userStatus,
  userImage,
  userName,
  userID,
  amount,
}) => {
  return (
    <div className="flex items-center justify-between w-full p-2 px-5 bg-button rounded-xl">
      <div className="flex items-center justify-center gap-2">
        <span>{1}</span>
        {userStatus === "up" ? (
          <Image src={ico_up} alt="Up Arrow" />
        ) : (
          <Image src={ico_down} alt="Down Arrow" />
        )}
        <Image src={userImage} alt={userName} width={42} height={42} />
        <div className="flex flex-col items-start">
          <span className="text-sm font-semibold ">{userName}</span>
          <span className="text-xs font-medium text-left ">{userID}</span>
        </div>
      </div>
      <div className="flex gap-2">
        <span className="flex items-center justify-center text-xs font-medium">
          {amount}
        </span>
        <Icons.mainIcon.gems_icon />
      </div>
    </div>
  );
};

export const MyRewardList: React.FC<RewardInfoProps> = ({
  PayDate,
  amount,
  earnedAmount,
  payStatus,
}) => {
  const router = useRouter();
  const goToUnpaidReason = () => {
    router.push("why-unpaid");
  };
  return (
    <div className="flex items-center justify-between w-full p-5 border border-border-color rounded-xl">
      <CustomDate date={PayDate} />
      <div className="flex flex-col gap-1">
        <div className="flex gap-2 justify-end items-center">
          <span className="flex items-center justify-center text-xs font-medium">
            {amount}
          </span>
          <Icons.mainIcon.gems_icon />
        </div>
        <div className="flex gap-2 justify-center items-center">
          <span className="text-xs text-right">{earnedAmount}$</span>
          {payStatus ? (
            <span className="bg-[#12800020] rounded px-2 py-[2px] text-[#1DCD00] text-xs font-normal">
              Paid
            </span>
          ) : (
            <div
              className="flex gap-1 bg-[#CD000020] rounded px-2 py-[2px] text-[#CD0000] text-xs font-normal justify-center items-center"
              onClick={goToUnpaidReason}
            >
              <span>Unpaid</span>
              <span className="flex justify-center items-center w-3 h-3 rounded-full bg-[#CD0000] text-black text-sm p-1">
                !
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const ProgressDemo = () => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Progress
      value={progress}
      className="w-[100px] h-[6px] rounded-full bg-button"
    />
  );
};

const LoadMore = ({
  loadmore,
  status,
}: {
  loadmore: () => void;
  status: boolean;
}) => {
  return (
    <div className="flex justify-between w-full">
      <div className="flex items-center justify-center gap-3">
        <span className="text-xs ">{`15/37`}</span>
        <ProgressDemo />
        <div className="text-xs">36%</div>
      </div>
      <div
        className="flex items-center justify-center px-5 py-2 border rounded-[12px] bg-button border-border-color"
        onClick={loadmore}
      >
        {status ? <span>Load more</span> : <span>Load less</span>}
      </div>
    </div>
  );
};

const MainLeaderBoard: React.FC<UserListProps> = ({ userList }) => {
  const [loadMoreStatus, setLoadMoreStatus] = useState<boolean>(true);
  const loadmore = () => {
    setLoadMoreStatus(!loadMoreStatus);
  };
  const displayUserList = loadMoreStatus ? userList.slice(0, 3) : userList;
  return (
    <div className="flex flex-col w-full gap-6 pb-28">
      <Header />
      <main className="flex flex-col gap-4">
        <MyRank
          userRank={40}
          userID={myRank.userID}
          userName={myRank.userName}
          userImage={myRank.userImage}
          userStatus={myRank.userStatus}
          amount={myRank.amount}
        />
        {displayUserList.map((item, index) => (
          <div key={index}>
            <RankItem
              userRank={index + 1}
              userImage={user1}
              userStatus={item.userStatus}
              userID={item.userID}
              userName={item.userName}
              amount={item.amount}
            />
          </div>
        ))}
      </main>
      <LoadMore loadmore={loadmore} status={loadMoreStatus} />
    </div>
  );
};

export default MainLeaderBoard;
