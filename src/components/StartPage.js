import React from "react";

function StartPage({ onStart }) {
  return (
    <div>
      <h1>Welcome to the Quiz!</h1>
      <button onClick={onStart}>Start Quiz</button>
    </div>
  );
}

export default StartPage;
