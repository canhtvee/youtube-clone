import React from "react";
import useCount from "./useCount";

export default function FirstComponent() {
  const [count, setCount] = useCount();

  const handleClick = () => {
    setCount();
  };

  return (
    <div>
      <h3>FirstComponent</h3>
      <h3>{count}</h3>
      <button onClick={handleClick}>Count Up</button>
    </div>
  );
}
