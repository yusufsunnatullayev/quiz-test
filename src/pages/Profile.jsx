import React from "react";
import { ImUser } from "react-icons/im";

function Profile() {
  return (
    <div className="w-full h-screen mx-auto flex flex-col">
      <div className="w-full lg:h-1/2 h-[55%]  bg-gray-200"></div>

      <div className="lg:w-1/2 w-full px-[2%] md:px-0 mx-auto h-[500px] absolute top-[20%] left-[50%] transform -translate-x-1/2">
        <div className="flex flex-col">
          <h1 className="lg:text-4xl font-semibold text-2xl">
            Profil sozlamalari
          </h1>
          <h2 className="text-gray-500 lg:text-md text-xs">
            Ismingiz va boshqa narsalar kiritishiz mumkin
          </h2>
        </div>
        <div className="flex justify-between mt-2 rounded-lg bg-white shadow-2xl pb-5  ">
          <form
            className="w-full lg:px-14 px-5 pt-5 flex flex-col gap-y-3"
            action=""
          >
            <div>
              <div className=" lg:hidden flex pr-7 items-center gap-x-4 bg-white">
                <div className="w-14 h-14 rounded-full flex items-center justify-center bg-gray-200">
                  <ImUser className="w-8 h-8" />
                </div>
                <button className="p-1 bg-purple-800 text-sm rounded-md text-white  px-3">
                  <h2>Rasm joylash</h2>
                </button>
              </div>
            </div>
            <div className="flex flex-col items-start gap-y-1">
              <label className="lg:text-lg text-sm font-semibold " htmlFor="">
                Ism
              </label>
              <input
                className="w-full lg:p-1.5 p-1 outline-none border-2 border-purple-500 rounded-md pl-3 "
                placeholder="Toxir"
                type="text"
              />
            </div>
            <div className="flex flex-col items-start gap-y-1">
              <label className="lg:text-lg text-sm font-semibold " htmlFor="">
                Parol
              </label>
              <input
                className="w-full lg:p-1.5 p-1 outline-none border-2 border-purple-500 rounded-md pl-3"
                placeholder="2928292829"
                type="text"
              />
            </div>
            <div className="flex flex-col items-start gap-y-1">
              <label className="lg:text-lg text-sm font-semibold " htmlFor="">
                Email
              </label>
              <input
                className="w-full lg:p-1.5 p-1 outline-none border-2 border-purple-500 rounded-md pl-3"
                placeholder="saparovtoxir@gmail.com"
                type="text"
              />
            </div>
            <div className="flex items-center mt-3 justify-between">
              <button className=" lg:px-14 px-10 py-2 font-semibold  rounded-md bg-gray-300 text-purple-800 lg:text-sm text-xs">
                Orqaga
              </button>
              <button className=" lg:px-14 px-10 py-2 font-semibold rounded-md bg-purple-800 text-white lg:text-sm text-xs">
                Saqlash
              </button>
            </div>
          </form>

          <div className="w-[30%] rounded-lg lg:flex hidden flex-col pr-7 items-center gap-y-4 pt-14 bg-white">
            <div className="w-32 h-32 rounded-full flex items-center justify-center bg-gray-200">
              <ImUser className="w-16 h-16" />
            </div>
            <button className="py-2 font-semibold rounded-md bg-purple-800 text-white  px-3">
              <h2>Rasm joylash</h2>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
