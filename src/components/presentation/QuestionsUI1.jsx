import React from "react";
import QuestionsUI2 from "./QuestionsUI2";

const QuestionsUI1 = ({ datas }) => {
  return (
    <>
      {datas &&
        datas.map((item, idx) => <QuestionsUI2 key={idx} quiz={item} />)}
    </>
  );
};

export default QuestionsUI1;
