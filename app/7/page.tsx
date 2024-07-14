"use client";
import { Button } from "@/components/ui/button";

export default function Page7() {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-4 bg-white">
      <div className="flex flex-col self-center p-4 border-2 border-gray-200 bg-white rounded-lg max-w-[40%]">
        <span className="font-semibold text-md text-[#232323]">
          Invalid Number
        </span>
        <span className="text-sm text-[#5E5E5E]">
          The number you have entered is invalid. <br />
          Please check the number and try again.
        </span>

        <Button
          variant="ghost"
          className="flex flex-col items-center w-full mt-7 border-2 border-gray-200"
        >
          OK
        </Button>
      </div>
    </div>
  );
}
