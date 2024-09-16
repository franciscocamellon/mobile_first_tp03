import styles from "./styles.module.css";

function ProductDetail() {
  return (
    <div className={styles.product_details}>
      <div className={styles.product_images}>
        <img
          src="src\assets\images\products\product-1.jpg"
          alt="Produto Principal"
          className={styles.main_image}
        />

        <div className={styles.thumbnail_gallery}>
          <img
            className={styles.thumbnail_img}
            src="src\assets\images\products\product-2.jpg"
            alt="Produto 1"
          />
          <img
            className={styles.thumbnail_img}
            src="src\assets\images\products\product-3.jpg"
            alt="Produto 2"
          />
          <img
            className={styles.thumbnail_img}
            src="src\assets\images\products\product-4.jpg"
            alt="Produto 3"
          />
        </div>
      </div>

      <div className={styles.product_info}>
        <h2 className={styles.product_title}>Cadeira de luxo</h2>
        <p className={styles.price}>R$ 199,90</p>
        <p className={styles.description}>
          Descrição breve sobre o produto, suas funcionalidades e benefícios.
          Este produto é ótimo para diferentes necessidades e se destaca pela
          sua qualidade.
        </p>

        <h3 className={styles.specifications_title}>Especificações</h3>
        <div
          style={{ display: "flex", marginBottom: "30px", marginTop: "10px" }}
        >
          <ul className={styles.specifications}>
            <li className={styles.specifications_li}>Cor: Preto</li>
            <li className={styles.specifications_li}>Tamanho: 30cm x 20cm</li>
          </ul>
          <ul className={styles.specifications}>
            <li className={styles.specifications_li}>Peso: 1,5kg</li>
            <li className={styles.specifications_li}>
              Material: Plástico resistente
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
