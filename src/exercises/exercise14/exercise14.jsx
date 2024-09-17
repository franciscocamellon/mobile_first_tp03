import { useState } from "react";
import Title from "../../components/exercise_title/title";
import "./styles.css";

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris",
  },
  {
    question: "Who wrote 'Hamlet'?",
    options: ["Shakespeare", "Dickens", "Hemingway", "Tolkien"],
    answer: "Shakespeare",
  },
  // Adicione mais questões aqui (total de 10)
];

function Exercise14() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizEnd, setQuizEnd] = useState(false);

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setQuizEnd(true);
    }
  };
  return (
    <>
      <Title number={"Tarefa 14"} title={"App Quiz"} />

      <div className={`quiz-container ${quizEnd ? "quiz-end" : ""}`}>
        {!quizEnd ? (

          <div className="question-section">
            <h2>{questions[currentQuestion].question}</h2>
            <div className="options">
              {questions[currentQuestion].options.map((option) => (
                <button key={option} onClick={() => handleAnswer(option)}>
                  {option}
                </button>
              ))}
            </div>
          </div>
          
        ) : (
          <div className="result-section">
            <h2>Quiz Finished!</h2>
            <p>
              Your score: {score} / {questions.length}
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default Exercise14;
