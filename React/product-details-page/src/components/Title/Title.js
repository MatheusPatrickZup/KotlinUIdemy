import React, { Component } from 'react';
import './Title.css';

class Title extends Component {
  render() {
  	let {text} = this.props;

    return (
      <span className="text-title" >
      	{text}
      </span>
    );
  }
}

export default Title;
