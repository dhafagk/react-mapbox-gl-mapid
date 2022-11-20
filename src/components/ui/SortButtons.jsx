import React from "react";
import { withRouter } from "../../lib/withRouter";

export class SortButtons extends React.Component {
  render() {
    const sort = this.props.sort;
    return (
      <div
        className={
          sort
            ? "flex flex-col relative gap-2 -mr-14 h-full transition-all duration-300 ease-in-out"
            : "flex flex-col relative -mr-14 -mb-6 h-0 -z-1 transition-all duration-500 ease-in-out"
        }
      >
        <button
          className="w-12 h-12 rounded-full static border border-white bg-blue-400 text-white capitalize transition-all duration-1000 ease-in-out hover:bg-red-500 hover:scale-110 hover:transition-all hover:duration-300 hover:ease-out active:scale-90 active:transition-all active:duration-100 active:ease-in-out z-50 text-xs leading-none"
          onClick={() => this.props.navigate("status-merah")}
        >
          <p>Merah</p>
        </button>
        <button
          className="w-12 h-12 rounded-full static border border-white bg-blue-400 text-white capitalize transition-all duration-1000 ease-in-out hover:bg-green-500 hover:scale-110 hover:transition-all hover:duration-300 hover:ease-out active:scale-90 active:transition-all active:duration-100 active:ease-in-out z-50 text-xs leading-none"
          onClick={() => this.props.navigate("status-hijau")}
        >
          <p>Hijau</p>
        </button>
        <button
          className="w-12 h-12 rounded-full static border border-white bg-blue-400 text-white capitalize transition-all duration-1000 ease-in-out hover:bg-yellow-500 hover:text-black hover:scale-110 hover:transition-all hover:duration-300 hover:ease-out active:scale-90 active:transition-all active:duration-100 active:ease-in-out z-50 text-xs leading-none"
          onClick={() => this.props.navigate("status-kuning")}
        >
          <p>Kuning</p>
        </button>
        <button
          className="w-12 h-12 rounded-full static border border-white bg-blue-400 text-white capitalize transition-all duration-1000 ease-in-out hover:scale-110 hover:transition-all hover:duration-300 hover:ease-out active:scale-90 active:transition-all active:duration-100 active:ease-in-out z-50 text-xs leading-none"
          onClick={() => this.props.navigate("/")}
        >
          <p>Semua</p>
        </button>
      </div>
    );
  }
}

export default withRouter(SortButtons);
