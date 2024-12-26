import React from "react";
import { Link } from "react-router-dom";
import QuestionsAPI from "../components/containers/QuestionsAPI";
import SubjectsAPI from "../components/containers/SubjectsAPI";
import useFilter from "../hooks/useFilter";

const Home = () => {
  const sortButtons = [
    {
      id: 1,
      name: "random",
      label: "Random",
    },
    {
      id: 2,
      name: "easy",
      label: "Oson",
    },
    {
      id: 3,
      name: "medium",
      label: "O'rta",
    },
    {
      id: 4,
      name: "hard",
      label: "Qiyin",
    },
  ];

  const levelHandler = useFilter((state) => state.setLevel);
  const level = useFilter((state) => state.selectedLevel);

  const handleSort = (level) => {
    levelHandler(level);
  };

  return (
    <div className="py-28 px-[2%] md:px-[10%] flex flex-col gap-20 w-full min-h-screen items-center bg-gray-50 dark:bg-neutral-900">
      <div className="w-full md:w-3/4 lg:w-1/2 flex flex-col gap-5 items-center">
        <h1 className="text-center text-lg md:text-2xl font-semibold dark:text-white">
          Bu sayt orqali Universitet fanlaridan turli xil savollarni
          o'rganishingiz va test topshirishingiz mumkin! 🙂
        </h1>
        <Link
          to={"/test"}
          className="py-1 px-4 rounded-md bg-transparent border border-purple-800 text-purple-800 dark:border-purple-600 dark:text-purple-600 dark:hover:text-white text-base md:text-lg font-semibold hover:bg-purple-800 hover:text-white duration-200"
        >
          Quiz Test
        </Link>
      </div>
      {/* Questions Section */}
      <div className="p-5 rounded-md bg-white dark:bg-neutral-800 shadow w-full md:w-3/4 flex flex-col items-start gap-5">
        {/* Header Section */}
        <div className="w-full flex flex-col lg:flex-row items-start gap-5 md:items-center justify-between">
          <div className="flex items-center justify-start gap-3">
            {sortButtons.map((btn) => (
              <button
                onClick={() => handleSort(btn.name)}
                className={`py-1 px-4 rounded-md cursor-pointer text-sm md:text-base font-semibold ${
                  level === btn.name
                    ? "bg-purple-800 text-white border dark:text-white"
                    : "bg-transparent border"
                } border-purple-800 text-purple-800 hover:bg-purple-800 dark:border-purple-600 dark:text-purple-600 dark:hover:text-white hover:text-white duration-200`}
                key={btn.id}
              >
                {btn.label}
              </button>
            ))}
          </div>
          <SubjectsAPI />
        </div>
        {/* Questions Section */}
        <QuestionsAPI />
      </div>
    </div>
  );
};

export default Home;
