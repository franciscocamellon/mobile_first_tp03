import Friend from "./friend";
import styles from "./styles.module.css";

function FriendList() {
  const friends = [
    {
      image: "https://via.placeholder.com/100",
      name: "Maria",
      commonFriends: 5,
    },
  ];

  return (
    <div className={styles.friends_list}>
      <h3>Amigos</h3>
      {friends.map((friend, index) => (
        <Friend key={index} {...friend} />
      ))}
    </div>
  );
}

export default FriendList;
