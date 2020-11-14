import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement } from "../../Store/Actions";
export default function About() {
  const counter = useSelector((state) => state.counter);
  const dispath = useDispatch();
  return (
    <div>
      <h2>Neg--</h2>
      <h1>{counter}</h1>
      <button onClick={() => dispath(decrement(5))}>-</button>
    </div>
  );
}
