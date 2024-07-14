import { Button } from "@/components/ui/button";
import clsx from "clsx";
import {
  Phone,
  Delete,
  ChevronDown,
  ChevronRight,
  Plus,
  Gem,
} from "lucide-react";

interface DialScreenProps {
  dialNumber: string;
  deleteNumber?: () => void;
  showPrice?: string;
  contactInfo?: string;
  upperContactInfo?: string;
  showTopupBar?: boolean;
}

export function DialScreen({
  dialNumber,
  deleteNumber,
  showPrice = "",
  contactInfo = "",
  upperContactInfo = "",
  showTopupBar = false,
}: DialScreenProps) {
  return (
    <>
      <div className="flex justify-between w-full mt-4">
        {showPrice?.length > 0 && (
          <div className="flex items-center justify-between gap-2 rounded-lg p-1">
            <img
              src="/assets/usa.svg"
              alt="usa-flag"
              className="w-5 h-5 rounded-full"
            />
            <div className="flex items-start flex-col gap-0">
              {upperContactInfo?.length > 0 && (
                <span className="text-sm font-semibold truncate max-w-[12.5em]">
                  {upperContactInfo}
                </span>
              )}
              <span
                className={clsx(
                  "text-sm text-[#232323]",
                  upperContactInfo?.length > 0 && "text-[#5E5E5E]",
                )}
              >
                +1-{dialNumber}
              </span>
            </div>
            <ChevronDown className="w-4 h-4" />
          </div>
        )}
        {showPrice?.length === 0 && (
          <Button
            variant="default"
            className="flex items-center justify-end self-end ml-auto px-6 py-1 gap-4 text-sm text-white bg-[#383838] rounded-full"
          >
            <Phone className="w-4 h-4" />
            <span>Get a Number</span>
          </Button>
        )}
        {showPrice?.length > 0 && (
          <div className="flex justify-center items-center border-2 border-gray-200 w-6 h-6 rounded-lg p-1">
            <Plus className="w-4 h-4" color="#5E5E5E" />
          </div>
        )}
      </div>
      {showTopupBar && (
        <div className="flex flex-row items-center self-center justify-between gap-2 w-full rounded-lg bg-[#B9FF66] p-2">
          <div className="flex flex-row items-center self-start gap-2">
            <Gem className="w-3 h-3" />
            <span className="text-xs"> Balance: 0 CR. </span>
          </div>
          <div className="flex flex-row items-center self-end gap-2">
            <span className="text-xs"> Top up </span>
            <ChevronRight className="w-3 h-3" />
          </div>
        </div>
      )}
      <div className="flex flex-col items-center w-full mt-4 mb-4">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2 border-2 border-gray-200 rounded-lg p-1">
            <img
              src="/assets/usa.svg"
              alt="usa-flag"
              className="w-4 h-4 rounded-full"
            />
            <ChevronDown className="w-4 h-4" />
          </div>
          <span
            className="text-[20px] -ml-9 focus:outline-none"
            contentEditable={true}
            onKeyDown={(e) => {
              e.preventDefault();
            }}
          >
            +1 {dialNumber?.length > 0 && " - "}
            {dialNumber}
          </span>
          <Delete
            className="w-6 h-6"
            color="#5E5E5E"
            onClick={(e) => {
              e.preventDefault();
              deleteNumber?.();
            }}
          />
        </div>
        {contactInfo?.length > 0 ? (
          <span className="text-xs text-[#383838] mt-2 truncate max-w-[22.5em]">
            {contactInfo}
          </span>
        ) : (
          <Button variant="ghost" className="text-green-500">
            Add to contacts
          </Button>
        )}
        {showPrice?.length > 0 && (
          <span className="text-xs text-[#7C7C7C] mt-2"> {showPrice} </span>
        )}
      </div>
    </>
  );
}
