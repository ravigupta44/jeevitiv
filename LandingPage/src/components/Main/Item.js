import React from "react";
import styled from "styled-components";

function Item() {
  // const images = [{ src: './banner/doc-img.png' }]
  return (
    <DoctorCards>
      <img src="./banner/doc-img.png" />
      <button style={{ background: "none", border: "none" }}>
        {" "}
        <img src="button.png" />
      </button>
    </DoctorCards>
  );
}

export default Item;

const DoctorCards = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 400px;
  width: 75%;
  /* background-color: #00008b; */
  color: #fff;
  margin: 0 15px;
  font-size: 4em;
`;
