import React, { Component } from 'react';
import './DescriptionPanel.css';
import Title from '../../components/Title/Title';
import Description from '../../components/Description/Description';
import Features from '../../components/Features/Features';

class DescriptionPanel extends Component {
  render() {
  	let {selectColor, selectedColor, productData} = this.props;

    return (
      <div className="description-panel">
      	<Title
      		title={productData.title}
          fontSize={"48px"} />
      	<Description
      		description={productData.description} />
        <Features
          selectColor={selectColor}
          selectedColor={selectedColor}
          colorOptions={productData.colorOptions} />
      </div>
    );
  }
}

export default DescriptionPanel;
