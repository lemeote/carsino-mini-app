"use client";

import Image, { StaticImageData } from "next/image";

import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/Header";
import { logo, ico_chat, ico_send, ico_emoji } from "@assets";
import { chatListData } from "@temp";
import { Navbar } from "@/components/Navbar";

interface Props {
  userImage: StaticImageData;
  userID: string;
  sendedTime: string;
  content: string;
}

const LiveChatHeader = () => {
  return (
    <div className="flex justify-between w-full px-6 mt-6">
      <div className="flex items-center justify-center gap-2">
        <div className="w-6 h-6">
          <Image src={ico_chat} alt="" width={24} height={24} />
        </div>
        <span className="text-lg font-bold">Online chat</span>
      </div>
      <span className="bg-inherit text-[#7819F3] border border-[#7819F3] rounded-xl px-3 py-1 cursor-default">
        356
      </span>
    </div>
  );
};

const ChatItem: React.FC<Props> = ({
  userImage,
  userID,
  sendedTime,
  content,
}) => {
  return (
    <div className="flex gap-3 justify-between w-full bg-basic border border-[#271B42] rounded-3xl p-3">
      <div className="w-11 h-11">
          <Image src={userImage} width={42} height={42} alt="@shadcn" className="rounded-full" />
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
  );
};

const LiveChatInput = () => {
  return (
    <div className="flex flex-col gap-3 justify-between w-full bg-basic border border-[#271B42] rounded-3xl p-3">
      <div className="w-full">
        <Textarea
          placeholder="Type your message here."
          className="w-full border bg-inherit border-border-color min-h-10 cursor-text"
        />
      </div>
      <div className="flex justify-end gap-2">
        <div className="p-3 border rounded-lg cursor-pointer border-border-color">
          <Image src={ico_emoji} alt="" />
        </div>
        <div className="p-3 bg-[#7819F3] rounded-xl cursor-pointer">
          <Image src={ico_send} alt="" />
        </div>
      </div>
    </div>
  );
};

const LiveChat = () => {
  return (
    <div className="w-full h-full pb-40 text-white min-h-screen first-line:pt-0 bg-bgcolor">
      <header className="sticky top-0 z-50 pb-2 bg-bgcolor">
        <Header imageSrc={logo} />
        <LiveChatHeader />
      </header>
      <main className="flex flex-col gap-4 px-6 mt-6 pb-28">
        {chatListData.map((item, index) => (
          <div key={index}>
            <ChatItem
              userImage={item.userImg}
              userID={item.userID}
              sendedTime={item.sendedTime}
              content={item.content}
            />
          </div>
        ))}
      </main>
        <div className="fixed w-full bg-bgcolor p-6 bottom-20">
          <LiveChatInput />
        </div>
      <Navbar />
    </div>
  );
};

export default LiveChat;
