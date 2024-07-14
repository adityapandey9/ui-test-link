"use client";

import { useState } from "react";
import { Keyboard } from "@/components/keyboard";
import { BottomMenu } from "@/components/bottom-menu";
import { Header } from "@/components/header";
import { DialScreen } from "@/components/dial-screen";

export default function Page1() {
  const active = 2;
  const [dialNumber, setDialNumber] = useState("");

  const deleteNumber = () => {
    setDialNumber(dialNumber.slice(0, -1));
  };

  return (
    <div className="flex flex-col items-center justify-between h-screen p-4 bg-white">
      <Header />
      <DialScreen dialNumber={dialNumber} deleteNumber={deleteNumber} />
      <Keyboard
        active={active}
        setDialNumber={(v) => {
          setDialNumber((dialNumber) => dialNumber + v);
        }}
      />
      <BottomMenu active={active} />
    </div>
  );
}
