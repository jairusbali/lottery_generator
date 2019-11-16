import React from "react";

import Lottery from "./components/Lottery/Lottery";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Lottery min={1} max={40} lengthOfNumbers={12} />
    </div>
  );
}

export default App;
