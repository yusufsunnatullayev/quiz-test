import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { authRegister } from "../api/authApi";
import { toast } from "react-toastify";

const Register = ({ setLoggedIn }) => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  const { mutate: register, isLoading } = useMutation(authRegister, {
    onSuccess: () => {
      toast.success("Siz muvaffaqiyatli ro'yxatdan o'tdingiz!");
      setLoggedIn(true);
      navigate("/");
    },
    onError: (error) => {
      toast.error(error?.response?.data?.username[0]);
    },
  });

  const registerHandler = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const user = Object.fromEntries(form.entries());

    if (!user.username || !user.password || !user.email) {
      toast.error("Ma'lumotlarni to'diring!");
      return;
    }

    register(user);
  };

  return (
    <div className="w-full dark:bg-neutral-900 h-screen flex items-center justify-center">
      <form
        onSubmit={registerHandler}
        className="p-5 dark:bg-neutral-800 rounded flex flex-col min-w-80 gap-5 shadow items-start w-3/4 md:w-2/4 lg:w-1/4"
      >
        <h1 className="text-2xl font-bold self-center dark:text-white">
          Ro'yxatdan o'tish
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
          <label className="text-sm font-semibold dark:text-white">
            Elektron pochta
          </label>
          <input
            className="py-2 px-3 rounded border outline-none w-full"
            type="email"
            name="email"
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
            <button type="button" onClick={() => setVisible((prev) => !prev)}>
              {!visible ? <FaRegEyeSlash /> : <FaRegEye />}
            </button>
          </div>
        </div>
        <button
          className="w-full bg-purple-800 hover:opacity-80 duration-150 text-white rounded py-2 px-3 font-semibold text-base"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Ro'yxatdan o'tish"}
        </button>
        <span className="text-sm text-center text-gray-600 font-medium self-center">
          Agar akkauntingiz bo'lsa{" "}
          <Link to={"/login"} className="text-black dark:text-white underline">
            Kirish
          </Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
