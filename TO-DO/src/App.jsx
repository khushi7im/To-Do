import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ToDo from "./todo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ToDo />
    </>
  );
}

export default App;
