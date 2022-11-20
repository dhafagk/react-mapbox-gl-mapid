import React from "react";
import { connect } from "react-redux";
import { Source, Layer as Marker } from "@urbica/react-map-gl";
import { Popup } from "./ui";

export class Layer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { popup: false };
  }

  render() {
    const data = this.props.data;
    const popup = this.state.popup;
    return (
      <>
        <Source key={data.key} id={data.key} type="geojson" data={data} />
        <Marker
          id={data.key}
          type="circle"
          source={data.key}
          paint={{
            "circle-color": [
              "match",
              ["get", "Status"],
              "Merah",
              "#FF0000",
              "Hijau",
              "#008000",
              "Kuning",
              "#FFFF00",
              "#1B659D",
            ],
            "circle-radius": ["get", "circle_radius"],
            "circle-stroke-width": ["get", "circle_stroke_width"],
            "circle-stroke-color": ["get", "circle_stroke_color"],
          }}
          onClick={() => this.setState({ popup: !this.state.popup })}
        />
        {popup && <Popup info={data} />}
      </>
    );
  }
}

export default connect()(Layer);
