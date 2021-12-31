import React from "react";
import useCount from "./useCount";
import { useState, useEffect, useCallback, useMemo } from "react";

export default function FirstComponent() {
  console.log("FirstComponent rendering");

  const [state, setState] = useState(0);
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setState((prv) => prv + 1);
  };

  const memoizedCallback = useCallback(() => {
    console.log("memoized Callback");
  }, []);

  // const CalBtn = useMemo(() => {
  //   console.log("useMemo rendering");
  //   return <button>useMemo</button>;
  // }, []);

  const Memoi1 = useMemo(() => {
    console.log("useMemo rendering");
    return <button onClick={memoizedCallback}>useMemo {count}</button>;
  }, [memoizedCallback]);

  return (
    <div>
      <h3>FirstComponent</h3>
      <h3>{state}</h3>
      <button onClick={handleClick}>Count Up</button>
      <MemoizedBtn onClick={memoizedCallback} />
      {Memoi1}
      {Memoi1}
    </div>
  );
}
const MemoizedBtn = React.memo(({ onClick }) => {
  console.log("React.memo rendering");
  return <button onClick={onClick}>React.memo</button>;
});
