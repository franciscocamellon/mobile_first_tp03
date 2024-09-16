import styles from "./styles.module.css";

function ProductComment({ user, name, date, description }) {
  return (
    <div className={styles.comment_container}>
      <img className={styles.comment_img} src={user} />
      <div className={styles.comment}>
        <p>
          <strong>{name}</strong> <em>{date}</em>
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ProductComment;
