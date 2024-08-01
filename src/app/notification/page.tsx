"use client"

import Header from "@/components/Header"
import NotiItem from "@/components/noti-item"
import { user_avatar, diamond_icon } from "../../../assets"

const name = "Alison williams"

const notiList = [
  {
    notiIcon: user_avatar,
    title: 'Congulations!',
    content: `Your friend ${name} has successfully joined through your referral link! You've earned 50 gems.`,
    unread: true,
    alerttime: "7 min ago",
  },
  {
    notiIcon: user_avatar,
    title: 'Congulations!',
    content: `Your friend ${name} has successfully joined through your referral link! You've earned 50 gems.`,
    unread: true,
    alerttime: "1 hour ago",
  },
  {
    notiIcon: user_avatar,
    title: 'Congulations!',
    content: `Your friend ${name} has successfully joined through your referral link! You've earned 50 gems.`,
    unread: false,
    alerttime: "now",
  },
  {
    notiIcon: user_avatar,
    title: 'Referral Milestone Reached',
    content: `Your friend ${name} has successfully joined through your referral link! You've earned 50 gems.`,
    unread: false,
    alerttime: "7 min ago",
  },
  {
    notiIcon: user_avatar,
    title: 'Congulations!',
    content: `Your friend ${name} has successfully joined through your referral link! You've earned 50 gems.`,
    unread: true,
    alerttime: "7 min ago",
  },
  {
    notiIcon: user_avatar,
    title: "You've Earned Rakeback",
    content: `You've earned 10% rakeback from ${name} activities this week, totaling 100 gems`,
    unread: false,
    alerttime: "7 min ago",
  },
]


const NotificationPage = () => {
  return (
    <>
      <div className="w-full bg-bgcolor">
        <div className="p-6">
          <Header imageSrc={diamond_icon} />
        </div>
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