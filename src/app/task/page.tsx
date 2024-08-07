"use client";

import Header from "@/components/Header";
import { Navbar } from "@/components/Navbar";
import { TaskItem } from "@/components/task-item";
import { TaskHeader } from "@/components/task-header";
import { taskItemList } from "@temp";
import { ico_gems, logo } from "@assets";

const Task = () => {
  return (
      <div className="w-full h-full min-h-screen text-white bg-bgcolor">
        <Header imageSrc={logo} />
        <main className="px-6 mt-6 pb-32 overflow-auto">
          <TaskHeader imgSrc={ico_gems} title={"Earn gems"} />
          <div className="flex flex-col gap-4 mt-6">
            {taskItemList.map((item, index) => (
              <div key={index}>
                <TaskItem
                  icoSrc={item.icoSrc}
                  title={item.title}
                  content={item.content}
                  buttonTitle={item.buttonTitle}
                />
              </div>
            ))}
          </div>
        </main>
        <Navbar />
      </div>
  );
};

export default Task;
