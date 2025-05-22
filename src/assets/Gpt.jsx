import { useState } from "react";

export default function Gpt() {
  const [count, setcount] = useState(0);

  const [liked, setLiked] = useState(true);
  const [steps, setSteps] = useState(0);

  function Increased() {
    setSteps((prevSteps) => prevSteps + 1);
  }
  function Decreased() {
    setSteps((prevSteps) => Math.max(prevSteps - 1, 0));
  }
  function Reset() {
    setSteps(0);
  }

  return (
    <div>
      <button onClick={Increased}>Increase</button>
      <p>You walked {steps} steps</p>
      <button onClick={Decreased}>Decrease</button>
      <br />
      <button onClick={Reset}>Re-set</button>
    </div>
  );
}
