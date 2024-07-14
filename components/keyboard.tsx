import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { Phone, Voicemail, History, CircleUserRound } from "lucide-react";

interface KeyboardProps {
  active?: boolean;
  setDialNumber?: (value: string) => void;
  hideLastRow?: boolean;
}

export function Keyboard({
  active = false,
  setDialNumber,
  hideLastRow = false,
}: KeyboardProps) {
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-3 gap-4 mt-10">
        {[
          "1",
          "2 ABC",
          "3 DEF",
          "4 GHI",
          "5 JKL",
          "6 MNO",
          "7 PQRS",
          "8 TUV",
          "9 WXYZ",
          "*",
          "0 +",
          "#",
        ].map((key, index) => (
          <Button
            key={index}
            variant="ghost"
            className="flex flex-col items-center justify-center w-16 h-16 text-[19px] bg-gray-100 rounded-full"
            onClick={(e) => {
              e.preventDefault();
              setDialNumber?.(key.split(" ")[0]);
            }}
          >
            {key.split(" ")[0]}
            {index === 0 && (
              <Voicemail className="w-4 h-4 font-thin" strokeWidth={0.96} />
            )}
            <span className="text-[8px] font-light">{key.split(" ")[1]}</span>
          </Button>
        ))}
      </div>
      {!hideLastRow && (
        <div className="grid grid-cols-3 gap-4 mt-4">
          <Button
            variant="ghost"
            className="flex flex-col w-16 h-16 items-center justify-center rounded-full"
          >
            <History className="w-8 h-8" color="#5E5E5E" strokeWidth={1.4} />
            <span className="text-[#232323] text-[8px]">History</span>
          </Button>
          <Button
            variant="ghost"
            className={clsx(
              "flex items-center justify-center w-16 h-16 rounded-full",
              active ? "bg-[#B9FF66CC]" : "bg-[#E9FFC7CC]",
            )}
          >
            <Phone className="w-6 h-6" color={active ? "#000000" : "#DBDBDB"} />
          </Button>
          <Button
            variant="ghost"
            className="flex flex-col w-16 h-16 items-center justify-center rounded-full"
          >
            <CircleUserRound
              className="w-8 h-8"
              color="#5E5E5E"
              strokeWidth={1.4}
            />
            <span className="text-[#232323] text-[8px]">Contacts</span>
          </Button>
        </div>
      )}
    </div>
  );
}
