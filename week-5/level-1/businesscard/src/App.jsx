import React, { memo, useCallback, useEffect, useState } from "react";
import "./App.css";
import Cookies from "js-cookie";
import getData from "./hooks/useData";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useData from "./hooks/useData";

const url = "http://localhost:3000/card";
function App() {
  const [data, credential] = useData("/card");

  //   const handleClick = (e) => {
  //   e.preventDefault();
  //   // console.log("click", mounted);
  //   setCount(count + 1);
  // };

  if (!data) {
    return <h1>Data is fetching...</h1>;
  } else
    return (
      <div className="w-full">
        {!credential ? (
          <SignInButton />
        ) : (
          <Card
            name={data.name}
            description={data.description}
            interests={data.interests}
            socials={data.socials}
            // name={"Gourav"}
            // description={"A aspiring software engineer"}
            // interests={["Open source", "Full stack", "Testing"]}
            // socials={[
            //   ["LinkedIn", "https://linkedin.com/in/gouravsoni"],
            //   ["Instagram", "https://instagram.com/g4rawan"],
            //   ["Twitter", "https://twitter.com/gouravsoni88"],
            // ]}
          />
        )}
        {/* <button onClick={handleClick}>click {count}</button> */}
      </div>
    );
}

const SignInButton = memo(() => {
  const navigate = useNavigate();
  // console.log("signin btn render");
  return (
    <button
      onClick={() => navigate("/admin/signin")}
      className="mx-auto bg-gray-700 px-4 py-2 flex justify-center my-8 text-white rounded-sm"
    >
      Sign In
    </button>
  );
});

const Card = memo(function ({ name, description, interests, socials }) {
  console.log("rerenderd");

  const handleEdit = () => {
    console.log("edidting");
  };
  return (
    <div className="bg-white rounded-lg flex flex-col justify-center align-middle w-2/3 md:w-1/2 lg:w-1/3 mx-auto my-20 border-2 border-solid border-gray-700">
      <div className="nav flex justify-between p-3">
        <div className="flex  gap-1">
          <div className="circle">
            <span className="bg-blue-500 inline-block center w-3 h-3 rounded-full"></span>
          </div>
          <div className="circle">
            <span className="bg-purple-500 inline-block center w-3 h-3 rounded-full"></span>
          </div>
          <div className="circle">
            <span className="bg-pink-500 box inline-block center w-3 h-3 rounded-full"></span>
          </div>
        </div>
        <button onClick={handleEdit}>edit</button>
      </div>
      <div className="card__content pl-6">
        <h3 className="name font-semibold text-lg ">{name}</h3>
        <p className="description text-sm">{description}</p>
        <h4 className="text-base font-semibold">Interest</h4>
        <ul className="pl-2 text-sm">
          {interests.map((interest, index) => (
            <li key={index}>{interest}</li>
          ))}
        </ul>
      </div>
      <div className="linksDiv flex justify-center flex-1 gap-1 py-2">
        {socials.map((item, index) => (
          <a
            key={index}
            href={item[1]}
            target="_blank"
            className="text-white bg-blue-500 px-2 py-1 text-xs md:text-base rounded-sm"
          >
            {item[0]}
          </a>
        ))}
      </div>
    </div>
  );
});

export default App;
