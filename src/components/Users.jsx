import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { userdelete } from "../store/reducers/ProductReducer";

const Users = () => {
  const { users } = useSelector((state) => state.UserReducer);
  const dispatch = useDispatch();

  const DeleteHandler = (i) => {
    console.log(i);
    dispatch(userdelete(i));
  };

  return (
    <div className=" bg-zinc-800 h-screen w-full p-10 flex">
      <h1 className="text-2xl font-bold text-white">
        Users List
        {users.map((user, i) => (
          <div key={i}>
            <h1 className="text-xl font-normal text-zinc-400 ">
              {user.name}
              <span
                onClick={() => DeleteHandler(i)}
                className="text-zinc-200 cursor-pointer ml-2"
              >
                X
              </span>
            </h1>
          </div>
        ))}
      </h1>
    </div>
  );
};

export default Users;
