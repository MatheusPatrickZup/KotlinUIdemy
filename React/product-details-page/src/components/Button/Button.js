import React, { Component } from "react";
import "./Button.css";

class Button extends Component {
  render() {
    let { text } = this.props;

    return (
      <span className="button-span">
        <strong>{text}</strong>
      </span>
    );
  }
}

export default Button;
