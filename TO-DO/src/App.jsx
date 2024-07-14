import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ToDo from "./todo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a> */}
      <ToDo />
    </>
  );
}

export default App;
