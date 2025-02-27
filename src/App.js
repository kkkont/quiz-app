import React, { useState } from "react";
import StartPage from "./components/StartPage"; // Import the StartPage component
import QuizPage from "./components/QuizPage"; // Import the QuizPage component
import FinishPage from "./components/FinishPage"; // Import the FinishPage component
import questions from "./assets/questions.json"; // Import the questions from the JSON file

import "./App.css";

function App() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [score, setScore] = useState(0);

  const startQuiz = () => {
    setQuizStarted(true); // Starts the quiz
  };

  const finishQuiz = (finalScore) => {
    setScore(finalScore); // Sets the final score
    setQuizFinished(true); // Marks the quiz as finished
  };

  return (
    <div className="App">
      {/* Show StartPage if quiz hasn't started */}
      {!quizStarted && !quizFinished && <StartPage onStart={startQuiz} />}

      {/* Show QuizPage if quiz has started */}
      {quizStarted && !quizFinished && (
        <QuizPage questions={questions} onFinish={finishQuiz} />
      )}

      {/* Show FinishPage if quiz is finished */}
      {quizFinished && (
        <FinishPage score={score} totalQuestions={questions.length} />
      )}
    </div>
  );
}

export default App;
