import Header from "@/components/Header";
import MainGames from "@/components/main-games";
import Carousel from "@/components/Carousel";
import MainEarnGems from "@/components/main-earn-gems";
import MainLeaderBoard from "@/components/main-leaderboard";
import { Navbar } from "@/components/Navbar";
import { logo, main, gems } from "@assets";
import getJoinUserDocument from "@/firebase/getUserList";
import getUser from "@/firebase/getUser";

const MainCarousel = () => {
  return (
    <div className="w-full">
      <Carousel images={[gems, main, gems]} />
    </div>
  );
};

export default async function Home() {
  const userListID = await getJoinUserDocument();
  const userPromises = userListID.map((userId) => getUser(userId));
  const userList = await Promise.all(userPromises);

  return (
    <div className="w-full h-full min-h-screen text-white bg-bgcolor">
      <Header imageSrc={logo} />
      <main className="flex flex-col items-center justify-between gap-6 px-6 mt-10">
        <MainCarousel />
        <MainGames />
        <MainEarnGems />
        <MainLeaderBoard userList={userList} />
      </main>
      <Navbar />
    </div>
  );
}
