import { Signal, Wifi, BatteryFull } from "lucide-react";

export function Header() {
  return (
    <div className="flex justify-between w-full">
      <span className="text-sm">9:41</span>
      <div className="flex items-center space-x-2">
        <Signal className="w-4 h-4" />
        <Wifi className="w-4 h-4" />
        <BatteryFull className="w-4 h-4" />
      </div>
    </div>
  );
}
