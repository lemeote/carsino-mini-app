'use client'

import Header from "@/components/Header"
import { TaskHeader } from "@/components/task-header"
import { taskDailyTaskList } from "@temp"
import { ico_tasks } from "@assets"
import { TaskItem } from "@/components/task-item"

const DailyBonus = () => {
  return (
    <>
    <div className="w-full h-full min-h-screen text-white bg-bgcolor">
      <Header imageSrc={ico_tasks} />
      <main className="px-6 mt-6 pb-4 overflow-auto">
        <TaskHeader imgSrc={ico_tasks} title={'Daily task'}/>
        <div className="flex flex-col gap-4 mt-6">
          {taskDailyTaskList.map((item, index) => (
            <div key={index}>
                <TaskItem icoSrc={item.icoSrc}  title={item.title} content={item.content} buttonTitle={item.buttonTitle}/>
            </div>
          ))}
        </div>
      </main>
    </div>
    </>
  )
}

export default DailyBonus;