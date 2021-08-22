import React, { useState } from "react";

export default function Example() {
  // Declare a new state variable, which we'll call "count"
  const state = useState(0);
  const [count, setCount] = state;
  console.log(state);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
