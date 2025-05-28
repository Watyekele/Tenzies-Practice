import { useState } from "react";

export default function Gpt() {
  const [name, setName] = useState("");
  const [greetings, setGreetings] = useState(false);
  const [error, setError] = useState(null);

  function handleClick() {
    if (name.trim() === "") {
      setError("Please enter name");
    } else {
      setError(null);
      setGreetings(true);
    }
  }

  return (
    <div>
      {!greetings ? (
        <div>
          <input
            type="text"
            className="text border-2 border-black w-20"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button onClick={handleClick} type="submit">
            Greet Me
          </button>
        </div>
      ) : (
        <p>Your name is {name}</p>
      )}
      {error && <p>{error}</p>}
    </div>
  );
}
