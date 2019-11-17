import React from "react";
import Slider from "@material-ui/core/Slider";

import Lottery from "./components/Lottery/Lottery";
import "./App.css";

class App extends React.Component {
  static defaultProps = {
    min: 1,
    max: 80
  };

  constructor(props) {
    super(props);

    this.state = {
      value: [this.props.min, this.props.max]
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
        <Lottery
          title="Lottery Generator"
          min={this.state.value[0]}
          max={this.state.value[1]}
          numberOfBalls={2}
        />

        <div style={{ margin: "0 4rem" }}>
          <Slider
            value={this.state.value}
            onChange={this.handleChange}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            getAriaValueText={this.valuetext}
            min={this.props.min}
            max={this.props.max}
          />
        </div>
      </div>
    );
  }
}

export default App;
