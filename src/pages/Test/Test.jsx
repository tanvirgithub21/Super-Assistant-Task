import React, { useContext } from "react";
import { questionStore } from "../../State/StateProvider";

import { useState } from "react";

const Test = () => {
  const { questionData } = useContext(questionStore);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questionData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div>
      <div className="container mx-auto">
        <h1>Complete MERN Stack Developer Quiz</h1>
        <div>
          <div className="app">
            {showScore ? (
              <div className="score-section">
                You scored {score} out of {questionData.length}
              </div>
            ) : (
              <>
                <div className="question-section">
                  <div className="question-count">
                    <span>Question {currentQuestion + 1}</span>/
                    {questionData.length}
                  </div>
                  <div className="question-text">
                    {questionData[currentQuestion].question_title}
                  </div>
                </div>
                <div className="answer-section">
                  {questionData[currentQuestion].answerOptions.map(
                    (answerOption) => (
                      <button
                        onClick={() =>
                          handleAnswerOptionClick(answerOption.isCorrect)
                        }
                      >
                        {answerOption.answerText}
                      </button>
                    )
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
