import React from "react";

function FinishPage({ score, totalQuestions }) {
  return (
    <div>
      <h2>
        Your Score: {score} / {totalQuestions}
      </h2>
      {score === totalQuestions ? (
        <p>Excellent! You got all the answers correct!</p>
      ) : score > totalQuestions / 2 ? (
        <p>Good job! But there's room for improvement.</p>
      ) : (
        <p>Better luck next time!</p>
      )}
    </div>
  );
}

export default FinishPage;
