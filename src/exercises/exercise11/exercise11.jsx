import Title from "../../components/exercise_title/title";
import Header from "./components/header";
import ProductDetail from "./components/productDetail";
import ProductList from "./components/productList";
import CommentList from "./components/commentList";
import styles from "./styles.module.css";

function Exercise11() {
  return (
    <>
      <Title
        number={"Tarefa 11"}
        title={"Página Responsiva Detalhes do Produto"}
      />
      <div className="exercise_container">
        <Header />
        <div className="container">
          <ProductDetail />
          <section className="related_products">
            <ProductList />
          </section>
          <CommentList />
        </div>
      </div>
    </>
  );
}

export default Exercise11;
