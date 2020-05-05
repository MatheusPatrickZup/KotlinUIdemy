import React, { Component } from 'react';
import './Title.css';

class Title extends Component {
  render() {
  	let {title, fontSize} = this.props;

    return (
      <span
      	className="text-title"
      	style={{fontSize: fontSize}}>
      	{title}
      </span>
    );
  }
}

export default Title;
