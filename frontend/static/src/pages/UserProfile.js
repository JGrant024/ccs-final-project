import React from "react";
import { LoadScript } from "@react-google-maps/api";
import Map from "./Map";

const mapContainerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: 34.8526,
  lng: -82.394,
};

function UserMap() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyABLxEcVSAK2EWpfE3VSI5zS_3MwFSB_X4">
      <Map mapContainerStyle={mapContainerStyle} center={center} zoom={10} />
    </LoadScript>
  );
}

// export default React.memo(MyComponent)

export default UserMap;
