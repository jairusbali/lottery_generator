import React from "react";
import Slider from "@material-ui/core/Slider";

import Lottery from "./components/Lottery/Lottery";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: [0, 10]
    };

    this.handleChange = this.handleChange.bind(this);
    this.valuetext = this.valuetext.bind(this);
  }

  handleChange(event, newValue) {
    this.setState({ value: newValue });
  }

  valuetext(value) {
    return `${value}°C`;
  }

  render() {
    return (
      <div className="App">
        <Lottery title="Lottery Generator" min={1} max={7} numberOfBalls={2} />
        <Slider
          value={this.state.value}
          onChange={this.handleChange}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          getAriaValueText={this.valuetext}
        />
      </div>
    );
  }
}

export default App;
