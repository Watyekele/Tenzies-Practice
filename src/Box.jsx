import { useState } from "react";
import { useEffect } from "react";
import DiceComp from "./DiceComp";
import Header from "./Header";

export default function Box() {
  const [Dice, setDice] = useState(null);
  return (
    <div
      className="border border-8 border-white bg-white
    w-80 h-80"
    >
      <div
        className=" flex flex-col  items-center justify-evenly 
        border border-6 border-black
       rounded w-full h-full gap-2"
      >
        <Header />

        <DiceComp />
        <button
          className="border 
        border-none mb-2 px-2 rounded-sm bg-blue-300 
        shadow-xl/50 cursor-pointer hover:opacity-50"
        >
          Roll
        </button>
      </div>
    </div>
  );
}
