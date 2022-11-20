import React from "react";
import { Layer } from "../";

class ColorPoint extends React.Component {
  render() {
    const data = this.props.data;
    const color = this.props.color;

    return (
      <>
        {color ? (
          <>{data.properties.Status === color ? <Layer data={data} /> : null}</>
        ) : (
          <Layer data={data} />
        )}
      </>
    );
  }
}

export default ColorPoint;
