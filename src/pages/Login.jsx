import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { authLogin } from "../api/authApi";

const LogIn = ({ setLoggedIn }) => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  const login = useMutation(authLogin);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const form = new FormData(e.target);
      const user = Object.fromEntries(form.entries());
      login.mutate(user);
      setLoggedIn(true);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full dark:bg-neutral-900 h-screen flex items-center justify-center">
      <form
        onSubmit={handleLogin}
        className="p-5 rounded flex flex-col gap-5 shadow items-start dark:bg-neutral-800 w-3/4 md:w-2/4 lg:w-1/4"
      >
        <h1 className="text-2xl font-bold self-center dark:text-white">
          Kirish
        </h1>
        <div className="w-full flex flex-col items-start gap-1">
          <label className="text-sm font-semibold dark:text-white">
            Foydalanuvchi nomi
          </label>
          <input
            className="py-2 px-3 rounded border outline-none w-full"
            type="text"
            name="username"
          />
        </div>
        <div className="w-full flex flex-col items-start gap-1">
          <label className="text-sm font-semibold dark:text-white">Parol</label>
          <div className="rounded pe-3 border w-full flex items-center justify-between dark:bg-white">
            <input
              className="py-2 px-3 border-none outline-none flex-1"
              type={visible ? "text" : "password"}
              name="password"
            />
            <button
              className="flex items-center justify-center"
              type="button"
              onClick={() => setVisible((prev) => !prev)}
            >
              {!visible ? <FaRegEyeSlash /> : <FaRegEye />}
            </button>
          </div>
        </div>
        <button className="w-full bg-purple-800 hover:opacity-80 duration-150 text-white rounded py-2 px-3 font-semibold text-base">
          Kirish
        </button>
        <span className="text-sm text-center text-gray-600 font-medium self-center">
          Agar akkauntingiz bo'lmasa{" "}
          <Link
            to={"/register"}
            className="text-black dark:text-white underline"
          >
            Ro'yxatdan o'tish
          </Link>
        </span>
      </form>
    </div>
  );
};

export default LogIn;