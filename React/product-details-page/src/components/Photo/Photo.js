import React, { Component } from 'react';
import './Photo.css';

class Photo extends Component {
	render() {
  		let {image, imageDescription} = this.props;

    	return (
    		<div className='photo-container'>
	    		<img
	    			className='photo-image'
	    			alt={imageDescription}
	    			src={image}
				/>
			</div>
		);
  	}
}

export default Photo;
