import React from "react";
import useCount from "./useCount";
import { useState, useEffect } from "react";

export default function FirstComponent() {
  // const [count, setCount] = useCount();

  const [state, setState] = useState(0);
  const [render, setRender] = useState();
  console.log("render");
  const handleClick = () => {
    setState((prev) => prev + 1);
  };

  useEffect(() => {
    console.log("call useEffect on depens change");
  }, [state]);

  return (
    <div>
      <h3>FirstComponent</h3>
      <h3>{state}</h3>
      <button onClick={handleClick}>Count Up</button>
      <button onClick={() => setRender({})}>Call setRender</button>
    </div>
  );
}
