import React, { useState } from "react";
import Counter from "./Counter";
import Info from "./Info";
import CounterReducer from "./CounterReducer";
import InfoReducer from "./InfoReducer";
import Average from "./Average";
import RefSample from "./RefSample";

const App = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Counter />
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? "숨기기" : "보이기"}
      </button>
      <hr />
      {visible && <Info />}
      <CounterReducer />
      <InfoReducer />
      <hr />
      <Average />
      <RefSample />
    </>
  );
};

export default App;
