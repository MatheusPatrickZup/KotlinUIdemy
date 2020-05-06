import React, { Component } from "react";
import "./Photo.css";
import TimeFeature from "../TimeFeature/TimeFeature";
import HeartRateFeature from "../HeartRateFeature/HeartRateFeature";

class Photo extends Component {
  getSelectedFeature() {
    let { selectedFeature } = this.props;

    if (selectedFeature === "time") {
      return <TimeFeature />;
    } else {
      return <HeartRateFeature />;
    }
  }

  render() {
    let { image, imageDescription } = this.props;

    return (
      <div className="photo-container">
        <img className="photo-image" alt={imageDescription} src={image} />
        {this.getSelectedFeature()}
      </div>
    );
  }
}

export default Photo;
