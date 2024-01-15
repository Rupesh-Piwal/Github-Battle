import React from "react";
import { useNavigate } from "react-router-dom";

const StartButton = () => {
  const navigate = useNavigate();

  const searchUser = () => {
    navigate("/searchUser");
  };

  return (
    <div className=" flex   justify-center mt-40    ">
      <div className="text-center">
        <h2 className="text-lg">
          Compare GitHub profiles and see who wins the battle!
        </h2>
        <button
          onClick={searchUser}
          className="bg-purple-400 px-6 py-4 rounded-sm mt-8 text-lg"
        >
          Start Battle!
        </button>
      </div>
    </div>
  );
};

export default StartButton;
