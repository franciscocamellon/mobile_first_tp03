import RelatedVideo from "./relatedVideo";
import styles from "./styles.module.css";

const relatedVideos = [
  {
    name: "Produto 1",
    price: "R$ 159,90",
    image: "src/assets/images/products/product-5.jpg",
  },
  {
    name: "Produto 2",
    price: "R$ 149,90",
    image: "src/assets/images/products/product-6.jpg",
  },
  {
    name: "Produto 3",
    price: "R$ 179,90",
    image: "src/assets/images/products/product-1.jpg",
  },
];

function VideoList() {
  return (
    <>
      <h3 className={styles.specifications_title}>Videos Relacionados</h3>
      <div className={styles.related_items}>
        {relatedVideos.map((product, index) => (
          <RelatedVideo
            key={index}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </>
  );
}

export default VideoList;
