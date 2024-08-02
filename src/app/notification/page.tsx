"use client"

import Image from "next/image"

import Header from "@/components/Header"
import NotiItem from "@/components/noti-item"
import { ico_chart, ico_earning, ico_flower, ico_gift, ico_medal, ico_prize, ico_warining, ico_bell } from "../../../assets"

const name = "Alison williams"

const notiList = [
  {
    notiIcon: ico_chart,
    title: 'Congulations!',
    content: `Your friend ${name} has successfully joined through your referral link! You've earned 50 gems.`,
    unread: true,
    alerttime: "7 min ago",
  },
  {
    notiIcon: ico_earning,
    title: 'Congulations!',
    content: `Your friend ${name} has successfully joined through your referral link! You've earned 50 gems.`,
    unread: true,
    alerttime: "1 hour ago",
  },
  {
    notiIcon: ico_flower,
    title: 'Congulations!',
    content: `Your friend ${name} has successfully joined through your referral link! You've earned 50 gems.`,
    unread: false,
    alerttime: "now",
  },
  {
    notiIcon: ico_gift,
    title: 'Referral Milestone Reached',
    content: `Your friend ${name} has successfully joined through your referral link! You've earned 50 gems.`,
    unread: false,
    alerttime: "7 min ago",
  },
  {
    notiIcon: ico_medal,
    title: 'Congulations!',
    content: `Your friend ${name} has successfully joined through your referral link! You've earned 50 gems.`,
    unread: true,
    alerttime: "7 min ago",
  },
  {
    notiIcon: ico_prize,
    title: "You've Earned Rakeback",
    content: `You've earned 10% rakeback from ${name} activities this week, totaling 100 gems`,
    unread: false,
    alerttime: "7 min ago",
  },
  {
    notiIcon: ico_warining,
    title: 'Referral Milestone Reached',
    content: `Your friend ${name} has successfully joined through your referral link! You've earned 50 gems.`,
    unread: false,
    alerttime: "7 min ago",
  },
]

const BodyHeader = () => {
  return (
    <div className="flex justify-between w-full mt-6">
      <div className="flex items-center justify-center gap-2">
        <Image src={ico_bell} alt=""/>
        <h2>Notifications</h2>
      </div>
        <span className="font-normal text-xs">Mark all as read</span>
    </div>
  );
};

const NotificationPage = () => {
  return (
    <>
      <div className="w-full p-6 bg-bgcolor text-white">
          <Header imageSrc={ico_chart} />
          <BodyHeader />
        <main>
          {
            notiList.map((item, index) => (
              <div key={index}>
                <NotiItem notiIcon={item.notiIcon} title={item.title} content={item.content} unread={item.unread} alerttime={item.alerttime} />
              </div>
            ))
          }
        </main>
      </div>
    </>
  )
}

export default NotificationPage;