import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image, { StaticImageData } from "next/image";

import { Icons } from "./Icons";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { case1_1, case2_1, case3_1, case4_1, case5_1, case6_1 } from "@assets";

interface Props {
  user1: {
    avatar: StaticImageData;
    name: string;
    amount: number;
  };
  user2?: {
    avatar: StaticImageData;
    name: string;
  };
}

interface JoinBetProps {
  joinBet: () => void;
  joinBetClose: () => void;
}

interface CreateBetProps {
  createBet: () => void;
  createBetClose: () => void;
}

interface DicePlayerProps {
  player: number;
  status: boolean;
  selectplayer: () => void;
}

const SelectDemo = () => {
  return (
    <Select>
      <SelectTrigger className="bg-bgcolor text-white">
        <div className="flex gap-2 text-[#584D74]">
          <SelectValue defaultValue={10} placeholder="10" />
        </div>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {Array.from({ length: 10 }, (_, index) => (
            <SelectItem key={index} value={`${index + 1}`}>
              {index + 1}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export const BetItem: React.FC<Props> = ({ user1, user2 }) => {
  const router = useRouter();
  const goToJoinBet = () => {
    router.push("/games/dice/join-bet");
  };
  const goToViewBet = () => {
    router.push("/games/dice/view-bet");
  };
  return (
    <div className="bg-basic border border-border-color rounded-3xl p-3 flex flex-wrap justify-between items-center gap-2">
      <div className="flex justify-between gap-1 items-center">
        <div className="flex flex-col gap-1 justify-center items-center w-11">
          <div className="w-8 h-8">
            <Image
              src={user1.avatar}
              alt="user1"
              width={32}
              height={32}
              className="border rounded-full"
            />
          </div>
          <span>{user1.name}</span>
        </div>
        <span className="text-sm text-gray-500 leading-4 italic font-extrabold">
          VS
        </span>
        <div className="flex flex-col gap-1 justify-center items-center w-11">
          <div className="w-8 h-8">
            {user2 ? (
              <Image
                src={user2?.avatar}
                alt="user1"
                width={32}
                height={32}
                className="border rounded-full"
              />
            ) : (
              <div className="rounded-full w-8 h-8 bg-border-color flex justify-center items-center text-gray-500">
                <span>?</span>
              </div>
            )}
          </div>
          <span>{user2 ? user2.name : `Waiting`}</span>
        </div>
      </div>
      {user2 ? (
        <div className="flex flex-col justify-between gap-2 items-center">
          <span className="text-sm font-bold leading-4 text-gray-500">
            01/05
          </span>
          <span>Round</span>
        </div>
      ) : (
        <div className="flex flex-grow"></div>
      )}
      <div className="flex flex-col justify-center gap-2 items-end">
        {user2 ? (
          <div
            className="py-2 px-3 bg-button border border-border-color rounded-xl"
            onClick={goToViewBet}
          >
            View bet
          </div>
        ) : (
          <div
            className="py-2 px-3 bg-[#7819F3] border border-border-color rounded-xl"
            onClick={goToJoinBet}
          >
            Join bet
          </div>
        )}
        <div className="flex gap-1 items-center">
          <span className="text-xs text-gray-500 leading-4 font-semibold">
            Bet:
          </span>
          <span>{user1.amount}</span>
          <Icons.headerButton.diamond_amount />
        </div>
      </div>
    </div>
  );
};

export const JoinBet: React.FC<JoinBetProps> = ({ joinBetClose, joinBet }) => {
  const [betAmount, setBetAmount] = useState<number>(100);
  return (
    <div className="bg-bgcolor bg-opacity-80 p-6 w-full h-full absolute top-0 left-0 z-50">
      <div className="flex flex-col gap-4 justify-between p-6 mt-[23vh] bg-bgcolor rounded-[10px] border border-border-color">
        <div className="flex justify-between items-center">
          <span className="text-sm font-semibold leading-4">Join Bet</span>
          <div
            className="w-6 h-6 rounded-full bg-border-color flex justify-center items-center text-[#584D74] cursor-pointer"
            onClick={joinBetClose}
          >
            X
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <span>Bet amount</span>
          </div>
          <div className="flex justify-between gap-2">
            <div className="w-[70%] h-10 flex justify-between items-center gap-4 bg-inherit border border-border-color rounded-[8px] p-2">
              <Input
                className="text-sm font-medium leading-5 bg-inherit text-gray-500 p-0 border-none focus-visible:ring-offset-0 focus-visible:ring-0"
                value={betAmount}
                onChange={(e) => {
                  const numericValue = Number(e.target.value);
                  if (!isNaN(numericValue)) {
                    setBetAmount(numericValue);
                  }
                }}
              />
              <Icons.headerButton.diamond_amount />
            </div>
            <div className="flex gap-2">
              <div className="bg-inherit border border-border-color rounded-[8px] h-10 flex justify-center items-center p-2">
                <span className="text-sm leading-5 font-semibold">1.2x</span>
              </div>
              <div className="bg-inherit border border-border-color rounded-[8px] h-10 flex justify-center items-center p-2">
                <span className="text-sm leading-5 font-semibold">2x</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span>select rounds</span>
            <SelectDemo />
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-gray-500 leading-5">
              Possible outcome
            </span>
            <div className="flex gap-1">
              <span className="text-sm text-white font-medium leading-5 text-right">
                200
              </span>
              <Icons.headerButton.diamond_amount />
            </div>
          </div>
        </div>
        <Button className="bg-[#7819F3]" onClick={joinBet}>
          Bet
        </Button>
      </div>
    </div>
  );
};

export const DicePlayer: React.FC<DicePlayerProps> = ({
  player,
  status,
  selectplayer,
}) => {
  const [currentImage, setCurrentImage] = useState(case1_1);
  const [diceValues, setDiceValues] = useState<number[]>([0, 0, 0, 0, 0]);
  const [clickChecker, setClickChecker] = useState<boolean>(false);

  const images = [case1_1, case2_1, case3_1, case4_1, case5_1, case6_1];

  const AddDiceValueList = (value: number) => {
    setDiceValues((prevValues) => {
      const newValues = [...prevValues.slice(1), value];
      return newValues;
    });
  };

  useEffect(() => {
    if (!diceValues.includes(0)) {
      setClickChecker(true);
    }
  }, [diceValues]);

  const RandomDice = () => {
    if (!clickChecker) {
      const randomIndex = Math.floor(Math.random() * images.length);
      const selectedImage = images[randomIndex];
      setCurrentImage(selectedImage);

      let value = 0;

      switch (selectedImage) {
        case case1_1:
          value = 1;
          break;
        case case2_1:
          value = 2;
          break;
        case case3_1:
          value = 3;
          break;
        case case4_1:
          value = 4;
          break;
        case case5_1:
          value = 5;
          break;
        case case6_1:
          value = 6;
          break;
        default:
          break;
      }

      if (value) {
        AddDiceValueList(value);
      }
    }
  };

  return (
    <div
      className={`w-full rounded-3xl bg-basic p-4 flex justify-between ${
        status ? "opacity-100" : "opacity-20 cursor-not-allowed"
      }`}
      onClick={
        status && !clickChecker
          ? () => {
              RandomDice();
              selectplayer();
            }
          : undefined
      }
    >
      <div className="flex flex-col justify-between">
        <span>
          {player === 1 ? "Player 1" : player === 2 ? "Player 2" : "Viewer"}
        </span>
        <span className="text-xs p-3 border border-border-color rounded bg-[#ffffff04]">
          Total = {diceValues.reduce((sum, val) => sum + val, 0)}
        </span>
      </div>
      <div className="w-14 items-center flex justify-center">
        <Image src={currentImage} alt="" width={54} height={54} />
      </div>
      <div className="grid grid-rows-5 gap-2 justify-between">
        {diceValues.map((value, index) => (
          <div
            key={index}
            className="w-7 h-7 rounded bg-[#ffffff04] flex items-center justify-center"
          >
            {value > 0 ? value : ""}
          </div>
        ))}
      </div>
    </div>
  );
};

export const AllBets = () => {
  return (
    <div className="w-full h-full rounded-3xl bg-basic p-4">
      <div className="flex justify-between mb-2">
        <span className="text-sm">All bets</span>
        <span>Filter</span> {/* filter selecter */}
      </div>
      <div className="flex flex-col gap-2 overflow-auto">
        <div className="w-full flex justify-between">
          <span className="w-1/4">Player</span>
          <span className="w-1/5">Time</span>
          <span className="w-1/4">Bet amount</span>
          <span className="w-1/4">Multiplayer</span>
        </div>
        <hr className="h-px border bg-border-color border-border-color" />
        <div className="w-full flex justify-between text-gray-500">
          <span className="w-1/4">john doe</span>
          <span className="w-1/5">12:45</span>
          <div className="flex gap-1 w-1/4">
            <span>12000</span>
            <Icons.headerButton.diamond_amount />
          </div>
          <span className="w-1/4">1.2 x</span>
        </div>
        <div className="w-full flex justify-between text-gray-500">
          <span className="w-1/4">jason</span>
          <span className="w-1/5">12:15</span>
          <div className="flex gap-1 w-1/4">
            <span>3400</span>
            <Icons.headerButton.diamond_amount />
          </div>
          <span className="w-1/4">2 x</span>
        </div>
        <div className="w-full flex justify-between text-gray-500">
          <span className="w-1/4">jason</span>
          <span className="w-1/5">12:15</span>
          <div className="flex gap-1 w-1/4">
            <span>3400</span>
            <Icons.headerButton.diamond_amount />
          </div>
          <span className="w-1/4">2 x</span>
        </div>
        <div className="w-full flex justify-between text-gray-500">
          <span className="w-1/4">jason</span>
          <span className="w-1/5">12:15</span>
          <div className="flex gap-1 w-1/4">
            <span>3400</span>
            <Icons.headerButton.diamond_amount />
          </div>
          <span className="w-1/4">2 x</span>
        </div>
      </div>
    </div>
  );
};

export const CreateBet: React.FC<CreateBetProps> = ({ createBetClose, createBet }) => {
  const [betAmount, setBetAmount] = useState<number>(100);
  return (
    <div className="bg-bgcolor bg-opacity-80 p-6 w-full h-full absolute top-0 left-0 z-50">
      <div className="flex flex-col gap-4 justify-between p-6 mt-[23vh] bg-bgcolor rounded-[10px] border border-border-color">
        <div className="flex justify-between items-center">
          <span className="text-sm font-semibold leading-4">Create Battle</span>
          <div
            className="w-6 h-6 rounded-full bg-border-color flex justify-center items-center text-[#584D74] cursor-pointer"
            onClick={createBetClose}
          >
            X
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <span>Bet amount</span>
          </div>
          <div className="flex justify-between gap-2">
            <div className="w-[70%] h-10 flex justify-between items-center gap-4 bg-inherit border border-border-color rounded-[8px] p-2">
              <Input
                className="text-sm font-medium leading-5 bg-inherit text-gray-500 p-0 border-none focus-visible:ring-offset-0 focus-visible:ring-0"
                value={betAmount}
                onChange={(e) => {
                  const numericValue = Number(e.target.value);
                  if (!isNaN(numericValue)) {
                    setBetAmount(numericValue);
                  }
                }}
              />
              <Icons.headerButton.diamond_amount />
            </div>
            <div className="flex gap-2">
              <div className="bg-inherit border border-border-color rounded-[8px] h-10 flex justify-center items-center p-2">
                <span className="text-sm leading-5 font-semibold">1.2x</span>
              </div>
              <div className="bg-inherit border border-border-color rounded-[8px] h-10 flex justify-center items-center p-2">
                <span className="text-sm leading-5 font-semibold">2x</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span>select rounds</span>
            <SelectDemo />
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-gray-500 leading-5">
              Possible outcome
            </span>
            <div className="flex gap-1">
              <span className="text-sm text-white font-medium leading-5 text-right">
                200
              </span>
              <Icons.headerButton.diamond_amount />
            </div>
          </div>
        </div>
        <Button className="bg-[#7819F3]" onClick={createBet}>
          Create Bet
        </Button>
      </div>
    </div>
  );
};
