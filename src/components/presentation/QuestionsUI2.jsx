import React from "react";
import Question from "./Question";
import Loader from "./loader/Loader";

const QuestionsUI2 = ({ quiz }) => {
  return (
    <div className="w-full flex flex-col items-start gap-3">
      {quiz ? (
        quiz.questions.map((item, idx) => <Question key={idx} {...item} />)
      ) : (
        <div className="w-full flex items-center justify-center p-20">
          <Loader />
        </div>
      )}
    </div>
  );
};

export default QuestionsUI2;
