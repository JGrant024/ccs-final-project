import React from "react";
import { LoadScript } from "@react-google-maps/api";
import Recommendations from "./Recommendations";
import { Sidebar } from "../components/Sidebar/Sidebar";

const mapContainerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: 34.8526,
  lng: -82.394,
};

const libraries = ["places"];

function UserMap() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyABLxEcVSAK2EWpfE3VSI5zS_3MwFSB_X4"
      libraries={libraries}
    >
      <Sidebar />
      <Recommendations />
      <div>Hey!</div>
    </LoadScript>
  );
}

// export default React.memo(MyComponent)

export default UserMap;
