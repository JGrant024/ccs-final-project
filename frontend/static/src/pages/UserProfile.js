import React, { useRef, useEffect } from "react";
import { GoogleMap, useLoadScript, useGoogleMap } from "@react-google-maps/api";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

const libraries = ["places"];

function Map() {
  // Loads the map using API KEY
  const latLng = new window.google.maps.LatLng(34.8526, 82.394);

  var mapOptions = {
    center: latLng,
    zoom: 15,
    mapTypeId: window.google.maps.MapTypeId.ROADMAP,
  };

  var infoWindow = new window.google.maps.InfoWindow();

  // var map = new window.google.maps.Map(
  //   document.getElementById("map"),
  //   mapOptions
  // );

  console.log(document.getElementById("map"));

  console.log(mapOptions);
  // const { isLoaded } = useLoadScript({
  //   googleMapsApiKey: "AIzaSyABLxEcVSAK2EWpfE3VSI5zS_3MwFSB_X4",
  //   libraries,
  // });

  // if (!isLoaded) return <div>Loading...</div>;

  return <div id="map">hi</div>;
}

function UserProfile() {
  console.log(document.getElementById("map"));
  return (
    <Wrapper apiKey="AIzaSyABLxEcVSAK2EWpfE3VSI5zS_3MwFSB_X4">
      <div>
        <Map />
      </div>
    </Wrapper>
  );
}

export default UserProfile;
