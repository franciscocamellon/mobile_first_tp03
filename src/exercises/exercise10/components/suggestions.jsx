import Friend from "./friend";
import styles from "./styles.module.css";

function Suggestions() {
  const suggestions = [
    {
      image: "https://via.placeholder.com/100",
      name: "Pedro",
      commonFriends: 1,
    },
  ];

  return (
    <div className={styles.suggestions}>
      <h3>Sugestões de amizade</h3>
      {suggestions.map((suggestion, index) => (
        <Friend key={index} {...suggestion} />
      ))}
    </div>
  );
}

export default Suggestions;
