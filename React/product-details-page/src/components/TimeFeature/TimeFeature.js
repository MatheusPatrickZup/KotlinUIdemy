import React, { Component } from "react";
import "./TimeFeature.css";

class TimeFeature extends Component {
  getFormattedTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = String(date.getMinutes()).padStart(2, "0");

    return hours + ":" + minutes;
  }

  render() {
    return <span className="time-span">{this.getFormattedTime()}</span>;
  }
}

export default TimeFeature;
