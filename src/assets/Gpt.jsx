import { useState } from "react";

export default function Gpt() {
  const [count, setcount] = useState(0);

  const [liked, setLiked] = useState(true);

  function handleClick() {
    setLiked((prevState) => !prevState);
  }

  function Messageshown() {
    if (liked) {
      return <p>You liked this!</p>;
    } else {
      return <p>Oooh Really??</p>;
    }
  }

  return (
    <div>
      {Messageshown()}

      <button onClick={handleClick}>{liked ? "Like 👍" : "Unlike 👎"} </button>
    </div>
  );
}
