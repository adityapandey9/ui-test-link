import { Button } from "@/components/ui/button";
import clsx from "clsx";
import {
  Phone,
  Voicemail,
  History,
  CircleUserRound,
  ChevronDown,
  PhoneOff,
  Grip,
  Volume2,
  MessageSquareMore,
} from "lucide-react";

import { Keyboard } from "@/components/keyboard";

interface CallingKeyboardProps {
  showDialKeyboard?: boolean;
  disableAll?: boolean;
  disableContact?: boolean;
}

export function CallingKeyboard({
  showDialKeyboard = false,
  disableAll = false,
  disableContact = false,
}: CallingKeyboardProps) {
  return (
    <div className="flex flex-col mt-4">
      {!showDialKeyboard && (
        <>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="flex flex-col w-16 h-16 items-center self-center justify-center rounded-full">
              <div className="bg-[#F5F5F5] rounded-full p-3">
                <PhoneOff
                  className="w-7 h-7"
                  color={disableAll ? "#DBDBDB" : "#5E5E5E"}
                  strokeWidth={1.4}
                />
              </div>
              <span
                className={clsx(
                  "text-[#232323] text-[11px] mt-2",
                  disableAll && "text-[#DBDBDB]",
                )}
              >
                History
              </span>
            </div>
            <div className="flex flex-col w-16 h-16 items-center self-center justify-center rounded-full">
              <div className="bg-[#F5F5F5] rounded-full p-3">
                <Grip
                  className="w-7 h-7"
                  color={disableAll ? "#DBDBDB" : "#5E5E5E"}
                  strokeWidth={1.4}
                />
              </div>
              <span
                className={clsx(
                  "text-[#232323] text-[11px] mt-2",
                  disableAll && "text-[#DBDBDB]",
                )}
              >
                Keypad
              </span>
            </div>
            <div className="flex flex-col w-16 h-16 items-center self-center justify-center rounded-full">
              <div className="bg-[#F5F5F5] rounded-full p-3">
                <Volume2
                  className="w-7 h-7"
                  color={disableAll ? "#DBDBDB" : "#5E5E5E"}
                  strokeWidth={1.4}
                />
              </div>
              <span
                className={clsx(
                  "text-[#232323] text-[11px] mt-2",
                  disableAll && "text-[#DBDBDB]",
                )}
              >
                Keypad
              </span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="flex flex-col w-16 h-16 items-center self-center justify-center rounded-full">
              <div className="bg-[#F5F5F5] rounded-full p-3">
                <MessageSquareMore
                  className="w-7 h-7"
                  color={disableAll ? "#DBDBDB" : "#5E5E5E"}
                  strokeWidth={1.4}
                />
              </div>
              <span
                className={clsx(
                  "text-[#232323] text-[11px] mt-2",
                  disableAll && "text-[#DBDBDB]",
                )}
              >
                Message
              </span>
            </div>
            <div className="flex flex-col w-16 h-16 items-center self-center justify-center rounded-full"></div>
            <div className="flex flex-col w-16 h-16 items-center self-center justify-center rounded-full">
              <div className="bg-[#F5F5F5] rounded-full p-3">
                <CircleUserRound
                  className="w-7 h-7"
                  color={disableAll || disableContact ? "#DBDBDB" : "#5E5E5E"}
                  strokeWidth={1.4}
                />
              </div>
              <span
                className={clsx(
                  "text-[#232323] text-[11px] mt-2",
                  (disableAll || disableContact) && "text-[#DBDBDB]",
                )}
              >
                Contacts
              </span>
            </div>
          </div>
          <div className="mt-12" />
        </>
      )}

      {showDialKeyboard && <Keyboard hideLastRow={true} />}

      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="flex flex-col w-16 h-16 items-center self-center justify-center rounded-full"></div>
        <div className="flex flex-col w-16 h-16 items-center self-center justify-center rounded-full">
          <div className="bg-[#FD3C2E99] rounded-full p-3 shadow-md	">
            <Phone
              className="w-7 h-7 rotate-[135deg]"
              color="#FFFFFF"
              strokeWidth={1.4}
            />
          </div>
        </div>
        <div className="flex flex-col w-16 h-16 items-center self-center justify-center rounded-full">
          {showDialKeyboard && (
            <>
              <div className="rounded-full p-1">
                <ChevronDown
                  className="w-5 h-5"
                  color="#5E5E5E"
                  strokeWidth={1.4}
                />
              </div>
              <span className="text-[#232323] text-[11px]">Hide</span>
            </>
          )}
        </div>
      </div>

      <div className="mt-12" />
    </div>
  );
}
