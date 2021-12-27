import React from "react";
import useCount from "./useCount";

export default function SecondComponent() {
  const [count] = useCount();
  return (
    <div>
      <h2>SecondComponent "{count}"</h2>
    </div>
  );
}
