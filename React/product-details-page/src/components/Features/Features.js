import React, { Component } from 'react';
import './Features.css';
import Title from '../Title/Title';
import PhotoPreview from '../PhotoPreview/PhotoPreview';

class Features extends Component {
	getColorOptions() {
		let {selectColor, selectedColor, colorOptions} = this.props;

		return colorOptions.map((colorOption, key) => {
			return <PhotoPreview
				imageUrl={colorOption.imageUrl}
				name={colorOption.styleName}
				id={key}
				selectColor={selectColor}
				selectedColor={key === selectedColor}
			/>
		})
	}

	render() {
  		let {title} = this.props;

	    return (
	    	<div class='features-block'>
		    	<Title
		    		title="Select Color"
		    		size="24px"
				/>
				<div class='preview-block'>
					{this.getColorOptions()}
				</div>
			</div>
	    );
  }
}

export default Features;
