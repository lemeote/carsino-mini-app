import { NextRequest, NextResponse } from "next/server";

const generateRandomNumbers = (
  min: number,
  max: number,
  count: number
): number[] => {
  const randomNumbers: number[] = [];
  while (randomNumbers.length < count) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    if (!randomNumbers.includes(num)) {
      randomNumbers.push(num);
    }
  }
  return randomNumbers;
};

export async function GET(req: NextRequest, res: NextResponse) {
  const randomNumbers = generateRandomNumbers(1, 40, 10);
  return NextResponse.json(
    {
      numbers: randomNumbers,
    },
    { status: 200 }
  );
}
