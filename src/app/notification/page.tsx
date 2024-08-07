"use client";

import Image from "next/image";

import Header from "@/components/Header";
import NotiItem from "@/components/noti-item";
import { ico_chart, ico_bell } from "@assets";
import { notiList } from "@temp";

const BodyHeader = () => {
  return (
    <div className="flex justify-between w-full mt-6 px-6">
      <div className="flex items-center justify-center gap-2">
        <Image src={ico_bell} alt="" />
        <h2>Notifications</h2>
      </div>
      <span className="text-xs font-normal">Mark all as read</span>
    </div>
  );
};

const NotificationPage = () => {
  return (
    <>
      <div className="w-full min-h-screen text-white bg-bgcolor">
        <Header imageSrc={ico_chart} />
        <BodyHeader />
        <main className="px-6 pt-6">
          {notiList.map((item, index) => (
            <div key={index}>
              <NotiItem
                notiIcon={item.notiIcon}
                title={item.title}
                content={item.content}
                unread={item.unread}
                alerttime={item.alerttime}
              />
            </div>
          ))}
        </main>
      </div>
    </>
  );
};

export default NotificationPage;
