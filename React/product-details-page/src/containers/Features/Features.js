import React, { Component } from 'react';
import './Features.css';
import Subtitle from '../../components/Subtitle/Subtitle';
import Label from '../../components/Label/Label';

class Features extends Component {
	render() {
		let {selectFeature, selectedFeature} = this.props;

	    return (
	    	<div class='features-block'>
		    	<Subtitle
		    		text="Features"
				/>
				<div class='features-overview'>
					<Label
						selected={selectedFeature === "time"}
						onClick={selectFeature.bind(this, 'time')}
						text="Time" />
					<Label
						selected={selectedFeature === "heart-rate"}
						onClick={selectFeature.bind(this, 'heart-rate')}
						text="Heart Rate" />
				</div>
			</div>
	    );
  }
}

export default Features;
