import { useEffect, useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./recommendations.module.css";

function Recommendations(props) {
  const [recommendation, setRecommendation] = useState({});

  <aside className="aside">
    <p className="ContainerTitle"> Recommendations</p>
  </aside>;

  useEffect(() => {
    const mapElement = document.getElementById("map");
    const map = mapElement && new window.google.maps.Map(mapElement);
    const services = new window.google.maps.places.PlacesService(map);

    const getSearchByResults = (results, status) => {
      if (status === "OK") {
        props.setSearchByResults(results);
      } else {
        console.log("somehting went wrong");
      }
    };

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
      name: props.searchByResults[1]?.name,
      rating: props.searchByResults[1]?.rating,
      address: props.searchByResults[1]?.vicinity,
      category: props.searchByResults[1]?.types,
      photo: props.searchByResults[1]?.photos,
    });

    services.nearbySearch(nearbyRequest, getSearchByResults);
  }, [props.setSearchByResults, props.searchByResults, props]);

  return <div id="map"></div>;
}

export default Recommendations;
