import Header from "@/components/Header";
import { user_avatar } from "@assets";
import { UserInfo } from "./userInfo";

const UserProfile = () => {
  return (
    <div className="w-full h-full min-h-screen pb-0 overflow-auto text-white bg-bgcolor">
      <Header imageSrc={user_avatar} />
      <main className="h-[75%] mt-12 px-6">
        <h1>My Profile</h1>
        <UserInfo />
      </main>
    </div>
  );
};

export default UserProfile;
