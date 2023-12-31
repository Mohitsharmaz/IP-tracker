import React from "react";

const DetailsCard = (props) => {
  return (
    <div className="flex flex-col p-10 bg-[#FFF] w-60 m-10">
      <p className="font-bold text-2xl">{props.title}</p>
      <p>{props.value}</p>
    </div>
  );
};

export default DetailsCard;
