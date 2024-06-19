import { memo, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Card
        name={"Gourav"}
        description={"A aspiring software engineer"}
        interests={["Open source", "Full stack", "Testing"]}
        socials={{
          LinkedIn: "https://linkedin.com/in/gouravsoni",
          Instagram: "https://instagram.com/g4rawan",
          Twitter: "https://twitter.com/gouravg8",
        }}
      />
      <button onClick={() => setCount(count + 1)}>count is: {count}</button>
    </>
  );
}

const Card = memo(({ name, description, interests, socials }) => {
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
        {Object.entries(socials).map(([platform, url], index) => (
          <a key={index} href={url}>
            {platform}
          </a>
        ))}
      </div>
    </div>
  );
});
export default App;
