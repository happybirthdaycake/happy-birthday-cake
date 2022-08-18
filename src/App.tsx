import "./App.css";

import reactLogo from "./assets/react.svg";
import { useState } from "react";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);
  const birthdaycakE = [0, 2, 7, 9, 10, 11, 12,13,14,15,16];
  const birthdaycaKe = [44, 43, 42, 41, 40, 39, 38, 35, 30, 29,27, 26];
  const birthdaycAke = [65, 64, 63, 62, 61, 60, 56, 70, 79, 78, 77, 76, 75, 74, 73];
  const BirthdayCake = [352];
  const birthdaycake = [  ]
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
