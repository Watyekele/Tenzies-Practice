import { useState } from "react";
import "./App.css";
import Box from "./Box";
import Gpt from "./assets/Gpt";
function App() {
  return (
    <div
      className="flex items-center justify-center
     min-h-screen"
    >
      <Box />
      <Gpt />
    </div>
  );
}

export default App;
