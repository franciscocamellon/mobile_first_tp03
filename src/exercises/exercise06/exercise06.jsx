import Title from "../../components/exercise_title/title";
import "./styles.css";

function Exercise06() {
  return (
    <>
      <Title
        number={"Tarefa 06"}
        title={"Componente React com Estilização por Class"}
      />

      <div className="div_container">
        <h2 className="h2">Desenvolvimento Front-End com Frameworks</h2>
        <h3 className="h3">Mobile-First UI com React</h3>
        <h4 className="h4">Conceitos de Usabilidade</h4>
        <p className="p">
          Usabilidade é um conceito fundamental no desenvolvimento de
          interfaces. Ela define o quão fácil e intuitivo é para um usuário
          interagir com uma aplicação ou site.
        </p>
        <p className="p">
          Um sistema com boa usabilidade deve ser simples de navegar, claro nas
          suas funcionalidades e capaz de cumprir as expectativas do usuário sem
          exigir um grande esforço cognitivo.
        </p>
        <p className="p">
          A diferença entre uma interface com boa usabilidade e uma com má
          usabilidade está na facilidade com que o usuário consegue realizar
          suas tarefas de forma eficiente e satisfatória.
        </p>
      </div>
    </>
  );
}

export default Exercise06;
