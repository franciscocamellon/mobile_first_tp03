import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Mobile-first UI com React</h1>
      <h2>Teste de Performance 03</h2>
      <div className="card">
        <div className="exercise_container">
          <a href="src\exercises\exercise01\index.html" className="exercise">
            Tarefa 01
          </a>
          <div className="exercise">Tarefa 02</div>
          <div className="exercise">Tarefa 03</div>
          <div className="exercise">Tarefa 04</div>

          <a className="exercise">Tarefa 05</a>
          <div className="exercise">Tarefa 06</div>
          <div className="exercise">Tarefa 07</div>
          <div className="exercise">Tarefa 08</div>

          <div className="exercise">Tarefa 09</div>
          <div className="exercise">Tarefa 10</div>
          <div className="exercise">Tarefa 11</div>
          <div className="exercise">Tarefa 12</div>

          <div className="exercise">Tarefa 13</div>
          <div className="exercise">Tarefa 14</div>
          <div className="exercise">Tarefa 15</div>
          <div className="exercise">Tarefa 16</div>
        </div>
      </div>
    </>
  );
}

export default App;
