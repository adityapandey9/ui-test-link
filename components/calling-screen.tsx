import { Button } from "@/components/ui/button";
import clsx from "clsx";
import {
  Phone,
  Delete,
  ChevronDown,
  ChevronRight,
  Plus,
  Gem,
  CircleUserRound,
} from "lucide-react";

interface CalingScreenProps {
  dialNumber: string;
  callingString: string;
  callingFromTxt: string;
  disableContact?: boolean;
  isCalling?: boolean;
}

export function CallingScreen({
  dialNumber,
  callingString = "Calling..",
  callingFromTxt = "Calling from WhatsApp",
  disableContact = false,
  isCalling = false,
}: CalingScreenProps) {
  return (
    <>
      <div className="flex justify-between w-full mt-4">
        <div className="flex items-center text-xs p-1 text-[#232323]">
          {callingFromTxt}
        </div>
        <div className="flex justify-center items-center p-1 text-xs text-[#5E5E5E]">
          +1-2059276258
        </div>
      </div>

      <div className="flex flex-col items-center w-full mt-4">
        <div className="flex flex-col items-center self-center justify-center">
          {disableContact ? (
            <img
              src="/assets/Avatar.svg"
              alt="avatar-flag"
              className="w-[96px] h-[96px] rounded-full"
            />
          ) : (
            <div className="bg-[#F5F5F5] rounded-full p-4">
              <CircleUserRound
                className="w-12 h-12"
                color="#5E5E5E"
                strokeWidth={1.4}
              />
            </div>
          )}
          <span className="text-[12px] mt-3 text-[#232323]">
            {callingString}
          </span>
          <span className="text-[16px] mt-1 font-semibold text-[#232323]">
            +1 {dialNumber?.length > 0 && " - "}
            {dialNumber}
          </span>
        </div>
        <span className="text-xs text-[#7C7C7C] mt-2"> Houston, TX </span>
      </div>
      {isCalling && (
        <>
          <div className="flex flex-row justify-between w-[60%] mt-[8em] pb-[48px]">
            <div className="bg-[#FD3C2E99] rounded-full p-3 shadow-md	">
              <Phone
                className="w-7 h-7 rotate-[135deg]"
                color="#FFFFFF"
                strokeWidth={1.4}
              />
            </div>
            <div className="bg-[#33D05999] rounded-full p-3 shadow-md	">
              <Phone className="w-7 h-7" color="#FFFFFF" strokeWidth={1.4} />
            </div>
          </div>
          <div className="mt-8"></div>
        </>
      )}
    </>
  );
}
