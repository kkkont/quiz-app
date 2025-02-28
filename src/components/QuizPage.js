import React, { useState } from "react";
import image from "./../assets/image.png";
import { FaAngleRight } from "react-icons/fa6";

function QuizPage({ questions, onFinish }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);

  const handleAnswer = (selectedAnswer) => {
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;
    const isCorrect = selectedAnswer === correctAnswer;

    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }

    setIsAnswerCorrect(isCorrect);
    setIsAnswerVisible(true);

    setTimeout(() => {
      setIsAnswerVisible(false);
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        onFinish(score + (isCorrect ? 1 : 0));
      }
    }, 1500);
  };

  return (
    <div>
      <div className="h-[15vh]"></div>
      <div
        className="w-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${image})`,
          minHeight: "40vh",
          height: "auto",
        }}
      >
        <div className="flex justify-center items-center h-full">
          <div className="bg-white p-8 h-auto w-auto flex flex-col m-14">
            <h1
              className={`text-[18px] text-black font-semibold text-center leading-[1.14] mb-8 `}
            >
              {questions[currentQuestionIndex].question}
            </h1>
            <div className="flex flex-col space-y-3">
              {questions[currentQuestionIndex].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className="text-black group flex items-center space-x-2 p-2"
                >
                  <span
                    className={`flex items-center justify-center text-black bg-white border-2 border-black rounded-full w-6 h-6 text-sm font-normal transition-all duration-200 ${
                      isAnswerVisible
                        ? isAnswerCorrect
                          ? "bg-green-500 text-white border-green-500"
                          : "bg-red-500 text-white border-red-500"
                        : "group-hover:bg-black group-hover:text-white"
                    }`}
                  >
                    <FaAngleRight
                      className={`${
                        isAnswerVisible
                          ? isAnswerCorrect
                            ? "text-white"
                            : "text-white"
                          : "text-black group-hover:text-white "
                      }`}
                    />
                  </span>

                  <span
                    className={`${
                      isAnswerVisible
                        ? isAnswerCorrect
                          ? "text-green-500"
                          : "text-red-500"
                        : ""
                    }`}
                  >
                    {option}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizPage;
