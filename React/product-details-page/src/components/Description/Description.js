import React, { Component } from "react";
import "./Description.css";

class Description extends Component {
  render() {
    let { text } = this.props;

    return <span className="text-description">{text}</span>;
  }
}

export default Description;
