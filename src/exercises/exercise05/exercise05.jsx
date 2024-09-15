import Title from "../../components/exercise_title/title";
import "./styles.css";

function Exercise05() {
  return (
    <>
      <Title
        number={"Tarefa 05"}
        title={"Componente React com Estilização por Tags"}
      />
      <div className="div_container">
        <h2>Desenvolvimento Front-End com Frameworks</h2>
        <h3>Mobile-First UI com React</h3>
        <h4>Diferença entre responsividade e adaptabilidade</h4>
        <p>
          A responsividade refere-se à capacidade de um layout se ajustar
          automaticamente a diferentes tamanhos de tela. É comumente utilizado
          em interfaces mobile-first, onde o design começa com dispositivos
          móveis e se expande para dispositivos maiores.
        </p>
        <p>
          A adaptabilidade, por outro lado, envolve o ajuste de layouts com base
          no dispositivo em que está sendo visualizado. Isso pode incluir
          diferentes folhas de estilo, scripts ou até mesmo diferentes versões
          do site que são mostradas conforme o tipo de dispositivo detectado.
        </p>
        <p>
          A principal diferença entre os dois conceitos é que, enquanto o design
          responsivo é fluido e reage a qualquer tamanho de tela, o design
          adaptativo oferece layouts específicos dependendo do dispositivo. Em
          termos simples, o responsivo é sobre flexibilidade, e o adaptativo é
          sobre personalização.
        </p>
      </div>
    </>
  );
}

export default Exercise05;
