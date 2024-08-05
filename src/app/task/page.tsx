'use client'

import Image from "next/image"

import Header from "@/components/Header"
import { Navbar } from "@/components/Navbar"
import { TaskItem } from "@/components/task-item"
import { taskItemList } from "../temp"
import { ico_gems, logo } from "../../../assets"


const TaskHeader = () => {
  return (
    <div className="flex items-center gap-2">
      <Image src={ico_gems} alt="" />
      <span className="text-lg font-bold">Earn gems</span>
    </div>
  )
}

const Task = () => {
  return (
    <>
      <div className="w-full h-full min-h-screen text-white bg-bgcolor">
        <Header imageSrc={logo} />
        <main className="px-6 mt-6 pb-32 overflow-auto">
          <TaskHeader />
          <div className="flex flex-col gap-4 mt-6">
            {
              taskItemList.map((item, index) => (
                <div key={index}>
                  <TaskItem icoSrc={item.icoSrc} title={item.title} content={item.content} buttonTitle={item.buttonTitle} />
                </div>
              ))
            }
          </div>
        </main>
      </div>
      <Navbar />
    </>
  )
}

export default Task;