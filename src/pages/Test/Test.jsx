import React, { useContext } from "react";
import { questionStore } from "../../State/StateProvider";
import "./Test.css";

import { useState } from "react";

const Test = () => {
  const { questionData } = useContext(questionStore);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const [totalPoint, setTotalPoint] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect, point) => {
    setTotalPoint(parseInt(totalPoint) + parseInt(point));
    if (isCorrect) {
      setScore(parseInt(score) + parseInt(point));
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questionData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className="test ">
      <div className="w-full h-full dark:bg-[#060606f6]">
        <div className="container mx-auto">
          <h1 className="text-lg sm:text-xl md:text-3xl font-semibold text-center py-5 md:py-10 dark:text-white ">
            Complete MERN Stack Developer Quiz
          </h1>
          <div>
            <div className="bg-gray-200 dark:bg-gray-800 max-w-[40rem] mx-auto p-3 rounded">
              {showScore ? (
                <div>
                  <h3>
                    You scored {score} out of {totalPoint}
                  </h3>
                </div>
              ) : (
                <>
                  <div>
                    <span className=" font-semibold">
                      Question {currentQuestion + 1}
                    </span>
                    /{questionData.length}
                  </div>
                  <div>
                    <div className="text-xl capitalize font-semibold mb-6 ">
                      {"Q" +
                        (currentQuestion + 1) +
                        " " +
                        questionData[currentQuestion].question_title}
                    </div>
                  </div>
                  <div>
                    {questionData[currentQuestion].answerOptions.map(
                      (answerOption) => (
                        <p
                          onClick={() => {
                            handleAnswerOptionClick(
                              answerOption.isCorrect,
                              questionData[currentQuestion].point
                            );
                          }}
                          className="px-4 py-2 my-2 w-full rounded capitalize bg-gray-700 text-white hover:bg-green-600 ease-out duration-150 cursor-pointer"
                        >
                          {answerOption.answerText}
                        </p>
                      )
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
