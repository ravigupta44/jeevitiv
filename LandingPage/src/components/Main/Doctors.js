import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./Doctors.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 3 }
];

function Doctors() {
  return (
    <>
      <div style={{ marginTop: "22px", marginBottom: "22px" }}>
        <h1 style={{ textAlign: "center" }}>Our Doctors </h1>
        <div class="Doctor-border"></div>
        <div className="doctors">
          <Carousel breakPoints={breakPoints}>
            <Item>One</Item>
            <Item>Two</Item>
            <Item>Three</Item>
            <Item>Four</Item>
            <Item>Five</Item>
            <Item>Six</Item>
            <Item>Seven</Item>
            <Item>Eight</Item>
            <Item>Eight</Item>
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default Doctors;
