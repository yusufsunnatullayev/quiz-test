import React from "react";
import { useQuery } from "react-query";
import { getUser } from "../api/profileApi";

const Profile = () => {
  const {
    isError,
    isLoading,
    error,
    data: currentUser,
  } = useQuery("currentUser", getUser);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  console.log(currentUser);

  return <div>profile</div>;
};

export default Profile;
