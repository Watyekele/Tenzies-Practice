import { useState } from "react";

export default function Gpt() {
  const [count, setcount] = useState(0);
  function Increase() {
    setcount(count + 1);
  }

  function Decrease() {
    setcount((prevCount) => Math.max(prevCount - 1, 0));
  }

  return (
    <div>
      <button onClick={Increase}>Increase</button>

      {count}
      <br />
      <button onClick={Decrease}>Decrease</button>
    </div>
  );
}
