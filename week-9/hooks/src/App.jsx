import React, { Component, useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [isDelay, setIsDelay] = useState(false);
  useEffect(() => {
    setInterval(() => {
      setIsDelay((d) => !d);
    }, 4000);
  });

  return (
    <>
      <div>
        {isDelay && <MyCompo />}
        {/* {isDelay && <MyCompo2 />} */}
      </div>
    </>
  );
}
const MyCompo = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => setCount(count + 1);

  useEffect(() => {
    console.log("component mounts");
    return () => {
      console.log("compon Unmounts");
    };
  }, []);
  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>increase</button>
    </div>
  );
};

export class MyCompo2 extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  componentDidMount() {
    console.log("mounted 2");
  }
  componentWillUnmount() {
    console.log("unmounted 2");
  }
  render() {
    return (
      <div>
        <p>compo 2</p>
        {/* <p>{this.state.count}</p> */}
        {/* <button onClick={this.increment}>increase</button> */}
      </div>
    );
  }
}

export default App;
