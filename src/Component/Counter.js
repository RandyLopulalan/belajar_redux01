import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../features/counter";

const Counter = () => {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch()
  return (
    <div>
      <button onClick={()=>{dispatch(decrement(1))}}>-</button>
      {counter}
      <button onClick={()=>{dispatch(increment(1))}}>+</button>
    </div>
  );
};

export default Counter;
