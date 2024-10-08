import React from "react";
import Exercise05 from "../exercises/exercise05/exercise05";
import Exercise06 from "../exercises/exercise06/exercise06";
import Exercise07 from "../exercises/exercise07/exercise07";
import Exercise08 from "../exercises/exercise08/exercise08";
import Exercise09 from "../exercises/exercise09/exercise09";
import Exercise10 from "../exercises/exercise10/exercise10";
import Exercise11 from "../exercises/exercise11/exercise11";
import Exercise12 from "../exercises/exercise12/exercise12";
import Exercise13 from "../exercises/exercise13/exercise13";
import Exercise14 from "../exercises/exercise14/exercise14";
import Exercise15 from "../exercises/exercise15/exercise15";
import Exercise16 from "../exercises/exercise16/exercise16";
import styles from "./styles.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Mobile-first UI com React</h1>
        <h2>Teste de Performance 03</h2>
      </div>
      <div className={styles.exercise_container}>
        <a
          href="src\exercises\exercise01\index.html"
          className={styles.exercise_item}
        >
          Tarefa 01
        </a>
        <a
          href="src\exercises\exercise02\index.html"
          className={styles.exercise_item}
        >
          Tarefa 02
        </a>
        <a
          href="src\exercises\exercise03\index.html"
          className={styles.exercise_item}
        >
          Tarefa 03
        </a>
        <a
          href="src\exercises\exercise04\index.html"
          className={styles.exercise_item}
        >
          Tarefa 04
        </a>
      </div>
      <Exercise05 />
      <Exercise06 />
      <Exercise07 />
      <Exercise08 />
      <Exercise09 />
      <Exercise10 />
      <Exercise11 />
      <Exercise12 />
      <Exercise13 />
      <Exercise14 />
      <Exercise15 />
      <Exercise16 />
    </div>
  );
}

export default Home;
