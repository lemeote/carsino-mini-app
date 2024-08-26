import Image from "next/image";
import { TonConnectButton, useTonWallet } from "@tonconnect/ui-react";

import { ico_solana } from "@assets";

interface Props {
  title: string;
  content?: string;
}

const ItemList: React.FC<Props> = ({ title, content }) => {
  const wallet = useTonWallet();
  if (!wallet) {
    return <TonConnectButton />;
  }

  return (
    <div className="flex items-center justify-between w-full gap-2 p-2 px-5 bg-button rounded-xl text-sm">
      <div className="flex flex-wrap justify-evenly gap-1 w-full">
        <Image
          src={ico_solana}
          alt=""
          className={`${title === "Connect Wallet" ? "block" : "hidden"}`}
          width={20}
          height={20}
        />
        <div className="flex justify-between gap-2">
          <span className="text-center">{title}</span>
          <span className="text-center">{content}</span>
        </div>
      </div>
      {title === "Connect Wallet" ? (
        <TonConnectButton />
      ) : (
        <span>{wallet.connectItems?.tonProof?.name}</span>
      )}
    </div>
  );
};

export default ItemList;
