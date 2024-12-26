import React from "react";
import { useQuery } from "react-query";
import { getQuestions } from "../../api/questionsApi";
import QuestionsUI1 from "../presentation/QuestionsUI1";
import Loader from "../presentation/loader/Loader";
import useFilter from "../../hooks/useFilter";

const QuestionsAPI = () => {
  const subject = useFilter((state) => state.selectedSubject);
  const level = useFilter((state) => state.selectedLevel);

  const {
    isLoading,
    isError,
    error,
    data: questions,
  } = useQuery(
    ["questions", subject, level],
    () => getQuestions(subject, level),
    {
      enabled: !!subject,
    }
  );

  if (isLoading)
    return (
      <div className="w-full p-20 flex items-center justify-center">
        <Loader />
      </div>
    );
  if (isError) return <div>Error: {error.message}</div>;

  return <QuestionsUI1 datas={questions || []} />;
};

export default QuestionsAPI;
