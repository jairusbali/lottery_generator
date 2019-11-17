import React from "react";
import Slider from "@material-ui/core/Slider";

class ControlPanel extends React.Component {
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
    );
  }
}

export default ControlPanel;
