import React from "react";
import { FunnelIcon } from "@heroicons/react/24/solid";

export class ToggleSortButton extends React.Component {
  render() {
    return (
      <button
        className="group w-20 h-20 rounded-full static border border-white bg-blue-400 text-white capitalize transition-all duration-300 ease-in hover:scale-110 hover:transition-all hover:duration-300 hover:ease-out active:scale-90 active:transition-all active:duration-100 active:ease-in-out z-50 text-3xl leading-none"
        onClick={this.props.toggleSort}
      >
        <FunnelIcon className="w-[1em] h-[1em] mx-auto" />
        <p className="text-[0px] transition-all duration-300 ease-in group-hover:text-base group-hover:transition-all group-hover:duration-300 group-hover:ease-in">
          Sortir
        </p>
      </button>
    );
  }
}

export default ToggleSortButton;
