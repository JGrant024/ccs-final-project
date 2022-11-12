import { useEffect, useState } from "react";

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
      type: "lodging",
      radius: 1000,
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

  console.log(searchByResults);
  console.log(recommendation);

  return <div id="map"></div>;
}

export default Recommendations;
