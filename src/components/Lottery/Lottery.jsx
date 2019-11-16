import React, { Component } from "react";

import LotteryBall from "./LotteryBall/LotteryBall";

import "./Lottery.css";

class Lottery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numbers: [],
      max: !props.max ? 10 : props.max,
      min: !props.min ? 1 : props.min,
      lengthOfNumbers: !props.lengthOfNumbers ? 3 : props.lengthOfNumbers
    };

    this.generateNumbers = this.generateNumbers.bind(this);
  }

  generateNumbers() {
    let i = 0;
    let newArr = [];
    while (i < this.state.lengthOfNumbers) {
      newArr.push(Math.floor(Math.random() * this.state.max) + this.state.min);
      i++;
    }

    this.setState({ numbers: newArr });
  }

  render() {
    return (
      <div className="Lottery">
        <div className="Lottery-content">
          {this.state.numbers.map(lottoNumber => {
            return <LotteryBall number={lottoNumber} />;
          })}
        </div>
        <button onClick={this.generateNumbers}>generate</button>
      </div>
    );
  }
}

export default Lottery;
