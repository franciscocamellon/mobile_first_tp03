import Title from "../../components/exercise_title/title";
import Header from "./components/header";
import Menu from "./components/menu";
import Feed from "./components/feed";
import FriendList from "./components/friendList";
import Suggestions from "./components/suggestions";
import styles from "./styles.module.css";

function Exercise10() {
  return (
    <>
      <Title
        number={"Tarefa 10"}
        title={"Página de rede social Componentizada com React"}
      />

      <Header />
      <Menu />
      <Feed />
      <FriendList />
      <Suggestions />
    </>
  );
}

export default Exercise10;
