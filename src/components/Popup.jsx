import React from "react";
import { Popup as Info } from "@urbica/react-map-gl";

export class Popup extends React.Component {
  render() {
    const data = this.props.info;
    const [lng, lat] = data.geometry.coordinates;
    return (
      <Info
        longitude={lng}
        latitude={lat}
        closeButton={true}
        closeOnClick={true}
        offset={[0, -15]}
      >
        <div className="flex flex-col gap-2 min-w-[80px]">
          <div>
            <span className="text-blue-400">Nama</span>
            <p className="font-bold text-black text-sm">
              {data.properties.Nama}
            </p>
          </div>
          <div>
            <span className="text-blue-400">Status</span>
            <p className="font-bold text-black text-sm">
              {data.properties.Status}
            </p>
          </div>
          <div>
            <span className="text-blue-400">Angka</span>
            <p className="font-bold text-black text-sm">
              {data.properties.Angka}
            </p>
          </div>
        </div>
      </Info>
    );
  }
}

export default Popup;
