import React from "react";
import Football from "./Football/Football";
import TrafficLight from "./TrafficLight/TrafficLight";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="Container">
      <TrafficLight />
      <Football />
    </div>
  );
}

export default App;
