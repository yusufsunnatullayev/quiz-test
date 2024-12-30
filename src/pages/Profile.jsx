import React, { useState } from "react";
import { ImUser } from "react-icons/im";
import { useQuery } from "react-query";
import { getUser, updateUser } from "../api/profileApi";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const {
    data: userData,
    isLoading,
    isError,
    error,
  } = useQuery(["getUser"], getUser);

  const updateUserHandler = useMutation(updateUser, {
    onSuccess: () => {
      toast.success("Sizning akkauntingiz muvaffaqiyatli yangilandi!");
      navigate("/");
    },
    onError: () => {
      toast.error("Xatolik yuz berdi!");
    },
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const updateHandler = async (e) => {
    e.preventDefault();

    const username = e.target.username.value.trim();
    const education = e.target.education.value.trim();

    if (!username || !education) {
      alert("Please fill out all fields!");
      return;
    }

    const formData = new FormData();
    formData.append("username", username);
    formData.append("education", education);
    if (image) {
      formData.append("image", image);
    }

    // Debug form data
    for (let [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }

    updateUserHandler.mutate(formData);
  };

  if (isLoading) return <div>Loading user data...</div>;
  if (isError) return <div>Error: {error.message || "Unknown error"}</div>;

  return (
    <div className="w-full h-screen mx-auto flex flex-col">
      <div className="w-full lg:h-1/2 h-[55%] bg-gray-200"></div>
      <div className="lg:w-1/2 w-full px-[2%] md:px-0 mx-auto h-[500px] absolute top-[20%] left-[50%] transform -translate-x-1/2">
        <div className="flex flex-col">
          <h1 className="lg:text-4xl font-semibold text-2xl">
            Profil sozlamalari
          </h1>
          <h2 className="text-gray-500 lg:text-md text-xs">
            Ismingiz va boshqa narsalar kiritishiz mumkin
          </h2>
        </div>
        <div className="flex justify-between mt-2 rounded-lg bg-white shadow-2xl pb-5">
          <form
            onSubmit={updateHandler}
            className="w-full lg:px-14 px-5 pt-5 flex flex-col gap-y-3"
          >
            <div className="flex flex-col items-start gap-y-1">
              <label className="lg:text-lg text-sm font-semibold">
                Username
              </label>
              <input
                className="w-full lg:p-1.5 p-1 outline-none border-2 border-purple-500 rounded-md pl-3"
                type="text"
                name="username"
                defaultValue={userData?.username}
              />
            </div>
            <div className="flex flex-col items-start gap-y-1">
              <label className="lg:text-lg text-sm font-semibold">
                Education
              </label>
              <input
                name="education"
                className="w-full lg:p-1.5 p-1 outline-none border-2 border-purple-500 rounded-md pl-3"
                type="text"
                defaultValue={userData?.education}
              />
            </div>
            <div className="flex flex-col items-start gap-y-1">
              <label className="lg:text-lg text-sm font-semibold">Email</label>
              <input
                name="email"
                className="w-full lg:p-1.5 p-1 outline-none border-2 border-purple-500 rounded-md pl-3"
                type="text"
                defaultValue={userData?.email}
              />
            </div>
            <div className="flex items-center mt-3 justify-between">
              <button
                type="button"
                className="lg:px-14 px-10 py-2 font-semibold rounded-md bg-gray-300 text-purple-800 lg:text-sm text-xs"
              >
                Orqaga
              </button>
              <button className="lg:px-14 px-10 py-2 font-semibold rounded-md bg-purple-800 text-white lg:text-sm text-xs">
                Saqlash
              </button>
            </div>
          </form>

          <div className="w-[30%] rounded-lg lg:flex hidden flex-col pr-7 items-center gap-y-4 pt-14 bg-white">
            <div className="w-32 h-32 rounded-full flex items-center justify-center bg-gray-200">
              {!image ? (
                <ImUser className="w-16 h-16" />
              ) : (
                <img
                  className="w-full h-full rounded-full"
                  src={URL.createObjectURL(image)}
                  alt="User Profile"
                />
              )}
            </div>
            <input
              id="image"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
            <label
              htmlFor="image"
              className="py-2 font-semibold rounded-md bg-purple-800 text-white cursor-pointer px-3"
            >
              Upload Image
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
