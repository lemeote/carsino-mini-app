import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const TELEGRAM_BOT_TOKEN = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;
    const fetchUrl = `https://api.telegram.org/bot7311947275:AAEhu22F0tCH24ZycEcub76zdKd8OhRF2VE/getUserProfilePhotos`;

    const response = await fetch(fetchUrl, { method: "POST" });

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(errorData, { status: response.status });
    }

    const data = await response.json();
    console.log("aadfasd",data);

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Error fetching user profile photos:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
