//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import Semaforo from "../js/component/Semaforo.jsx"

// include your styles into the webpack bundle
import "../styles/index.css";

<Semaforo/>

//render your react application
ReactDOM.render(<Semaforo />, document.querySelector("#app"));
