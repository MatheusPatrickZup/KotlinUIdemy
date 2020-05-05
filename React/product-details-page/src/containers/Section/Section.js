import React, { Component } from 'react';
import './Section.css';
import Photo from '../../components/Photo/Photo';
import DescriptionPanel from '../DescriptionPanel/DescriptionPanel';

class Section extends Component {
	constructor(props) {
		super(props);

	    this.state = {
	    	selectedColor: 0
    	};
	}

	selectColor(colorID) {
		this.setState({
			selectedColor: colorID
		});
	}

	render() {
		let {productData} = this.props;
		let {selectedColor} = this.state;

	    return (
			<section className="product-section">
      			<Photo
      				image={productData.colorOptions[selectedColor].imageUrl}
      				imageDescription={productData.colorOptions[selectedColor].styleName}
  				/>
      			<DescriptionPanel
      				selectedColor={selectedColor}
      				productData={productData}
      				selectColor={this.selectColor.bind(this)}
  				/>
      		</section>
	     );
  	}
}

export default Section;
