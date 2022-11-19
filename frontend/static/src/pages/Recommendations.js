import { useEffect, useState } from "react"
function Recommendations(props) {
  const [recommendation, setRecommendation] = useState({});
  const [searchByResults, setSearchByResults] = useState([]);

  const getSearchByResults = (results, status) => {
    if (status === "OK") {
      setSearchByResults(results);
    } else {
      console.log("somehting went wrong");
    }
  };

  useEffect(() => {
    const mapElement = document.getElementById("map");
    const map = mapElement && new window.google.maps.Map(mapElement);
    const services = new window.google.maps.places.PlacesService(map);

    const nearbyRequest = {
      location: { lat: 34.8526, lng: -82.394 },
      types: ["spa"],
      radius: 50000,

      // Defines the distance (in meters) within which to return place results. You may bias results to a specified circle by passing a location and a radius parameter. Doing so instructs the Places service to prefer showing results within that circle; results outside of the defined area may still be displayed.

      // The radius will automatically be clamped to a maximum value depending on the type of search and other parameters.

      // Autocomplete: 50,000 meters

      // https://developers.google.com/maps/documentation/places/web-service/autocomplete
    };

    setRecommendation({
      name: searchByResults[1]?.name,
      rating: searchByResults[1]?.rating,
      address: searchByResults[1]?.vicinity,
      category: searchByResults[1]?.types,
      photo: searchByResults[1]?.photos,
    });

    services.nearbySearch(nearbyRequest, getSearchByResults);
  }, [setSearchByResults, searchByResults]);

  console.log(searchByResults.map((x) => console.log(x.name)));
  return <div id="map">
    
  </div>;
}

export default Recommendations;
