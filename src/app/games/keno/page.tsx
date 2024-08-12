"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AlertCircle } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Header from "@/components/Header";
import { diamond_icon, ico_question, ico_voice } from "@assets";

const AlertDestructive = () => {
  return (
    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        You have selected 10 values, so you cannot select more.
      </AlertDescription>
    </Alert>
  );
};

const KenoHeader = () => {
  return (
    <div className="flex justify-between w-full gap-2">
      <span className="text-lg font-bold">KENO</span>
      <div className="flex gap-2">
        <div className="flex justify-center items-center bg-inherit border-border-color border w-6 h-6 rounded-full">
          <Image src={ico_voice} alt="" />
        </div>
        <div className="flex justify-center items-center border border-border-color gap-1 px-2 py-1 rounded-md">
          <Image src={ico_question} alt="" />
          <span className="text-[#584D74] font-bold leading-[18px] text-center">
            How to play
          </span>
        </div>
      </div>
    </div>
  );
};

const Number = ({
  value,
  handleNumberClick,
  isSelected,
}: {
  value: number;
  handleNumberClick: (value: number) => void;
  isSelected: (value: number) => boolean;
}) => {
  return (
    <div
      className={`w-full h-full text-sm leading-5 font-bold flex justify-center items-center rounded-full hover:bg-[#7819F3] cursor-pointer ${
        isSelected(value)
          ? "bg-[#7819F3] text-white"
          : "bg-[#362F53] shadow-inner shadow-[#04041325]"
      }`}
      onClick={() => handleNumberClick(value)}
    >
      {value}
    </div>
  );
};

const NumberSelect = () => {
  const [selectedValueList, setSelectedValueList] = useState<number[]>([]);
  const [showAlert, setShowAlert] = useState(false);

  const handleNumberClick = (value: number) => {
    const isSelected = selectedValueList.includes(value);

    if (isSelected) {
      setSelectedValueList(selectedValueList.filter((item) => item !== value));
      if (selectedValueList.length <= 10) {
        setShowAlert(false);
      }
    } else {
      if (selectedValueList.length >= 10) {
        setShowAlert(true);
      } else {
        setSelectedValueList([...selectedValueList, value]);
      }
    }
  };

  const isSelected = (value: number) => selectedValueList.includes(value);
  useEffect(() => {}, [selectedValueList]);
  console.log(selectedValueList, showAlert);

  return (
    <>
      {showAlert && <AlertDestructive />}
      <div className="flex flex-col gap-7 justify-between p-3 bg-inherit rounded-[10px] border border-border-color">
        <div className="grid grid-cols-8 gap-2">
          {Array.from({ length: 40 }, (_, index) => (
            <Number
              key={index + 1}
              value={index + 1}
              handleNumberClick={handleNumberClick}
              isSelected={isSelected}
            />
          ))}
        </div>
        <span className="bg-[#362F53] w-full h-10 flex justify-center items-center rounded-sm cursor-pointer font-medium leading-4">
          Select 1-10 numbers to play
        </span>
      </div>
    </>
  );
};

const Keno = () => {
  return (
    <div className="w-full h-full min-h-screen text-white text-xs bg-bgcolor">
      <header>
        <Header imageSrc={diamond_icon} />
      </header>
      <main className="px-6 mt-6">
        <KenoHeader />
        <div className="flex flex-col gap-2 min-h-screen w-full h-full mt-6">
          <NumberSelect />
        </div>
      </main>
    </div>
  );
};

export default Keno;
