import React from "react";
import MapGL from "@urbica/react-map-gl";
import { connect } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Menu } from "../";
import * as Configs from "../../configs";
import "mapbox-gl/dist/mapbox-gl.css";
import { ColorPoint } from "../ui";

const getApi = Configs.GetApi;
const toggleTheme = Configs.toggleTheme;

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.setViewport = this.setViewport.bind(this);
    this.FilterColor = this.FilterColor.bind(this);
    this.state = {
      viewport: { lat: -6.914864, lng: 107.608238, zoom: 12 },
    };
  }

  componentDidMount() {
    this.props.getApi();
  }

  FilterColor(color) {
    const { Datas } = this.props.Datas;
    return (
      <>
        {Datas?.map((data, index) => (
          <ColorPoint key={index} data={data} color={color} />
        ))}
      </>
    );
  }

  setViewport() {}

  render() {
    const token = this.props.token;
    const { lat, lng, zoom } = this.state.viewport;
    const FilterColor = this.FilterColor;
    const styles = {
      light: "mapbox://styles/mapbox/outdoors-v9",
      dark: "mapbox://styles/mapbox/dark-v9",
    };
    const { isDarkMode } = this.props.isDarkMode;
    return (
      <MapGL
        style={{ width: "100%", height: "100vh" }}
        mapStyle={styles[isDarkMode ? "dark" : "light"]}
        latitude={lat}
        longitude={lng}
        zoom={zoom}
        onViewportChange={this.setViewport}
        accessToken={token}
      >
        <Routes>
          <Route path="/" element={FilterColor()}></Route>
          <Route path="status-merah" element={FilterColor("Merah")}></Route>
          <Route path="status-hijau" element={FilterColor("Hijau")}></Route>
          <Route path="status-kuning" element={FilterColor("Kuning")}></Route>
        </Routes>
        <Menu toggleTheme={this.props.toggleTheme} theme={isDarkMode} />
      </MapGL>
    );
  }
}

function mapStateToProps(state) {
  return {
    token: state.token.value,
    loading: state.loading,
    Datas: state.dataApi,
    isDarkMode: state.isDarkMode,
  };
}

export default connect(mapStateToProps, { getApi, toggleTheme })(Map);
