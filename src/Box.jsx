import { useState } from "react";
import { useEffect } from "react";
import DiceComp from "./DiceComp";
import Header from "./Header";

export default function Box() {
  function generateDice(id) {
    return {
      id: id,
      value: Math.floor(Math.random() * 6 + 1),
      isHeld: false,
    };
  }

  function allNewDice() {
    const Dice = [];

    for (let i = 0; i < 10; i++) {
      Dice.push(generateDice(i));
    }
    return Dice;
  }

  const [Dice, setDice] = useState(allNewDice());

  const diceElements = Dice.map((Die, id) => (
    <DiceComp key={Die.id} value={Die.value} status={Die.isHeld} />
  ));

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

        <section className="grid grid-cols-5 grid-rows-2 ">
          {diceElements}
        </section>
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
