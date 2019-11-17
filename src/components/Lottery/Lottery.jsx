import React, { Component } from "react";

import LotteryBall from "./LotteryBall/LotteryBall";
import PrimaryButton from "../Button/PrimaryButton";

import "./Lottery.css";

class Lottery extends Component {
  static defaultProps = {
    max: 10,
    min: 1,
    numberOfBalls: 1,
    title: "Lottery"
  };

  constructor(props) {
    super(props);

    this.state = {
      numbers: []
    };

    this.generateNumbers = this.generateNumbers.bind(this);
  }

  generateNumbers() {
    let i = 0;
    let newArr = [];
    console.log(this.props.max, this.props.min);
    while (i < this.props.numberOfBalls) {
      newArr.push(
        Math.floor(Math.random() * (this.props.max - this.props.min + 1)) +
          this.props.min
      );
      console.log(newArr[i]);
      i++;
    }

    this.setState({ numbers: newArr });
  }

  render() {
    return (
      <div className="Lottery">
        <h1>{this.props.title}</h1>
        <div className="Lottery-content">
          {this.state.numbers.map(lottoNumber => {
            return <LotteryBall number={lottoNumber} />;
          })}
        </div>

        <PrimaryButton onClick={this.generateNumbers} name="Generate" />
      </div>
    );
  }
}

export default Lottery;
