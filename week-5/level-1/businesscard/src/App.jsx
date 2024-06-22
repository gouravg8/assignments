import React, { memo, useState } from "react";
import "./App.css";
import useData from "./hooks/useData";

function App() {
  const [count, setCount] = useState(0);
  const data = useData();
  return (
    <>
      <Card
        name={"Gourav"}
        description={"A aspiring software engineer"}
        interests={["Open source", "Full stack", "Testing"]}
        socials={[
          ["LinkedIn", "https://linkedin.com/in/gouravsoni"],
          ["Instagram", "https://instagram.com/g4rawan"],
          ["Twitter", "https://twitter.com/gouravg8"],
        ]}
      />
    </>
  );
}

const Card = memo(function ({ name, description, interests, socials }) {
  console.log("rerenderd");
  return (
    <div className="cardDiv">
      <h3 className="name">{name}</h3>
      <p className="description">{description}</p>
      <h4>Interest</h4>
      <ul>
        {interests.map((interest, index) => (
          <li key={index}>{interest}</li>
        ))}
      </ul>
      <div className="linksDiv">
        {socials.map((item, index) => (
          <a key={index} href={item[1]} target="_blank" className="text-white">
            {item[0]}
          </a>
        ))}
      </div>
    </div>
  );
});

export default App;
