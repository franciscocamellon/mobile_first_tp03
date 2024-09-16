import ProductComment from "./comment";
import styles from "./styles.module.css";

const comments = [
  {
    user: "src/assets/images/users/avatar-2.jpg",
    name: "João",
    date: "(12/08/2024)",
    description:
      "Produto excelente, superou minhas expectativas. Recomendo a todos!",
  },
  {
    user: "src/assets/images/users/avatar-9.jpg",
    name: "Maria",
    date: "(10/08/2024)",
    description:
      "Muito bom, mas poderia ter mais opções de cores. Ainda assim, ótimo custo-benefício.",
  },
  {
    user: "src/assets/images/users/avatar-3.jpg",
    name: "Carlos",
    date: "(05/08/2024)",
    description:
      "Produto de qualidade, entrega rápida e preço justo. Voltaria a comprar.",
  },
];

function CommentList() {
  return (
    <section className={styles.user_comments}>
      <h3 className={styles.specifications_title}>Comentários de Usuários</h3>
      <div>
        {comments.map((comment, index) => (
          <ProductComment
            key={index}
            user={comment.user}
            name={comment.name}
            date={comment.date}
            description={comment.description}
          />
        ))}
      </div>
    </section>
  );
}

export default CommentList;
