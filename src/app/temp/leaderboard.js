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

export const FAQListContent = [
  {
    title: "How the leaderboard works",
    content: [
      {
        index: "01",
        content: "Track players' activities that contribute to their scores",
      },
      {
        index: "02",
        content:
          "Calculate the total gems earned by each player within the specified time frames",
      },
      {
        index: "03",
        content:
          "Store players' scores and relevant data in a structured database",
      },
      {
        index: "04",
        content:
          "Include timestamps for each recorded activity to facilitate accurate calculations and updates.",
      },
    ],
  },
  {
    title: "Ranking Logic",
    content: [
      {
        index: "05",
        content:
          "Reset scores at the start of each day and calculate the total gems earned within that day",
      },
      {
        index: "06",
        content:
          "Reset scores at the start of each day and calculate the total gems earned within that day",
      },
      {
        index: "07",
        content:
          "Reset scores at the start of each month and aggregate the gems earned throughout the month",
      },
    ],
  },
  {
    title: "Updating the leaderboard",
    content: [
      {
        index: "08",
        content:
          "Implement a system to update the leaderboard in real-time or at regular intervals (e.g., every minute) to reflect the latest scores.",
      },
      {
        index: "09",
        content: "Sort players based on their scores in descending order",
      },
    ],
  },
  {
    title: "Reward distribution",
    content: [
      {
        index: "10",
        content:
          "At the end of each day, week, and month, calculate the final rankings and distribute rewards accordingly",
      },
      {
        index: "11",
        content:
          "Notify the top players about their rewards through in-app notifications, emails, or messages",
      },
    ],
  },
];
