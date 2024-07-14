import { Button } from "@/components/ui/button";
import {
  Phone,
  CircleUserRound,
  House,
  MessageSquareMore,
  Grip,
} from "lucide-react";
import clsx from "clsx";

interface BottomMenuProps {
  active: number;
}

export function BottomMenu({ active }: BottomMenuProps) {
  return (
    <>
      <div className="flex justify-between w-full mt-4">
        {["Home", "Message", "Keypad", "Call", "Contacts"].map(
          (label, index) => (
            <Button
              key={index}
              variant="ghost"
              className="flex flex-col items-center w-16 h-16"
            >
              {index === 0 && (
                <House
                  className={clsx("w-6 h-6")}
                  color={active !== index ? "#A5A5A5" : "#000000"}
                />
              )}
              {index === 1 && (
                <MessageSquareMore
                  className={clsx("w-6 h-6")}
                  color={active !== index ? "#A5A5A5" : "#000000"}
                />
              )}
              {index === 2 && (
                <Grip
                  className={clsx("w-6 h-6")}
                  color={active !== index ? "#A5A5A5" : "#000000"}
                />
              )}
              {index === 3 && (
                <Phone
                  className={clsx("w-6 h-6")}
                  color={active !== index ? "#A5A5A5" : "#000000"}
                />
              )}
              {index === 4 && (
                <CircleUserRound
                  className={clsx("w-6 h-6")}
                  color={active !== index ? "#A5A5A5" : "#000000"}
                />
              )}
              <span
                className={clsx(
                  "text-xs",
                  "mt-1",
                  active !== index ? "text-[#A5A5A5]" : "text-[#000000]",
                )}
              >
                {label}
              </span>
            </Button>
          ),
        )}
      </div>
      <span className="flex justify-center self-center rounded-lg bg-[#000000] w-[60px] h-[5px]" />
    </>
  );
}
