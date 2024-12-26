import React, { useEffect, useState } from "react";
import SubjectsUI from "../presentation/SubjectsUI";
import { useQuery } from "react-query";
import { getSubjects } from "../../api/subjectsApi";

const SubjectsAPI = () => {
  const [subjects, setSubjects] = useState([]);

  const { isLoading, isError, error, data } = useQuery("subjects", getSubjects);

  useEffect(() => {
    if (data) {
      setSubjects(data);
    }
  }, [data]);

  return <SubjectsUI subjects={subjects} isLoading={isLoading} />;
};

export default SubjectsAPI;
