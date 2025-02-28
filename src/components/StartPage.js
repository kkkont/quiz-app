import React from "react";
import image from "./../assets/image.png";
function StartPage({ onStart, totalQuestions }) {
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
            <h1 className="text-[14px] text-black font-semibold text-center leading-[1.14] mb-4">
              Kui hästi tunned Eesti statistikat?
            </h1>
            <p className="text-[12px] text-black  text-center leading-[1.14] mb-4 text-justify">
              Viktoriin koosneb <b>{totalQuestions} </b>küsimustest põhinedes
              Eesti statistika andmetele.
            </p>
            <p className="text-[12px] text-black  text-center leading-[1.14] mb-8 text-justify">
              Kõik küsimused on valikvastustega.
            </p>
            <button
              onClick={onStart}
              className="inline-flex items-center justify-center bg-black text-white font-semibold py-2 px-4 border-2 border-black hover:bg-white hover:text-black transition-all duration-200"
            >
              Alusta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StartPage;
