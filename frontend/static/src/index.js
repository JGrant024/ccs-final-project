import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

<script
  async
  src="https://maps.googleapis.com/maps/AIzaSyABLxEcVSAK2EWpfE3VSI5zS_3MwFSB_X4/js?key="
></script>;
<script
  async
  src="https://maps.googleapis.com/maps/api/js?key=AIzaSyABLxEcVSAK2EWpfE3VSI5zS_3MwFSB_X4&libraries=places&callback=initMap"
></script>;

export default function Index() {}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
