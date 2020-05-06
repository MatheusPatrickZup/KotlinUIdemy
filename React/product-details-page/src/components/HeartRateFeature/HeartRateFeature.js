import React, { Component } from "react";
import "./HeartRateFeature.css";

class HeartRateFeature extends Component {
  getHeartRate() {
    return (60 + Math.random() * (100 - 60)).toFixed(0);
  }

  render() {
    return (
      <span className="heart-rate-span">
        <img
          alt="Heart Rate"
          src="https://media.giphy.com/media/dn07LBg1hpiVclEoQh/giphy.gif"
        />
        {this.getHeartRate()}
      </span>
    );
  }
}

export default HeartRateFeature;
