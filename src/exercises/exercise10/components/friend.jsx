import styles from "./styles.module.css";

function Friend({ image, name, commonFriends }) {
  return (
    <div className={styles.friend}>
      <img src={image} alt={name} className={styles.friend_image} />
      <h4>{name}</h4>
      <p>{commonFriends} amigos em comum</p>
    </div>
  );
}

export default Friend;
