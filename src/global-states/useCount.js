import React, { useState, useEffect } from "react";

let count = 0;
let subscribers = [];

function useCount() {
  const [, setState] = useState();

  const reRender = () => {
    setState({});
  };

  useEffect(() => {
    subscribers.push(reRender);
  }, []);

  const setCount = () => {
    count += 1;
    subscribers.forEach((callback) => {
      callback();
    });
  };

  return [count, setCount];
}

export default useCount;
