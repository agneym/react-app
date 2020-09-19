import React from "react";
import "whatwg-fetch";

function App() {
  const handleClick = (event) => {
    event.preventDefault();
  };
  return (
    <main>
      <h1>App</h1>
      <button onClick={handleClick}>Click</button>
    </main>
  );
}

export default App;
