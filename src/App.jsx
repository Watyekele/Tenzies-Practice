import { useState } from "react";
import "./App.css";
import Box from "./Box";
import Gpt from "./assets/Gpt";
import Employee from "./assets/Employee";
function App() {
  return (
    <div
      className="flex flex-col items-center justify-center
     min-h-screen"
    >
      <Box />
      <Gpt />
      <Employee />
    </div>
  );
}

export default App;
