import { IonContent,IonPage,IonButton,IonCard } from '@ionic/react';
import React ,{useState} from 'react';
import { questions } from '../components/Questions';
import {data} from '../components/Data';
import {Snippet} from '../components/Snippet';
import './Quiz.css';



const Quiz: React.FC = () => {
  
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

  const restartGame = () => {
    setShowScore(false);
    setScore(0);
    setCurrentQuestion(0);
  }


  return (
  <IonPage>
    <IonContent>    
    <div className="quiz">
    {showScore ? (
      <div className="score-section">
     You scored {score} out of {questions.length}

     <IonButton color="tertiary"  onClick={() => restartGame()}>Restart Quiz</IonButton>
      </div>
       
    ) : (
      <>
        <div className="question-section">
          <div className="question-count">
            <span> Question {currentQuestion + 1}</span>/{questions.length}
          </div>
            <IonCard >
            <Snippet currentData ={data[currentQuestion]} />
            </IonCard>
          <div className="question-text">{questions[currentQuestion].question}</div>
        </div>

        <div className="answer-section">
          {questions[currentQuestion].answers.map((answer) => (
            <IonButton className='btn' expand="block" color="tertiary"
             key={answer} onClick={() => handleAnswerButtonClick(answer)}>
              {answer}
            </IonButton>
          ))}
        </div>
      
      </>
    )}
  </div>

    </IonContent>
</IonPage>

);
}

export default Quiz;