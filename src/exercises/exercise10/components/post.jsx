import styles from "./styles.module.css";

function Post({ image, title, text, date, author, likes, shares, comments }) {
  return (
    <div className={styles.post}>
      <img src={image} alt={title} className={styles.post_image} />
      <h2>{title}</h2>
      <p>{text}</p>
      <small>
        {date} by {author}
      </small>
      <div className={styles.post_info}>
        <span>{likes} curtidas</span>
        <span>{shares} compartilhamentos</span>
      </div>
      <div className={styles.comments}>
        <h4>Comentários:</h4>
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Post;
