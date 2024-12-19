import React from "react";
import { MdFeedback, MdQuiz } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import user from "../assets/images/user.png";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="w-full py-2 fixed top-0 left-0 z-10 shadow px-[10%] flex items-center justify-between">
      <div className="flex items-center justify-start gap-2">
        <MdQuiz className="text-3xl font-bold text-purple-800" />
        <Link to={"/"} className="text-3xl font-bold text-purple-800">
          Quiz Test
        </Link>
      </div>
      <div className="flex items-center justify-end gap-8">
        <NavLink
          to={"/test"}
          className="text-lg font-semibold hover:underline duration-200"
        >
          Test
        </NavLink>
        <NavLink
          to={"/ratings"}
          className="text-lg font-semibold hover:underline duration-200"
        >
          Ratings
        </NavLink>
        <div className="flex items-center justify-center gap-2">
          <MdFeedback className="text-lg font-semibold" />
          <NavLink
            to={"/feedback"}
            className="text-lg font-semibold hover:underline duration-200"
          >
            Feedback
          </NavLink>
        </div>
        <Link
          to={"/profile"}
          className="flex items-center justify-center gap-3 hover:bg-purple-300 p-3 duration-200 rounded-md cursor-pointer"
        >
          <div className="rounded-full">
            <FaUser className="text-lg text-purple-800" />
          </div>
          <span className="text-lg font-bold text-purple-800">Yusuff_dev</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
