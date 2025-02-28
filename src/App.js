import React, { useState } from "react";
import StartPage from "./components/StartPage";
import QuizPage from "./components/QuizPage";
import FinishPage from "./components/FinishPage";
import questions from "./assets/questions.json";
import pattern from "./assets/pattern.svg";

import "./App.css";

function App() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [score, setScore] = useState(0);

  const startQuiz = () => {
    setScore(0);
    setQuizFinished(false);
    setQuizStarted(true);
  };

  const finishQuiz = (finalScore) => {
    setScore(finalScore);
    setQuizFinished(true);
  };

  return (
    <div className="h-screen " style={{ backgroundImage: `url(${pattern})` }}>
      {/* Show StartPage if quiz hasn't started */}
      {!quizStarted && !quizFinished && (
        <StartPage onStart={startQuiz} totalQuestions={questions.length} />
      )}

      {/* Show QuizPage if quiz has started */}
      {quizStarted && !quizFinished && (
        <QuizPage questions={questions} onFinish={finishQuiz} />
      )}

      {/* Show FinishPage if quiz is finished */}
      {quizFinished && (
        <FinishPage
          score={score}
          totalQuestions={questions.length}
          onStart={startQuiz}
        />
      )}
    </div>
  );
}

export default App;
