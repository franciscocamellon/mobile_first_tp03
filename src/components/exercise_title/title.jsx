import styles from "./styles.module.css";

function Title(props) {
  return (
    <div className={styles.title_container}>
      <div className={styles.exercise}>{props.number}</div>
      <div className={styles.title}>{props.title}</div>
    </div>
  );
}

export default Title;
