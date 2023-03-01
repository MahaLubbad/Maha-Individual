import React ,{useState} from 'react';
import { questions } from './Data';
import './Quiz.css';
import snap1 from "./Snap1.png";



interface QuizProps { }

const Quiz: React.FC<QuizProps> = () => {
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (answer:any) => {
    if (answer === questions[currentQuestion].correct) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  
  return (
     
    <div className="quiz">
    {showScore ? (
      <div className="score-section">
        You scored {score} out of {questions.length}
      </div>
    ) : (
      <>
        <div className="question-section">
          <div className="question-count">
            <span>Question {currentQuestion + 1}</span>/{questions.length}
          </div>
          <div className="image">
              
       <img src={snap1} alt="code"/>
          </div>
          <div className="question-text">{questions[currentQuestion].question}</div>
        </div>
        <div className="answer-section">
          {questions[currentQuestion].answers.map((answer) => (
            <button className="btn" key={answer} onClick={() => handleAnswerButtonClick(answer)}>
              {answer}
            </button>
          ))}
        </div>
      </>
    )}
  </div>
);
}


export default Quiz;