import { useState } from "react";
import { GoogleMap } from "@react-google-maps/api";

function Map(props) {
  const [mapContainer, setMapContainer] = useState(null);

  return (
    <GoogleMap
      mapContainerStyle={props.mapContainerStyle}
      center={props.center}
      zoom={props.zoom}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  );
}

export default Map;

