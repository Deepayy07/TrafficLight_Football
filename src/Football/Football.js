import React from "react";
import "./Football.css";
import "animate.css";
import { useState } from "react";
// import { Button } from "react-bootstrap";
import { Button } from "@mui/material";

const Football = () => {
  const [roll1, setRoll1] = useState(false);
  const [bounce1, setBounce1] = useState(false);
  const [drop, setDrop] = useState(false);

  function ballMovement() {
    let football = "animate__animated";

    if (roll1) football = "roll";
    if (bounce1) football = "animate__animated animate__bounce";
    if (drop) football = "animate__animated animate__hinge";
    return football;
  }

  const [bounce, setBounce] = useState(false);
  const [wobble, setWobble] = useState(false);
  const [flip, setFlip] = useState(false);
  const [roll, setRoll] = useState(false);

  function basketballMovement(basketball) {
    // let basketball = "animate__animated";

    if (bounce) basketball = "animate__animated animate__bounce";
    if (wobble) basketball = "animate__animated animate__wobble";
    if (flip) basketball = "animate__animated animate__zoomInDown";
    if (roll) basketball = "";
    return basketball;
  }

  return (
    <>
      <div className="adjuster">
        <img
          className={ballMovement()}
          src="https://freepngimg.com/thumb/football/173572-vector-football-png-file-hd.png"
          alt="Football"
          // we can also add "style attribute and add custom animations" usijg useState.
          // style={{
          //   transform: roll
          //     ? "translate(500px, 0px) rotate(360deg)"
          //     : "translate(0px, 0px) rotate(0deg)",
          // }}
          style={{
            maxWidth: "550px",
          }}
        />

        <img
          className={basketballMovement()}
          src="https://www.nordicbasketball.com/wp-content/uploads/2023/02/WZ3011801XB_0_7_JR_NBA_FAM_LOGO_AUTH_OUTDOOR_BSKT_295_BR.png.cq5dam.web_.1200.1200.jpeg"
          alt="Basketball"
          style={{
            transform: roll ? " translate(-450px, 0px) rotate(-360deg)" : "",
            position: "relative",
            left: "75%",
            top: "1px",
            maxWidth: "550px",
          }}
        />

        <div className="Ground"></div>

        <div className="Buttons">
          <div className="ButtonsInside">
            <Button variant="text" onClick={() => setRoll1(!roll1)}>
              {roll1 ? "Roll Back" : "Roll"}
            </Button>

            <Button variant="text" onClick={() => setBounce1(!bounce1)}>
              {bounce1 ? "Stop Bounce" : "Bounce"}
            </Button>

            <Button variant="text" onClick={() => setDrop(!drop)}>
              {drop ? "Bring back" : "Drop"}
            </Button>
          </div>

          <div
            className="ButtonsInside"
            style={{
              position: "relative", left: "1250%", top: "-20px"
            }}>

            <Button variant="text" onClick={() => setBounce(!bounce)}>
              {bounce ? "Stop Bounce" : "Bounce"}
            </Button>
            <Button variant="text" onClick={() => setWobble(!wobble)}>
              {wobble ? "Stop Wobble" : "Wobble"}
            </Button>
            <Button variant="text" onClick={() => setFlip(!flip)}>
              {flip ? "Stop Flip" : "Flip"}
            </Button>
            <Button variant="text" onClick={() => setRoll(!roll)}>
              {roll ? "Stop Roll" : "Roll"}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Football;
