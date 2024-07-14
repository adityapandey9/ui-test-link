"use client";

import { Keyboard } from "@/components/keyboard";
import { BottomMenu } from "@/components/bottom-menu";
import { Header } from "@/components/header";
import { DialScreen } from "@/components/dial-screen";

export default function Page4() {
  const active = 2;

  return (
    <div className="flex flex-col items-center justify-between h-screen p-4 bg-white">
      <Header />
      <DialScreen dialNumber="2059276258" showPrice="$0.01/min" contactInfo="Brent Woo" />
      <Keyboard active={true} />
      <BottomMenu active={active} />
    </div>
  );
}
