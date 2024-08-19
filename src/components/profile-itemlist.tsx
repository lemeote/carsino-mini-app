import Image from "next/image";
import { useUtils } from "@telegram-apps/sdk-react";
import { TonConnectButton, useTonWallet } from "@tonconnect/ui-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ico_solana } from "@assets";

interface Props {
  title: string;
}

const ItemList: React.FC<Props> = ({ title }) => {
  const wallet = useTonWallet();
  if (!wallet) {
    return <TonConnectButton />
  }

  const {
    account: { chain, publicKey, address },
    device: {
      appName,
      appVersion,
      maxProtocolVersion,
      platform,
      features,
    },
  } = wallet;

  return (
    <div className="flex items-center justify-between w-full p-2 px-5 bg-button rounded-xl text-sm">
      <div className="flex gap-1 w-full">
        <Image
          src={ico_solana}
          alt=""
          className={`${title === "Connect Wallet" ? "block" : "hidden"}`}
          width={20}
          height={20}
        />
        <span>{title}</span>
      </div>
      {title === "Connect Wallet" ? (
        // <Dialog>
        //   <DialogTrigger asChild>
        //     <Button variant="outline" className="bg-[#7819F3]">
        //       Connect
        //     </Button>
        //   </DialogTrigger>
        //   <DialogContent className="max-w-[352px] bg-basic border border-border-color rounded-xl text-white">
        //     <div>
        //       <h1>Connect wallet</h1>
        //       <div className="relative mt-5">
        //         <input
        //           type="text"
        //           id="floating_outlined"
        //           className="block px-2.5 pb-2.5 pt-4 w-full border border-border-color text-sm bg-transparent rounded-lg border-1 appearance-none text-[#ffffff40] dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 focus:border-border peer"
        //           placeholder=" "
        //         />
        //         <label
        //           htmlFor="floating_outlined"
        //           className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-basic dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
        //         >
        //           Enter account number
        //         </label>
        //       </div>
        //     </div>
        //     <DialogFooter>
        //       <Button type="submit" className="bg-[#7819F3]">
        //         Save changes
        //       </Button>
        //     </DialogFooter>
        //   </DialogContent>
        // </Dialog>
          <TonConnectButton />
      ) : (
        <span>{wallet.connectItems?.tonProof?.name}</span>
      )}
    </div>
  );
};

export default ItemList;
