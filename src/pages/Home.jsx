import React, { useState } from "react";
import axios from "axios";
import Details from "./Details";
import { Link } from "react-router-dom";
const Home = () => {
  const [data, setData] = useState({});
  const [ip, setIp] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const fetchDetails = async () => {
    try {
      console.log("searching for ip", ip);
      setLoading(true);
      let url = `https://api.ipgeolocation.io/ipgeo?apiKey=841a16849ca54ce380c468e852b5a1c4&ip=${ip}`;
      axios
        .get(url)
        .then((item) => {
          console.log("found data", item);
          setError(null);
          setLoading(false);
          setData(item.data);
          let arr = JSON.parse(localStorage.getItem("Ip")) || [];
          if (ip.length > 0) {
            arr.push({ ip, time: new Date() });
            console.log("arr is", arr);
            window.localStorage.setItem("Ip", JSON.stringify(arr));
          }
        })
        .catch((errr) => {
          console.log("error", errr);
          setError(errr.response.data.message);
        });
    } catch (error) {
      console.log("got an error", error);
    }
  };
  const renderDetails = () => {
    if (loading) {
      console.log("loading....");
      return <h1>Loading.....</h1>;
    } else {
      return <Details details={data} />;
    }
  };

  return (
    <div
      style={{ display: "flex", justifyContent: "center" }}
      className="mt-10"
    >
      <div className="text-center w-full">
        <h1 className="text-3xl font-bold">Find Your GeoLocation</h1>
        <div className="flex flex-col items-center">
          <input
            placeholder="Enter Ip Address"
            onChange={(e) => setIp(e.target.value)}
            className="rounded-2xl text-2xl outline-none shadow-lg  h-[3rem] focus:none p-3 w-[50%] max-sm:w-[90%] focus:bg-gray-500"
          />
          <button
            onClick={() => fetchDetails()}
            className="border-2 rounded-2xl bg-pink-500 font-extrabold text-white mt-2  max-sm:w-[90%] w-[50%] h-[3rem] px-5 focus:none hover:bg-gray-500 text-2xl"
          >
            Fetch Details
          </button>
        </div>
        <Link to={"/history"}>
          <button className="font-extrabold text-2xl rounded-2xl mt-2 text-red-700 max-sm:w-[90%] hover:bg-gray-500 w-[50%] h-[3rem] bg-cyan-400">
            History
          </button>
        </Link>
        <div className="m-10">
          {error ? (
            <div>
              <h1 className="text-2xl">Sorrry !! </h1>{" "}
              <h1 className="font-bold text-red-600">{error}</h1>{" "}
            </div>
          ) : (
            <div>{renderDetails()}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
