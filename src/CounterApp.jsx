import React, { useState } from "react";
// import PropTypes from "prop-types";

const CounterApp = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>
      <div>
        <button onClick={() => setCounter(counter - 1)}>Decrease</button>
        <button onClick={() => setCounter(0)}>reset</button>
        <button onClick={() => setCounter(counter + 1)}>increase</button>
      </div>
    </>
  );
};

// CounterApp.propTypes = {
//   value: PropTypes.number.isRequired,
// };

export default CounterApp;
