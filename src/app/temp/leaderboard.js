import { user1, user_avatar } from "@assets";

export const myRank = {
  userStatus: "down",
  userImage: user_avatar,
  userName: "Ana Wenderson",
  userId: "@wenderson",
  amount: 46,
  rank: 231,
  earnedAmount: 1000,
};

export const leaderboardEarnedRank = [
  {
    rank: "1",
    earned: "1000$",
  },
  {
    rank: "2",
    earned: "750$",
  },
  {
    rank: "3",
    earned: "500$",
  },
  {
    rank: "4-20",
    earned: "250$",
  },
];

export const leaderboardUserList = [
  {
    userStatus: "up",
    userImage: user1,
    userName: "Ana Wenderson",
    userId: "@wenderson",
    amount: 3450,
    rank: 1,
    earnedAmount: 1000,
  },
  {
    userStatus: "up",
    userImage: user_avatar,
    userName: "Thomas Duw",
    userId: "@duet",
    amount: 3350,
    rank: 2,
    earnedAmount: 1000,
  },
  {
    userStatus: "down",
    userImage: user1,
    userName: "Nana Nenson",
    userId: "@nensoon",
    amount: 2132,
    rank: 3,
    earnedAmount: 343,
  },
  {
    userStatus: "down",
    userImage: user1,
    userName: "Ana Wenderson",
    userId: "@wenderson",
    amount: 3450,
    rank: 4,
    earnedAmount: 450,
  },
  {
    userStatus: "up",
    userImage: user_avatar,
    userName: "Trevor Collin",
    userId: "@wenderson",
    amount: 3450,
    rank: 5,
    earnedAmount: 200,
  },
  {
    userStatus: "up",
    userImage: user_avatar,
    userName: "Alison Williams",
    userId: "@wenderson",
    amount: 3450,
    rank: 6,
    earnedAmount: 100,
  },
];

export const myRewardList = [
  {
    payDate: new Date("2024-08-09"),
    payStatus: false,
    amount: 2100,
    earnedAmount: 200,
  },
  {
    payDate: new Date("2024-08-02"),
    payStatus: true,
    amount: 2100,
    earnedAmount: 200,
  },
  {
    payDate: new Date("2024-07-15"),
    payStatus: true,
    amount: 2100,
    earnedAmount: 200,
  },
  {
    payDate: new Date("2024-07-4"),
    payStatus: true,
    amount: 2100,
    earnedAmount: 200,
  },
  {
    payDate: new Date("2024-06-15"),
    payStatus: true,
    amount: 2100,
    earnedAmount: 200,
  },
  {
    payDate: new Date("2024-06-10"),
    payStatus: true,
    amount: 2100,
    earnedAmount: 200,
  },
];

export const whyUnpaidRule = [
  "Fraudulent Activity",
  "Invalid Wallet Information",
  "Ongoing Payment Processing",
];
