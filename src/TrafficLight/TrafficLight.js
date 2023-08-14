import React, { useEffect, useState } from "react";
import "./TrafficLight.css";

export function TrafficLight() {
  // `` => backtick/ template Literal

  const [on, setOn] = useState("green");
  const [date, setDate] = useState(new Date())

  function classNameFor(color) {
    return `circle ${on === color ? "on" : ""} `;
  }


  useEffect(() => {
    let interval = setInterval(() => {
      switchLight(on);
    }, 2000);
    return () => clearInterval(interval);
  }, [on]);


  useEffect(() => {
    let interval = setInterval(() => {
      setDate(new Date())
    }, 1000)
    return (() => clearInterval(interval))
  }, [])


  function switchLight(on) {
    if (on === "green")       setOn("red");
    else if (on === "red")    setOn("orange");
    else if (on === "orange") setOn("green");
  }

  return (
    
    <div className="container">
      <div className="display">
        <div className={classNameFor("red")} id="red"></div>
        <div className={classNameFor("orange")} id="orange"></div>
        <div className={classNameFor("green")} id="green"></div>
      </div>

      <div className="pole"> </div>
      <div className="ground"> </div>

      {date.getHours()}:
      {date.getMinutes()}:
      {date.getSeconds()}
    </div>

  );
}
export default TrafficLight;