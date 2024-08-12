import * as React from "react";
import Image from "next/image";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Icons } from "./Icons";
import { ico_limit } from "@assets";
import { Input } from "./ui/input";

const SelectDemo = () => {
  return (
    <Select>
      <SelectTrigger className="bg-bgcolor text-white">
        <SelectValue defaultValue={"High"} placeholder="High" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="High">High</SelectItem>
          <SelectItem value="Medium">Medium</SelectItem>
          <SelectItem value="Low">Low</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

const TabsDemo = () => {
  const [betValue, setBetValue] = React.useState<number>(20);
  const [profitValue, setProfitValue] = React.useState<number>(10000.00);
  const [lossValue, setLossValue] = React.useState<number>(100000.00);
  return (
    <Tabs defaultValue="Auto">
      <TabsList className="grid w-full grid-cols-2 bg-inherit border border-border-color">
        <TabsTrigger value="Manual">Manual</TabsTrigger>
        <TabsTrigger value="Auto">Auto</TabsTrigger>
      </TabsList>
      <TabsContent value="Manual">
        <span className="bg-[#7819F3] w-full rounded-[8px] border border-[#ffffff05] flex justify-center items-center py-4 text-sm leading-5 font-semibold">
          Bet
        </span>
      </TabsContent>
      <TabsContent value="Auto">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <span className="text-gray-500 text-sm font-medium leading-5">
              Number of bet
            </span>
            <div className="flex justify-between px-2 items-center rounded border border-border-color gap-1">
              <Input
                className="text-sm font-medium leading-5 bg-inherit border-none focus-visible:ring-offset-0 focus-visible:ring-0"
                value={betValue}
                onChange={(e) => {
                  const numericValue = Number(e.target.value);
                  if (!isNaN(numericValue)) {
                    setBetValue(numericValue);
                  }
                }}
              />
              <Image src={ico_limit} alt="" width={20} height={20} />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-gray-500 text-sm font-medium leading-5">
              Number of bet
            </span>
            <div className="flex justify-between px-2 items-center rounded border border-border-color gap-1">
              <Input
                className="text-sm font-medium leading-5 bg-inherit border-none focus-visible:ring-offset-0 focus-visible:ring-0"
                value={profitValue}
                onChange={(e) => {
                  const numericValue = Number(e.target.value);
                  if (!isNaN(numericValue)) {
                    setProfitValue(numericValue);
                  }
                }}
              />
              <Icons.headerButton.diamond_amount />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-gray-500 text-sm font-medium leading-5">
              Number of bet
            </span>
            <div className="flex justify-between px-2 items-center rounded border border-border-color gap-1">
              <Input
                className="text-sm font-medium leading-5 bg-inherit border-none focus-visible:ring-offset-0 focus-visible:ring-0"
                value={lossValue}
                onChange={(e) => {
                  const numericValue = Number(e.target.value);
                  if (!isNaN(numericValue)) {
                    setLossValue(numericValue);
                  }
                }}
              />
              <Icons.headerButton.diamond_amount />
            </div>
          </div>
          <span className="bg-[#7819F3] w-full rounded-[8px] border border-[#ffffff05] flex justify-center items-center py-4 text-sm leading-5 font-semibold">
            Auto Bet
          </span>
        </div>
        
      </TabsContent>
    </Tabs>
  );
};

export const BetAmount = () => {
  return (
    <div className="flex flex-col gap-4 justify-between p-6 bg-inherit rounded-[10px] border border-border-color">
      <div className="flex flex-col gap-2 cursor-not-allowed">
        <div className="flex justify-between items-center">
          <span>Bet amount</span>
          <span>100.00</span>
        </div>
        <div className="flex justify-between gap-2">
          <div className="w-[70%] h-10 flex justify-between gap-4 bg-inherit border border-border-color rounded-[8px] p-2">
            <span className="text-sm leading-5 font-semibold">100.00</span>
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
          <span>Risk</span>
          <SelectDemo />
        </div>
        <TabsDemo />
      </div>
    </div>
  );
};
