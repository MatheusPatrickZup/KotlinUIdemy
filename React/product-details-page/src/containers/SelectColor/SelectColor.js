import React, { Component } from "react";
import "./SelectColor.css";
import Subtitle from "../../components/Subtitle/Subtitle";
import PhotoPreview from "../../components/PhotoPreview/PhotoPreview";

class SelectColor extends Component {
  getColorOptions() {
    let { selectColor, selectedColor, colorOptions } = this.props;

    return colorOptions.map((colorOption, key) => {
      return (
        <PhotoPreview
          key={key}
          imageUrl={colorOption.imageUrl}
          name={colorOption.styleName}
          selectColor={selectColor.bind(this, key)}
          selected={key === selectedColor}
        />
      );
    });
  }

  render() {
    return (
      <div className="colors-block">
        <Subtitle text="Select Color" />
        <div className="preview-block">{this.getColorOptions()}</div>
      </div>
    );
  }
}

export default SelectColor;
