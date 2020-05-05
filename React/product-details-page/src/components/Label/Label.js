import React, { Component } from 'react';
import './Label.css';

class Label extends Component {
	render() {
  		let {imageUrl, name} = this.props;

	    return (
	    	<img
	    		className="label-image"
	    		src={imageUrl}
	    		alt={name} />
	    );
  	}
}

export default Label;
