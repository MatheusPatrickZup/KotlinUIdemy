import React, { Component } from 'react';
import './Section.css';
import Photo from '../../components/Photo/Photo';
import ProductPanel from '../ProductPanel/ProductPanel';

class Section extends Component {
	constructor(props) {
		super(props);

	    this.state = {
	    	selectedColor: 0,
	    	selectedFeature: 'time'
    	};
	}

	selectColor(colorID) {
		this.setState({
			selectedColor: colorID
		});
	}

	selectFeature(featureName) {
		this.setState({
			selectedFeature: featureName
		});
	}

	render() {
		let {productData} = this.props;
		let {selectedColor, selectedFeature} = this.state;

	    return (
			<section className="product-section">
				<div id='photo-panel' className='section-panel'>
	      			<Photo
	      				image={productData.colorOptions[selectedColor].imageUrl}
	      				imageDescription={productData.colorOptions[selectedColor].styleName}
	      				selectedFeature={selectedFeature}
	  				/>
  				</div>
  				<div className='section-panel'>
	      			<ProductPanel
	      				selectedColor={selectedColor}
	      				selectedFeature={selectedFeature}
	      				productData={productData}
	      				selectColor={this.selectColor.bind(this)}
	      				selectFeature={this.selectFeature.bind(this)}
	  				/>
  				</div>
      		</section>
	     );
  	}
}

export default Section;
