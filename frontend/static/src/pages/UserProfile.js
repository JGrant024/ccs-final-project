import React from "react";
import { LoadScript } from "@react-google-maps/api";
import Map from "./Map";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


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

 
