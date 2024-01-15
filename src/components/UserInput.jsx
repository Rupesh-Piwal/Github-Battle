import React from "react";

const UserInput = () => {
  return (
    <>
      <form action="submit">
        <div>
          <label htmlFor="">Player 1 Username</label>
          <input type="text" name="user1" />
        </div>
        <div>
          <label htmlFor="">Player 2 Username</label>
          <input type="text" name="user2" />
        </div>
        <button>Battle Now!</button>
      </form>
    </>
  );
};

export default UserInput;
