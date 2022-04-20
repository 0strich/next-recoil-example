import React from "react";
import { useRouter } from "next/router";
import { useCounter } from "../../hooks/useCounter";

export default function Counter() {
  const router = useRouter();
  const { count, increment, decrement, reset } = useCounter();

  const moveToMain = () => router.push("/");

  return (
    <div style={{ padding: 30 }}>
      <button onClick={moveToMain}>메인으로</button>
      <h1>
        Count: <span>{count}</span>
      </h1>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
