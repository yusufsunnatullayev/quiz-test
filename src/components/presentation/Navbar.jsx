import React, { useState } from "react";
import { MdFeedback, MdQuiz } from "react-icons/md";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { IoClose, IoMoonSharp, IoSunny } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navigation = (to) => {
    navigate(to);
    setIsOpen(false);
  };

  return (
    <nav className="w-full py-2 fixed top-0 left-0 z-10 bg-white shadow px-[2%] md:px-[10%] flex items-center justify-between dark:bg-neutral-900">
      <div className="flex items-center justify-start gap-2">
        <MdQuiz className="text-xl md:text-2xl lg:text-3xl font-bold text-purple-800 dark:text-purple-600" />
        <Link
          to={"/"}
          className="text-xl md:text-2xl lg:text-3xl font-bold text-purple-800 dark:text-purple-600"
        >
          Quiz Test
        </Link>
      </div>
      <div className="flex items-center justify-center gap-5">
        <div className="hidden md:flex items-center justify-end gap-5 lg:text-base lg:gap-8">
          <NavLink
            to={"/test"}
            className="text-base lg:text-lg font-semibold hover:underline duration-200 dark:text-white"
          >
            Test
          </NavLink>
          <NavLink
            to={"/ratings"}
            className="text-base lg:text-lg font-semibold hover:underline duration-200 dark:text-white"
          >
            Reytinglar
          </NavLink>
          <div className="flex items-center justify-center gap-2">
            <MdFeedback className="text-lg font-semibold dark:text-white" />
            <NavLink
              to={"/feedback"}
              className="text-base lg:text-lg font-semibold hover:underline duration-200 dark:text-white"
            >
              Fikringiz
            </NavLink>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2">
          <Link
            to={"/profile"}
            className="flex items-center justify-center gap-3 hover:bg-purple-300 p-2  lg:p-3 duration-200 rounded-md cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            <div className="rounded-full w-8 h-8 flex items-center justify-center">
              <FaUser className="text-base lg:text-lg text-purple-800 dark:text-purple-600" />
            </div>
            <span className="text-base lg:text-lg font-bold text-purple-800 dark:text-purple-600">
              Yusuff_dev
            </span>
          </Link>
          <button
            onClick={() => setDarkMode((prev) => !prev)}
            className="text-lg text-purple-800 dark:text-purple-600"
          >
            {darkMode ? <IoSunny /> : <IoMoonSharp />}
          </button>
        </div>
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex md:hidden text-2xl text-purple-800 dark:text-purple-600 cursor-pointer z-30"
        >
          {isOpen ? <IoClose /> : <IoMdMenu />}
        </button>
      </div>
      {isOpen && (
        <div className="h-screen w-full fixed top-0 left-0 z-20 bg-opacity-20 bg-gray-500 flex justify-end">
          <div className="h-full w-1/2 bg-white dark:bg-neutral-900 flex flex-col items-start py-20 px-10 gap-10">
            <h2
              onClick={() => {
                navigate("/test");
                setIsOpen(false);
              }}
              className="text-2xl font-semibold hover:underline duration-200 dark:text-white cursor-pointer"
            >
              Test
            </h2>
            <h2
              onClick={() => {
                navigate("/ratings");
                setIsOpen(false);
              }}
              className="text-2xl font-semibold hover:underline duration-200 dark:text-white cursor-pointer"
            >
              Reytinglar
            </h2>
            <div className="flex items-center justify-center gap-2">
              <MdFeedback className="text-lg font-semibold dark:text-white" />
              <h2
                onClick={() => {
                  navigate("/feedback");
                  setIsOpen(false);
                }}
                className="text-2xl font-semibold hover:underline duration-200 dark:text-white cursor-pointer"
              >
                Fikringiz
              </h2>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
