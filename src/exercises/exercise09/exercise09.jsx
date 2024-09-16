import Title from "../../components/exercise_title/title";
import Menu from "./components/menu/menu";
import Body from "./components/body/body";
import styles from "./styles.module.css";

function Exercise09() {
  return (
    <>
      <Title
        number={"Tarefa 09"}
        title={"Componente Menu Responsivo em React com Estilização por Class"}
      />

      <Menu />
      <Body />
      <footer></footer>
    </>
  );
}

export default Exercise09;
