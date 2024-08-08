import React from "react";
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
} from "@assets";
import { leaderboardUserList, myRank } from "@/app/temp";

interface UserInfoProps {
  userStatus: string;
  userImage: StaticImageData;
  userName: string;
  userId: string;
  amount: number;
  rank: number;
}

interface EarnedRankInfoProps {
  userStatus: string;
  userImage: StaticImageData;
  userName: string;
  userId: string;
  amount: number;
  rank: number;
  earnedAmount: number;
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
      return <span>{index + 1}</span>;
  }
};

export const RankItem: React.FC<UserInfoProps> = ({
  rank,
  userStatus,
  userImage,
  userName,
  userId,
  amount,
}) => {
  return (
    <div className="flex items-center justify-between w-full p-5 border border-border-color rounded-xl">
      <div className="flex items-center justify-center gap-2">
        <div>
          <Rank index={rank} />
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
          <span className="text-xs font-medium">{userId}</span>
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
  rank,
  userStatus,
  userImage,
  userName,
  userId,
  amount,
  earnedAmount,
}) => {
  return (
    <div className="flex items-center justify-between w-full p-5 border border-border-color rounded-xl">
      <div className="flex items-center justify-center gap-2">
        <div>
          <Rank index={rank} />
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
          <span className="text-xs font-medium">{userId}</span>
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
  rank,
  userStatus,
  userImage,
  userName,
  userId,
  amount,
}) => {
  return (
    <div className="flex items-center justify-between w-full p-2 px-5 bg-button rounded-xl">
      <div className="flex items-center justify-center gap-2">
        <span>{rank}</span>
        {userStatus === "up" ? (
          <Image src={ico_up} alt="Up Arrow" />
        ) : (
          <Image src={ico_down} alt="Down Arrow" />
        )}
        <Image src={userImage} alt={userName} width={42} height={42} />
        <div className="flex flex-col items-start">
          <span className="text-sm font-semibold ">{userName}</span>
          <span className="text-xs font-medium text-left ">{userId}</span>
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

const LoadMore = () => {
  return (
    <div className="flex justify-between w-full">
      <div className="flex items-center justify-center gap-3">
        <span className="text-xs ">{`15/37`}</span>
        <ProgressDemo />
        <div className="text-xs">36%</div>
      </div>
      <div className="flex items-center justify-center px-5 py-2 border rounded-[12px] bg-button border-border-color">
        <span>Load more</span>
      </div>
    </div>
  );
};

const MainLeaderBoard = () => {
  return (
    <div className="flex flex-col w-full gap-6 pb-28">
      <Header />
      <main className="flex flex-col gap-4">
        <MyRank
          rank={myRank.rank}
          userId={myRank.userId}
          userName={myRank.userName}
          userImage={myRank.userImage}
          userStatus={myRank.userStatus}
          amount={myRank.amount}
        />
        {leaderboardUserList.map((item, index) => (
          <div key={index}>
            <RankItem
              rank={item.rank}
              userImage={item.userImage}
              userStatus={item.userStatus}
              userId={item.userId}
              userName={item.userName}
              amount={item.amount}
            />
          </div>
        ))}
      </main>
      <LoadMore />
    </div>
  );
};

export default MainLeaderBoard;
