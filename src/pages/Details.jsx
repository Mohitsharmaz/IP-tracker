import React from "react";
import DetailsCard from "./DetailsCard";

const Details = ({ details }) => {
  const stringFields = Object.entries(details)
    .filter(([key, value]) => typeof value === "string")
    .reduce((result, [key, value]) => {
      result[key] = value;
      return result;
    }, {});
  console.log("stringFields", stringFields);
  return (
    <div className="m-10 max-sm:m-0 bg-slate-50 shadow-lg py-10">
      <div className="flex justify-around items-center">

      <img className="w-[20%]" src={details.country_flag} />
      <h1 className="text-5xl font-extrabold">{details.country_name}</h1>
      </div>
      <div className="flex flex-wrap ">
        <DetailsCard title={"Capital"} value={details.country_capital} />
        <DetailsCard title={"State"} value={details.state_prov} />
        <DetailsCard title={"City"} value={details.city} />
        <DetailsCard title={"ZipCode"} value={details.zipcode} />
        <DetailsCard title={"Phone Code"} value={details.calling_code} />
        <DetailsCard title={"Organisation"} value={details.organization} />
      </div>
    </div>
  );
};

export default Details;
