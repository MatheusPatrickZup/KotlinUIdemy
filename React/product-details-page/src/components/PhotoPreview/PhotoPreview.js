import React, { Component } from 'react';
import './PhotoPreview.css';

class PhotoPreview extends Component {
	render() {
  		let {imageUrl, name, id, selectColor, selectedColor} = this.props;
  		let selected = selectedColor === id;
  		let additionalClass = selectedColor ? ' photo-preview-selected' : '';

	    return (
	    	<div onClick={selectColor.bind(this, id)} className={"photo-preview" + additionalClass}>
		    	<img
		    		className="photo-preview-image"
		    		src={imageUrl}
		    		alt={name} />
	    	</div>
	    );
  	}
}

export default PhotoPreview;
