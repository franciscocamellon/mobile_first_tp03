import styles from "./styles.module.css";

function RelatedProduct({ name, price, image }) {
  return (
    <div className={styles.related_product}>
      <img src={image} alt={`Produto ${name}`} />
      <p>{name}</p>
      <p>{price}</p>
    </div>
  );
}

export default RelatedProduct;
