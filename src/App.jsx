import React from "react";

import { useSelector } from "react-redux";

const App = () => {
  const {users} = useSelector((state) => state.UserReducer);

  return (
    <div className=" bg-zinc-800 h-screen w-full p-10 flex">
      <h1 className="text-2xl font-bold text-white">
        Users List
        {users.map((user, i) => (
          <div key={i}>
            <h1 className="text-xl font-normal text-zinc-400">{user.name}</h1>
          </div>
        ))}
      </h1>
    </div>
  );
};

export default App;

