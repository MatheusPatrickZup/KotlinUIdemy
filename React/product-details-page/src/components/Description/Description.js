import React, { Component } from "react";
import "./Description.css";

class Description extends Component {
  render() {
    let { description } = this.props;

    return <span className="text-description">{description}</span>;
  }
}

export default Description;
