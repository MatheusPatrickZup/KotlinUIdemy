import React, { Component } from 'react';
import './Label.css';

class Label extends Component {
	render() {
  		let {text, selected, onClick} = this.props;
  		let additionalClass = selected ? 'label-selected' : ''

	    return (
	    	<span className={"label-span " + additionalClass} onClick={onClick}>
	    		<strong>{text}</strong>
	    	</span>
	    );
  	}
}

export default Label;
