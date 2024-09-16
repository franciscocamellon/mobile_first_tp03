import Title from "../../components/exercise_title/title";
import Header from "./components/header";
import VideoDetail from "./components/videoDetail";
import VideoList from "./components/videoList";
import CommentList from "./components/commentList";
import styles from "./styles.module.css";

function Exercise12() {
  return (
    <>
      <Title
        number={"Tarefa 12"}
        title={"Página Responsiva Plataforma de Vídeos"}
      />

      <div className="exercise_container">
        <Header />
        <div className="container">
          <VideoDetail />
          <section className="related_products">
            <VideoList />
          </section>
          <CommentList />
        </div>
      </div>
    </>
  );
}

export default Exercise12;
