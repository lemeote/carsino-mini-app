"use client"

import Image, { StaticImageData } from "next/image";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import Header from "@/components/Header";
import { logo, ico_chat } from "../../../assets";
import { chatListData } from "../temp";
import { Navbar } from "@/components/Navbar";

interface Props {
  userImage: StaticImageData,
  userID: string,
  sendedTime: string,
  content: string,
}

const LiveChatHeader = () => {
  return (
    <div className="w-full flex justify-between mt-6">
      <div className="flex justify-center items-center gap-2">
        <div className="w-6 h-6">
          <Image src={ico_chat} alt="" width={24} height={24} />
        </div>
        <span className="text-lg font-bold">Online chat</span>
      </div>
      <span className="bg-button text-basic border border-[#7819F3] rounded-xl px-3 py-1">356</span>
    </div>
  )
}

const ChatItem: React.FC<Props> = ({ userImage, userID, sendedTime, content }) => {
  return (
    <div className="flex gap-3 justify-between w-full bg-basic border border-[#271B42] rounded-3xl p-3">
      <div>
        <Avatar>
          <AvatarImage src={`${userImage}`} alt="@shadcn" />
          <AvatarFallback>Me</AvatarFallback>
        </Avatar>
      </div>
      <div className="w-[80%]">
        <div className="flex justify-between w-full text-[#675A7B] text-xs">
          <span>{userID}</span>
          <span>{sendedTime}</span>
        </div>
        <div>
          <span>{content}</span>
        </div>
      </div>
    </div>
  )
}

const LiveChat = () => {
  return (
    <>
      <div className="w-full h-full min-h-screen p-6 pt-0 text-white bg-bgcolor pb-40">
        <header className="sticky top-0 pt-6 pb-2 z-50 bg-bgcolor">
          <Header imageSrc={logo} />
          <LiveChatHeader />
        </header>
        <main className="flex flex-col gap-4 mt-6">
          {
            chatListData.map((item, index) => (
              <div key={index} >
                <ChatItem userImage={item.userImg} userID={item.userID} sendedTime={item.sendedTime} content={item.content} />
              </div>
            ))
          }
        </main>
      </div>
      <Navbar />
    </>
  );
}

export default LiveChat;