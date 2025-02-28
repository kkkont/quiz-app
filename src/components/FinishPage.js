import React from "react";
import image from "./../assets/image.png";

function FinishPage({ score, totalQuestions, onStart }) {
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
        <div className="flex justify-center items-center h-full ">
          <div className="bg-white p-8 h-[40vh] w-[40vh] flex flex-col justify-center items-center m-14 ">
            <div className="flex flex-col items-center justify-center min-h-screen text-center">
              <h1 className="text-[14px] text-black font-semibold text-center leading-[1.14] mb-4">
                Sinu tulemus
              </h1>

              <div
                className={`radial-progress ${
                  score / totalQuestions >= 0.7
                    ? "text-success"
                    : score / totalQuestions > 0.3
                    ? "text-warning"
                    : "text-error"
                }`}
                style={{
                  "--value": Math.round((score / totalQuestions) * 100),
                }}
                role="progressbar"
              >
                <p className="text-[16px] text-black font-semibold text-center">
                  {Math.round((score / totalQuestions) * 100)}%
                </p>
              </div>

              {score === totalQuestions ? (
                <p className="text-[14px] text-black font-semibold text-center mt-4">
                  Suurepärane! Sa vastasid kõik küsimused õigesti!
                </p>
              ) : score > totalQuestions / 2 ? (
                <p className="text-[14px] text-black font-semibold text-center mt-4">
                  Hea töö, kuid arenguruumi on veel!
                </p>
              ) : (
                <p className="text-[14px] text-black font-semibold text-center mt-4">
                  Proovi järgmine kord paremini!
                </p>
              )}
              <button
                onClick={onStart}
                className="inline-flex items-center justify-center bg-black text-white font-semibold py-2 px-4 border-2 border-black hover:bg-white hover:text-black transition-all duration-200 mt-6"
              >
                Proovi uuesti
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FinishPage;
