import React, { useState } from "react";
import { questions } from "../database";

const Test = () => {
  const subjects = [...new Set(questions.map((item) => item.subject))];
  const [count, setCount] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const handleOptionSelect = (questionId, option) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: option,
    }));
  };

  const countIncrement = () => {
    if (count >= questions.length - 1) {
      return;
    }
    setCount(count + 1);
  };

  const countDecrement = () => {
    if (count === 0) {
      return;
    }
    setCount(count - 1);
  };

  const handleSubmit = () => {
    console.log("User Answers:", selectedAnswers);
    alert("Test submitted successfully!");
  };

  const current = questions[count];

  return (
    <section className="w-full px-[2%] md:px-0  flex items-center bg-gray-50 dark:bg-neutral-900 justify-center py-28 h-[100vh]">
      <div className="p-5 rounded-md shadow bg-white dark:bg-neutral-800 w-[600px] flex flex-col items-start gap-5">
        <h1 className="text-2xl md:text-3xl dark:text-white font-bold self-center">
          Test
        </h1>
        <div className="flex items-center justify-center gap-3 self-end">
          <label
            className="text-base font-semibold dark:text-white"
            htmlFor="subject"
          >
            Fan:
          </label>
          <select
            className="cursor-pointer p-1 md:p-2 rounded-md border border-purple-800 outline-none dark:bg-transparent dark:text-white"
            name="subject"
            id="subject"
          >
            {subjects.map((subject, idx) => (
              <option
                className="cursor-pointer dark:bg-neutral-800"
                key={idx}
                value={subject}
              >
                {subject}
              </option>
            ))}
          </select>
        </div>
        <div className="w-full flex flex-col items-start gap-5 mt-5">
          <h1 className="text-base md:text-lg font-semibold dark:text-white">
            {current.question}
          </h1>
          <div className="w-full flex flex-col items-start gap-3">
            {current.options.map((option, idx) => (
              <div className="flex items-center justify-center gap-2" key={idx}>
                <input
                  type="radio"
                  id={`option-${idx}`}
                  name={`question-${current.id}`}
                  value={option}
                  className="cursor-pointer"
                  checked={selectedAnswers[current.id] === option}
                  onChange={() => handleOptionSelect(current.id, option)}
                />
                <label
                  className="dark:text-white cursor-pointer text-sm md:text-base"
                  htmlFor={`option-${idx}`}
                >
                  {option}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-start gap-3 mt-5">
          {count > 0 && (
            <button
              onClick={countDecrement}
              className="py-1 px-3 md:py-2 md:px-4 text-sm rounded-md md:text-base font-semibold text-purple-800 bg-transparent border border-purple-800 dark:text-purple-600 dark:border-purple-600 hover:bg-purple-600 dark:hover:text-white hover:text-white duration-200"
            >
              Orqaga
            </button>
          )}
          {count < questions.length - 1 && (
            <button
              onClick={countIncrement}
              className="py-1 px-3 md:py-2 md:px-4 text-sm rounded-md md:text-base font-semibold text-white bg-purple-800 hover:bg-purple-600 duration-200"
            >
              Keyingisi
            </button>
          )}
          {count === questions.length - 1 && (
            <button
              onClick={handleSubmit}
              className="py-1 px-3 md:py-2 md:px-4 text-sm rounded-md md:text-base font-semibold text-white bg-green-600 hover:bg-green-400 duration-200"
            >
              Tekshirish
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Test;
