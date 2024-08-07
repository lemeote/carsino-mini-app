import { useRouter } from "next/navigation";
import Image, { StaticImageData } from "next/image";
import { Button } from "@/components/ui/button";

interface Props {
  icoSrc: StaticImageData;
  title: string;
  content: string;
  buttonTitle: string;
  inviteCount?: Number;
}

export const TaskItem: React.FC<Props> = ({
  icoSrc,
  title,
  content,
  buttonTitle,
  inviteCount,
}) => {
  const router = useRouter();
  const gotoDetailItem = (e: string) => {
    if (e === "Claim now") {
      router.push("daily-bonus");
    }
    if (e === "View task") {
      router.push("daily-task");
    }
    if (e === "View mission") {
      router.push("weekly-mission");
    }
    if (e === "Invite now") {
      router.push("invite-friends");
    }
  };
  return (
    <div className="flex gap-2 p-4 justify-between items-center bg-inherit border border-border-color rounded-3xl">
      <div className="w-auto h-auto flex items-center justify-center">
        <Image src={icoSrc} alt="" width={57} height={57} />
      </div>
      <div className="flex flex-col gap-2 w-[75%]">
        <div className="flex flex-wrap justify-evenly items-center gap-2 w-full">
          <span className="text-base font-medium">{title}</span>
          <Button
            className={`bg-inherit border border-border-color  text-xs rounded-sm${
              inviteCount === 3 ? "cursor-none" : "cursor-pointer"
            }`}
            onClick={
              Number(inviteCount) === 3
                ? () => gotoDetailItem("")
                : () => gotoDetailItem(buttonTitle)
            }
          >
            {Number(inviteCount) === 3 ? "Complete" : buttonTitle}
          </Button>
        </div>
        <div
          className={`${
            inviteCount ? "grid grid-cols-3 gap-3 h-1 w-full" : "hidden"
          }`}
        >
          <span
            key={1}
            className={`${
              Number(inviteCount) !== undefined && 1 <= Number(inviteCount)
                ? "bg-[#7819F3]"
                : "bg-border-color"
            }`}
          ></span>
          <span
            key={2}
            className={`${
              Number(inviteCount) !== undefined && 2 <= Number(inviteCount)
                ? "bg-[#7819F3]"
                : "bg-border-color"
            }`}
          ></span>
          <span
            key={3}
            className={`${
              Number(inviteCount) !== undefined && 3 <= Number(inviteCount)
                ? "bg-[#7819F3]"
                : "bg-border-color"
            }`}
          ></span>
        </div>
      </div>
    </div>
  );
};
