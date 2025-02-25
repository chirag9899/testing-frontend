'use client'
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Welcome to My Cypress Testing App 🚀</h1>
      <p data-testid="counter">Counter: {count}</p>
      <button data-testid="increment-btn" onClick={() => setCount(count + 1)}>
        Click Me
      </button>
    </div>
  );
}
