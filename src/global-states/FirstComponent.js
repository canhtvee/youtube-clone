import React from "react";
import useCount from "./useCount";
import { useState, useEffect } from "react";

export default function FirstComponent() {
  // const [count, setCount] = useCount();

  const [state, setState] = useState(0);
  console.log("render");
  const handleClick = () => {
    setState((prv) => prv + 1);
  };

  return (
    <div>
      <h3>FirstComponent</h3>
      <Child number={state} />
      <button onClick={handleClick}>Count Up</button>
    </div>
  );
}

const Child = ({ number }) => {
  return <h2>{number}</h2>;
};
