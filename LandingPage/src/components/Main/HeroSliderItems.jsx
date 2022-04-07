import React from "react";

const HeroSliderItems = (props) => {
  const item = props;
  const imgSrc = item.src;

  return (
    <div className="slider__item">
      <img src={imgSrc} alt="here will be img" className="heroslider_img" />
    </div>
  );
};

export default HeroSliderItems;
