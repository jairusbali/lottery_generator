import React from "react";

import Lottery from "./components/Lottery/Lottery";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Lottery title="Lottery Generator" min={1} max={7} numberOfBalls={2} />
    </div>
  );
}

export default App;
