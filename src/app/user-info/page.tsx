"use client"

import Image from "next/image"

import Header from "@/components/Header"
import { user_avatar } from "../../../assets"
import ItemList from "@/components/profile-itemlist"
import { userinfo, useritem } from "../temp"


const UserInfo = () => {
  return (
    <div className="flex flex-col justify-between h-full min-h-screen mt-6">
      <div>
        <div className="flex justify-evenly">
          <div className="flex items-center justify-center border w-44 h-44 rounded-xl border-border-color">
            <Image src={user_avatar} alt="" width={176} height={176} />
          </div>
          <div className="flex flex-col justify-center gap-2">
            <span className="text-2xl">
              <strong>{userinfo.userName}</strong>
            </span>
            <span className="text-[#ffffff30]">
              {userinfo.userID}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-6">
          {
            useritem.map((item, index) => (
              <ItemList title={item.title} param={item.param} key={index} />
            ))
          }
        </div>
      </div>
      <div className="flex items-center justify-center bg-[#7819F3] rounded-xl h-14 cursor-pointer">
        <span>Save changes</span>
      </div>
    </div>
  )
}

const UserProfile = () => {
  return (
    <div className="w-full h-screen p-6 pb-0 overflow-auto text-white bg-bgcolor">
      <Header imageSrc={user_avatar} />
      <main className="h-[75%] mt-12">
        <h1>My Profile</h1>
        <UserInfo />
      </main>
    </div>
  )
}

export default UserProfile;