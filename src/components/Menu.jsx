import React from "react";
import { connect } from "react-redux";
import { GeolocateControl, NavigationControl } from "@urbica/react-map-gl";
import { SortButtons, ToggleSortButton, ToggleThemeButton } from "./ui";

export class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sort: false };
    this.toggleSort = this.toggleSort.bind(this);
  }

  toggleSort() {
    this.setState({ sort: !this.state.sort });
  }

  render() {
    const theme = this.props.theme;
    const toggleTheme = this.props.toggleTheme;
    const sort = this.state.sort;
    return (
      <div className="menu">
        <NavigationControl showCompass showZoom />

        <GeolocateControl />

        <div className="flex flex-col justify-end items-center gap-4 fixed bottom-12 right-12 w-32 h-64">
          <SortButtons sort={sort} />
          <div className="flex flex-row items-end gap-4">
            <ToggleThemeButton theme={theme} onClick={toggleTheme} />
            <ToggleSortButton toggleSort={this.toggleSort} />
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(Menu);
