import styles from "./styles.module.css";

function VideoDetail() {
  return (
    <div>
      <h2 className={styles.product_title}>Título do vídeo</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p>Autor: Jon Doe</p>
        <div className={styles.thumbnail_gallery}>
          <button>Curtir</button>
          <button>Compartilhar</button>
          <button>Salvar</button>
          <button>Denunciar</button>
        </div>
      </div>
      <div className={styles.product_details}>
        <div className={styles.product_images}>
          <video controls className={styles.main_image}>
            <source src="src\assets\images\explore.webm" type="video/mp4" />
          </video>
        </div>

        <div className={styles.product_info}>
          <p className={styles.description}>
            Esta é a descrição do vídeo, que apresenta informações importantes
            sobre o conteúdo apresentado. O vídeo trata de temas relevantes e
            oferece uma ótima experiência ao espectador.
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoDetail;
