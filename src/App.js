import React from "react";

import Lottery from "./components/Lottery/Lottery";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Lottery title="Custom Title" min={5} max={7} lengthOfNumbers={2} />
    </div>
  );
}

export default App;
