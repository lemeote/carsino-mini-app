"use client";

import React, { useCallback, useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

import { Icons } from "./Icons";

interface Route {
  path: string;
  title: string;
  icon: any;
}

export const route: Route[] = [
  {
    path: "/",
    title: "Home",
    icon: (color: string) => <Icons.navigator.home color={color} />,
  },
  {
    path: "/games",
    title: "Games",
    icon: (color: string) => <Icons.navigator.games color={color} />,
  },
  {
    path: "/chat",
    title: "Chat",
    icon: (color: string) => <Icons.navigator.chat color={color} />,
  },
  {
    path: "/task",
    title: "Task",
    icon: (color: string) => <Icons.navigator.task color={color} />,
  },
  {
    path: "/leaderboard",
    title: "Leader Board",
    icon: (color: string) => <Icons.navigator.leaderboard color={color} />,
  },
];

export const Navbar = () => {
  const [active, setActive] = useState(-1);

  const router = useRouter();
  const pathname = usePathname();

  const updateActiveState = useCallback(() => {
    switch (pathname) {
      case "/":
        setActive(0);
        break;
      case "/games":
        setActive(1);
        break;
      case "/chat":
        setActive(2);
        break;
      case "/task":
        setActive(3);
        break;
      case "/leaderboard":
        setActive(4);
        break;
      default:
        setActive(-1);
    }
  }, [pathname]);

  useEffect(() => {
    updateActiveState();
  }, [pathname, updateActiveState]);

  return (
    <div className="fixed bottom-0 w-full h-[100px] flex justify-between px-2 z-10 bg-button rounded-t-[32px]">
      {route.map((item, index) => {
        return (
          <div
            key={index}
            onClick={() => {
              router.push(item.path);
            }}
            className={`flex flex-col flex-1 justify-center items-center gap-2 rounded-xl cursor-pointer transition-all duration-200 ease-linear ${
              active === index ? "text-[#6174EC]" : "bg-transparent text-white"
            } `}
          >
            <div
              className={`flex flex-col w-[52px] h-[52px] rounded-xl justify-center items-center ${
                active === index ? "bg-[#7819F3]" : "bg-transparent"
              }`}
            >
              {item.icon(active === index ? "#DBD0E8" : "#584D74")}
              <span
                className={`text-xs text-center ${
                  item.path == pathname ? "hidden" : "block"
                }`}
              >
                {item.title}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
