import React, { useState } from "react";

const Playground = () => {
  const [count, setCount] = useState(4);
  const [theme, setTheme] = useState("Blue");

  const decrementCount = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
    setTheme("red");
  };

  return (
    <div>
      <button onClick={decrementCount}>-</button>
      <span>
        {count}
        {theme}
      </span>
      <button onClick={incrementCount}>+</button>
    </div>
  );
};

export default Playground;
