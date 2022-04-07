import React from "react";
import SliderItem from "./HeroSliderItems";

class HeroSlider extends React.Component {
  constructor(props) {
    super(props);

    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);

    this.state = {
      images: props.data,
      currentIndex: 0,
      translateValue: 0
    };
  }

  render() {
    const sliderItems = this.state.images.map(function (item, index) {
      return <SliderItem key={`slider-item` + index} {...item} />;
    });

    return (
      <div className="slider">
        {/* <span className="slider__nav" onClick={this.prevSlide}>
          &larr;
        </span>
        <span className="slider__nav" onClick={this.nextSlide}>
          &rarr;
        </span> */}
        <div
          className="slider__items"
          style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: "transform ease-out 0.45s"
          }}
        >
          {[sliderItems]}
        </div>
        <span className="slider__nav" onClick={this.prevSlide}>
          &larr;
        </span>
        <span className="slider__nav" onClick={this.nextSlide}>
          &rarr;
        </span>
      </div>
    );
  }

  /**
   * Перейти к предыдущему слайду
   */
  prevSlide() {
    if (this.state.currentIndex === 0) {
      return;
    }

    this.setState((prevState) => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + this.slideWidth()
    }));
  }

  /**
   * Перейти к следующему слайду
   */
  nextSlide() {
    if (this.state.currentIndex === this.state.images.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      });
    }

    this.setState((prevState) => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -this.slideWidth()
    }));
  }

  /**
   * Рассчитать ширину слайда
   */
  slideWidth() {
    return document.querySelector(".slider__item").clientWidth;
  }
}

export default HeroSlider;
