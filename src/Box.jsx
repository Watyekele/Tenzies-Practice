import DiceComp from "./DiceComp";
import Header from "./Header";

export default function Box() {
  return (
    <div
      className="border border-8 border-white
    w-80 h-80"
    >
      <div
        className=" flex flex-col  items-center justify-evenly 
        border border-6 border-black
       rounded w-full h-full gap-2"
      >
        <Header />

        <DiceComp />
        <button className="border border-white mb-2 px-2 rounded-sm">
          roll
        </button>
      </div>
    </div>
  );
}
