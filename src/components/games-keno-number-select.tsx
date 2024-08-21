import { useEffect, useState } from "react";

interface numberProps {
  value: number;
  handleNumberClick: (value: number) => void | undefined;
  isSelected: (value: number) => boolean;
  isMatched: (value: number) => boolean;
  isDisabled: boolean;
}

// personal number design
const Number: React.FC<numberProps> = ({
  value,
  handleNumberClick,
  isSelected,
  isMatched,
  isDisabled,
}) => {
  return (
    <div
      className={`w-10 h-10 text-sm leading-5 font-bold flex justify-center items-center rounded-[10px] hover:bg-[#7819F3] cursor-pointer ${
        isSelected(value)
          ? `text-white ${
              isMatched(value)
                ? "border-2 border-white bg-[#7819F360]"
                : "bg-[#7819F3]"
            }`
          : "bg-[#362F53] shadow-inner shadow-[#04041325]"
      }`}
      onClick={isDisabled ? undefined : () => handleNumberClick(value)}
    >
      {value}
    </div>
  );
};

export const NumberSelect = ({
  betStatus,
  randomNumbers,
}: {
  betStatus: boolean;
  randomNumbers: number[];
}) => {
  const [selectedValueList, setSelectedValueList] = useState<number[]>([]);
  const [showBet, setShowBet] = useState(false);
  const [fetchData, setFetchData] = useState<number[]>([]);
  const [fetchDataStatus, setFetchDataStatus] = useState(true);
  const [randomNumbersProcessed, setRandomNumbersProcessed] = useState(false); // Track if randomNumbers has been processed

  let autoNumber: number;

  useEffect(() => {
    if (randomNumbers.length === 10 && !randomNumbersProcessed) {
      setSelectedValueList(randomNumbers);
      setShowBet(true);
      setRandomNumbersProcessed(true);
    }
  }, [randomNumbers, randomNumbersProcessed]);

  const handleNumberClick = (value: number) => {
    setSelectedValueList((prevSelectedValueList) => {
      const isSelected = prevSelectedValueList.includes(value);
      let updatedList;
      if (isSelected) {
        updatedList = prevSelectedValueList.filter((item) => item !== value);
      } else {
        if (prevSelectedValueList.length < 10) {
          updatedList = [...prevSelectedValueList, value];
        } else {
          updatedList = prevSelectedValueList;
        }
      }
      setShowBet(updatedList.length >= 10);
      return updatedList;
    });
  };

  const isSelected = (value: number) => selectedValueList.includes(value);

  const isMatched = (value: number) => fetchData.includes(value);

  const randomIntFromInterval = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const autoNumberSelect = () => {
    autoNumber = randomIntFromInterval(1, 40);
    const flag = selectedValueList.find((item) => item === autoNumber);
    if (!flag) {
      if (selectedValueList.length < 10) {
        setSelectedValueList((prevSelectedValueList) => {
          let updatedList;
          if (prevSelectedValueList.length < 10) {
            updatedList = [...prevSelectedValueList, autoNumber];
          } else {
            updatedList = prevSelectedValueList;
          }
          setShowBet(updatedList.length >= 10);
          return updatedList;
        });
      } else {
        setShowBet(selectedValueList.length >= 9);
      }
    }
  };

  const fetchRandomNumbers = async () => {
    const response = await fetch("/api/games", {
      method: "GET",
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    setFetchData(data.numbers);
  };

  if (betStatus) {
    if (
      fetchDataStatus &&
      (selectedValueList.length === 10 || randomNumbers.length === 10)
    ) {
      fetchRandomNumbers();
      setFetchDataStatus(false);
    }
  }

  useEffect(() => {
    if (betStatus) {
      if (
        (selectedValueList.length === 10 || randomNumbers.length === 10) &&
        fetchDataStatus
      ) {
        fetchRandomNumbers();
        setFetchDataStatus(false);
      }
    }
  }, [selectedValueList, fetchDataStatus]);

  return (
    <>
      <div className="flex flex-col gap-7 justify-between p-3 bg-inherit rounded-[10px] border border-border-color">
        <div className="flex flex-wrap justify-between gap-2">
          {Array.from({ length: 40 }, (_, index) => (
            <Number
              key={index + 1}
              value={index + 1}
              handleNumberClick={handleNumberClick}
              isSelected={isSelected}
              isMatched={isMatched}
              isDisabled={selectedValueList.length >= 10 && betStatus}
            />
          ))}
        </div>
        {showBet ? (
          <div className="bg-[#362F53] w-full flex flex-wrap justify-center items-center rounded-sm cursor-not-allowed gap-2 py-2">
            {Array.from({ length: 10 }, (_, index) => (
              <div className="flex gap-[2px]" key={index}>
                <span>{index + 1}x</span>
                <span className="bg-[#AFA0F1] w-3 h-3 rounded"></span>
              </div>
            ))}
          </div>
        ) : (
          <span
            className="bg-[#362F53] w-full h-10 flex justify-center items-center rounded-sm cursor-pointer font-medium leading-4"
            onClick={autoNumberSelect}
          >
            Select 1-10 numbers to play
          </span>
        )}
      </div>
    </>
  );
};
