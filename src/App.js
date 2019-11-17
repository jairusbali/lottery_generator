import React from "react";
import Slider from "@material-ui/core/Slider";
import { Typography } from "@material-ui/core";

import Lottery from "./components/Lottery/Lottery";
import "./App.css";

class App extends React.Component {
  static defaultProps = {
    min: 1,
    max: 80,
    numberOfBalls: 2
  };

  constructor(props) {
    super(props);
    this.state = {
      range: [this.props.min, this.props.max],
      numberOfBalls: this.props.numberOfBalls
    };

    this.minMaxHandleChange = this.minMaxHandleChange.bind(this);
    this.numberOfBallsHandleChange = this.numberOfBallsHandleChange.bind(this);
    this.valuetext = this.valuetext.bind(this);
  }

  minMaxHandleChange(event, newValue) {
    this.setState({ range: newValue });
  }

  numberOfBallsHandleChange(event, newValue) {
    this.setState({ numberOfBalls: newValue });
  }

  valuetext(value) {
    return `${value}`;
  }

  render() {
    return (
      <div className="App">
        <Typography variant="h2" gutterBottom>
          Lottery Generator
        </Typography>
        <Lottery
          title="Lottery Generator"
          min={this.state.range[0]}
          max={this.state.range[1]}
          numberOfBalls={this.state.numberOfBalls}
        />

        <div
          style={{
            margin: "0 4rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            height: "40vh"
          }}
        >
          <Typography variant="h5" gutterBottom>
            Min and max for the generator
          </Typography>
          <Slider
            value={this.state.range}
            onChange={this.minMaxHandleChange}
            valueLabelDisplay="on"
            aria-labelledby="range-slider"
            getAriaValueText={this.valuetext}
            min={this.props.min}
            max={this.props.max}
          />

          <Typography variant="h5" gutterBottom>
            Number of balls
          </Typography>

          <Slider
            value={this.state.numberOfBalls}
            defaultValue={1}
            getAriaValueText={this.valuetext}
            aria-labelledby="Number of balls"
            step={1}
            marks
            min={1}
            max={10}
            valueLabelDisplay="on"
            onChange={this.numberOfBallsHandleChange}
          />
        </div>
      </div>
    );
  }
}

export default App;
