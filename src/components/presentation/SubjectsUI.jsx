import React, { useState } from "react";
import useFilter from "../../hooks/useFilter";

const SubjectsUI = ({ subjects, isLoading }) => {
  const [val, setVal] = useState("");

  const subjectHandler = useFilter((state) => state.setSubject);

  const handleChangeSubject = (e) => {
    const newValue = e.target.value;
    setVal(newValue);
    subjectHandler(newValue);
  };

  return (
    <div className="flex items-center justify-center gap-3">
      {!isLoading && (
        <>
          <label
            className="text-base font-semibold dark:text-white"
            htmlFor="subject"
          >
            Fan:
          </label>
          <select
            onChange={handleChangeSubject}
            value={val}
            className="cursor-pointer p-1 md:p-2 rounded-md border border-purple-800 outline-none dark:bg-transparent dark:text-white"
            name="subject"
            id="subject"
          >
            {subjects &&
              subjects.map((subject, idx) => (
                <option
                  className="cursor-pointer dark:bg-neutral-800"
                  key={idx}
                  value={subject.name}
                >
                  {subject.name}
                </option>
              ))}
          </select>
        </>
      )}
    </div>
  );
};

export default SubjectsUI;
