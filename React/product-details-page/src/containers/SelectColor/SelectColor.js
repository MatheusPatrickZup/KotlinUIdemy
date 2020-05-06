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
          imageUrl={colorOption.imageUrl}
          name={colorOption.styleName}
          id={key}
          selectColor={selectColor}
          selectedColor={key === selectedColor}
        />
      );
    });
  }

  render() {
    return (
      <div class="colors-block">
        <Subtitle text="Select Color" />
        <div class="preview-block">{this.getColorOptions()}</div>
      </div>
    );
  }
}

export default SelectColor;
