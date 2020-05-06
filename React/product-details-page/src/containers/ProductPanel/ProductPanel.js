import React, { Component } from "react";
import "./ProductPanel.css";
import Title from "../../components/Title/Title";
import Description from "../../components/Description/Description";
import Button from "../../components/Button/Button";
import SelectColor from "../SelectColor/SelectColor";
import Features from "../Features/Features";

class ProductPanel extends Component {
  render() {
    let {
      selectColor,
      selectFeature,
      selectedColor,
      selectedFeature,
      productData,
    } = this.props;

    return (
      <div className="product-panel">
        <Title text={productData.title} />
        <Description description={productData.description} />
        <SelectColor
          selectColor={selectColor}
          selectedColor={selectedColor}
          colorOptions={productData.colorOptions}
        />
        <Features
          selectFeature={selectFeature}
          selectedFeature={selectedFeature}
        />
        <Button text="Buy Now" />
      </div>
    );
  }
}

export default ProductPanel;
