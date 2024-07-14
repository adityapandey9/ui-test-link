"use client";

import { CallingKeyboard } from "@/components/calling-keyboard";
import { BottomMenu } from "@/components/bottom-menu";
import { Header } from "@/components/header";
import { CallingScreen } from "@/components/calling-screen";

export default function Page13() {
  return (
    <div className="flex flex-col items-center justify-between max-h-screen p-4 bg-white pb-10">
      <Header />
      <CallingScreen
        dialNumber="2059276258"
        callingFromTxt="Incoming call to WhatsApp"
        callingString="Call from"
        isCalling={true}
        disableContact={true}
      />
    </div>
  );
}
