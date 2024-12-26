import React, { useState } from "react";

const Question = ({ question, options = [] }) => {
  const [isOpen, setIsOpen] = useState(false);

  const answer = options.find((option) => option.is_true === true);

  return (
    <div className="border-b border-purple-800 w-full">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-3 px-4 text-left dark:bg-purple-950 bg-purple-50 hover:bg-purple-100 rounded-t-md"
      >
        <span className="font-medium text-sm md:text-base text-gray-700 dark:text-white">
          {question}
        </span>
        <svg
          className={`w-5 h-5 transform transition-transform duration-300 dark:text-white ${
            isOpen ? "rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Collapsible Content */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="p-4 dark:text-gray-100 text-sm md:text-base">
          {answer ? (
            <span>{answer.title}</span>
          ) : (
            <span className="text-red-500">No correct answer provided.</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Question;
