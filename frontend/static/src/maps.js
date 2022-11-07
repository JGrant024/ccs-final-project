import {useState,} from "react"; 
import {GoogleMapProvider,
} from "@ubilabs/google-maps-react-hooks"; 

const mapOptions = {
    zoom: 12, 
    center: {
      lat:34.8526,
      lng:82.3940,
    } 
  }

  export default function Index() {

    const [mapContainer, setMapContainer] = useState(null);
  
    return <GoogleMapProvider
      googleMapsApiKey={process.env.NEXT_PUBLIC_MAP_API_KEY}
      options = {mapOptions}
      mapContainer={mapContainer} style={{ height: "100vh"}}
      >
        <div ref={(node) => setMapContainer(node)} />
  
    </GoogleMapProvider>
  }
  


 
<script async
    src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places&callback=initMap">
</script>