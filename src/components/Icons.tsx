import Image from "next/image";
import { LucideProps } from "lucide-react";
import { CgProfile } from "react-icons/cg";

import {
  diamond_icon,
  games_icon,
  leaderboard,
  logo,
  nav_chat_icon,
  nav_games_icon,
  nav_home_icon,
  nav_leaderboard_icon,
  nav_task_icon,
  user1,
  user2,
  noti_ico,
  user_avatar,
  gems_icon,
} from "../../assets/index";

export const Icons = {
  navigator: {
    home: () => (
      <Image src={nav_home_icon} alt="" />
    ),
    games: () => (
      <Image src={nav_games_icon} alt="" />
    ),
    chat: () => (
      <Image src={nav_chat_icon} alt="" />
    ),
    task: () => (
      <Image src={nav_task_icon} alt="" />
    ),
    leaderboard: () => (
      <Image src={nav_leaderboard_icon} alt="" />
    ),
  },
  headerButton: {
    diamond_amount: () => (
      <Image src={diamond_icon} alt="" />
    ),
    noti_button: () => (
      <Image src={noti_ico} alt="" />
    ),
    user_avatar: () => (
      <Image src={user_avatar} alt="" />
    ),
  },
  mainIcon: {
    games_icon: () => (
      <Image src={games_icon} alt="" />
    ),
    gems_icon: () => (
      <Image src={gems_icon} alt="" />
    ),
    leaderboard: () => (
      <Image src={leaderboard} alt="" />
    ),
  },
};
