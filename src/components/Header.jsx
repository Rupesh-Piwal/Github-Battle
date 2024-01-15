import React from "react";

const Header = () => {
  return (
    <div className="bg-red-400 flex justify-center items-center gap-5  text-white h-20">
      <img
        src="https://cdn3.iconfinder.com/data/icons/inficons/512/github.png"
        className="w-16 rounded-full"
      />
      <h2 className="text-2xl font-semibold"> Gitub Battle</h2>
    </div>
  );
};

export default Header;
