import React from "react";

const UserInput = () => {
  return (
    <>
      <div className="border-2 border-gray-600 w-[500px] p-8 rounded">
        <div className="flex flex-col p-5">
          <label htmlFor="">Player 1 </label>
          <input
            className="border border-gray-400 p-2 outline-none "
            type="text"
            name="user1"
            placeholder="Enter Username"
          />
        </div>
        <div className="flex flex-col p-5">
          <label htmlFor="">Player 2 </label>
          <input
            className="border border-gray-400 p-2 outline-none  "
            type="text"
            name="user2"
            placeholder="Enter Username"
          />
        </div>
        <button className="bg-purple-400 px-5 py-4 rounded-md mx-auto text-center text-lg ">
          Battle Now!
        </button>
      </div>
    </>
  );
};

export default UserInput;
