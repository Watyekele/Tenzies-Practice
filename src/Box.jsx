import { useState } from "react";
import { useEffect } from "react";
import DiceComp from "./DiceComp";
import Header from "./Header";

export default function Box() {
  const [Dice, setDice] = useState(allNewDice());

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

  const gameWon =
    Dice.every((Die) => Die.isHeld) &&
    Dice.every((Die) => Die.value === Dice[0].value);

  function Hold(id) {
    setDice((prevState) =>
      prevState.map((Die) =>
        Die.id === id ? { ...Die, isHeld: !Die.isHeld } : Die
      )
    );
  }
  function rollDice() {
    if (!gameWon) {
      setDice((prevState) =>
        prevState.map((Die) =>
          Die.isHeld
            ? Die
            : { ...Die, value: Math.floor(Math.random() * 6 + 1) }
        )
      );
    } else {
      setDice(allNewDice());
    }
  }

  const diceElements = Dice.map((Die, id) => (
    <DiceComp
      key={Die.id}
      value={Die.value}
      status={Die.isHeld}
      id={Die.id}
      hold={Hold}
    />
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
        <div className="flex flex-col gap-4 items-center mb-4">
          <section className="grid grid-cols-5 grid-rows-2 gap-4 ">
            {diceElements}
          </section>
          <button
            onClick={rollDice}
            className="min-w-20
        border-none  px-2 rounded-sm bg-blue-200 
        shadow-[2px_3px_4px_rgba(0,0,0,0.5)] font-semibold cursor-pointer hover:opacity-50"
          >
            {gameWon ? <p>New Game</p> : <p> Roll</p>}
          </button>
        </div>
      </div>
    </div>
  );
}
