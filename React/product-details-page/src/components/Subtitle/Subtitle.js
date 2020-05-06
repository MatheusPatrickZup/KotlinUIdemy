import React, { Component } from 'react';
import './Subtitle.css';

class Subtitle extends Component {
	render() {
		let {text} = this.props;

		return (
			<span className="text-subtitle">
		  		{text}
			</span>
		);
	}
}

export default Subtitle;
