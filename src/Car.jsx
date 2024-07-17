import { useState } from "react";

const Car = () => {
  const [scorer, setScorer] = useState("");

  const shoot = (msg) => {
    alert(`${msg} by ${scorer}`);
  };

  return (
    <>
      <h2>I am Sudarsan</h2>
      <input
        placeholder="Enter Scorer"
        value={scorer}
        onChange={(e) => setScorer(e.target.value)}
      />
      <button onClick={() => shoot("Goal...")}>Shoot the ball</button>
      {scorer && <h3>Scorer: {scorer}</h3>}
    </>
  );
};

export default Car;
