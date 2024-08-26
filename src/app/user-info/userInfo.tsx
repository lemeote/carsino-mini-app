"use client"

import { useEffect, useState } from "react";
import Image from "next/image";

import { user_avatar } from "@assets";
import ItemList from "@/components/profile-itemlist";
import { useritem } from "@temp";

interface UserImageResponse {
  photos: string[];
}

export const UserInfo = () => {
  const [userImage, setUserImage] = useState<UserImageResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  console.log(userImage);
  

  useEffect(() => {
    const fetchUserImage = async () => {
      try {
        const response = await fetch("/api/user-info");
        if (!response.ok) {
          throw new Error("Failed to fetch user image");
        }
        const data: UserImageResponse = await response.json();
        setUserImage(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      }
    };

    fetchUserImage();
  }, []);

  const saveProfile = () => {};
  return (
    <div className="flex flex-col justify-between h-full gap-24 mt-6">
      <div className="flex flex-col justify-center items-center">
        <div className="flex items-center justify-center border w-44 h-44 rounded-xl border-border-color">
          <Image src={user_avatar} alt="" width={176} height={176} />
        </div>
        <div className="flex flex-col gap-4 mt-6">
          {useritem.map((item, index) => (
            <ItemList title={item.title} content={item.content} key={index} />
          ))}
        </div>
      </div>
      <div
        className="flex items-center justify-center bg-[#7819F3] rounded-xl h-14 cursor-pointer mb-8"
        onClick={saveProfile}
      >
        <span>Save changes</span>
      </div>
    </div>
  );
};
