import styles from "./styles.module.css";

function InfnetCard() {
  return (
    <>
      <div className={styles.card_container}>
        <div>
          <img
            className={styles.card_image}
            src="https://ead.infnet.edu.br/wp-content/uploads/sites/14/2024/04/MG_6638-scaled-e1711123946770-comp.jpg"
          ></img>
        </div>
        <div className={styles.card_content}>
          <h4 className={styles.card_title}>Instituto Infnet</h4>
          <p className={styles.card_description}>
            <span>
              O Infnet é um Instituto de Tecnologia fundado em 1994 que
              tornou-se referência na formação de profissionais em Tecnologia da
              Informação, Negócios e para a Indústria Criativa.
            </span>
            <br></br>
            <span>
              Rua São José, 90 - Centro, Rio de Janeiro -RJ, 20010-020
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default InfnetCard;
