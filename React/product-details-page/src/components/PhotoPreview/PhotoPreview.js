import React, { Component } from "react";
import "./PhotoPreview.css";

class PhotoPreview extends Component {
  render() {
    let { imageUrl, name, selectColor, selected } = this.props;
    let additionalClass = selected ? "photo-preview-selected" : "";

    return (
      <div
        onClick={selectColor}
        className={"photo-preview " + additionalClass}
      >
        <img className="photo-preview-image" src={imageUrl} alt={name} />
      </div>
    );
  }
}

export default PhotoPreview;
