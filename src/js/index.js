//import react into the bundle
import React, { useState } from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Modal from "./component/home.jsx";

//render your react application
ReactDOM.render(<Modal />, document.querySelector("#app"));
