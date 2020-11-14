import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../../Store/Actions";
export default function DB() {
  const counter = useSelector((state) => state.counter);
  const dispath = useDispatch();
  return (
    <div>
      <h2>Pos++</h2>
      <h1>{counter}</h1>
      <button onClick={() => dispath(increment())}>+</button>
    </div>
  );
}
