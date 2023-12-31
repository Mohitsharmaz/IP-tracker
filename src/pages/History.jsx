import React from "react";
import { Link } from "react-router-dom";

const History = () => {
  let data = JSON.parse(localStorage.getItem("Ip"));

  return (
    <div className="">
      <Link to={"/"}>
        <button className="m-2 font-extrabold">{`< Back To Home`}</button>
      </Link>
      <h1 className="text-center font-extrabold text-5xl max-sm:text-2xl m-5 text-red-500">
        Your Search History
      </h1>
      {data?.map((item, index) => {
        return (
          <div className="flex flex-col">
            <div className="mt-10 flex items-center max-sm:ƒlex-col border-b-4">
              <h1 className="m-2 font-extrabold text-2xl">{index + 1}.</h1>
              <h1 className="m-2 text-2xl max-sm:text-[1rem]">{item.ip}</h1>
              <h1 className="m-2 text-2xl max-sm:text-[0.8rem] text-gray-400">
                {new Date(item.time).toUTCString()}
              </h1>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default History;
