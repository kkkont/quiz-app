import React, { useState, useEffect } from "react";

function QuizPage({ questions, onFinish }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (selectedAnswer) => {
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;

    if (selectedAnswer === correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      onFinish(score + (selectedAnswer === correctAnswer ? 1 : 0));
    }
  };

  useEffect(() => {
    console.log("Current score:", score); // This will log the updated score after each answer
  }, [score]);

  return (
    <div>
      <h2>{questions[currentQuestionIndex].question}</h2>
      <div>
        {questions[currentQuestionIndex].options.map((option, index) => (
          <button key={index} onClick={() => handleAnswer(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuizPage;
