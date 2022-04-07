// import React, { useState } from "react";
// import ReactDOM from "react-dom";
// import Carousel from "react-elastic-carousel";
// import Item from "./Parent_slider_item";
// // import "./styles.css";

// const breakPoints = [
//   { width: 1, itemsToShow: 1 },
//   { width: 550, itemsToShow: 2, itemsToScroll: 2 },
//   { width: 768, itemsToShow: 3 },
//   { width: 1200, itemsToShow: 4 }
// ];

// function ParentSlider() {
//   const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

//   // const addItem = () => {
//   //   const nextItem = Math.max(1, items.length + 1);
//   //   setItems([...items, nextItem]);
//   // };

//   // const removeItem = () => {
//   //   const endRange = Math.max(0, items.length - 1);
//   //   setItems(items.slice(0, endRange));
//   // };

//   return (
//     <div className="Parent_slider">
//       <div className="controls-wrapper">
//         {/* <button onClick={removeItem}>Remove Item</button>
//         <button onClick={addItem}>Add Item</button> */}
//       </div>
//       <hr className="seperator" />
//       <div className="carousel-wrapper">
//         <Carousel breakPoints={breakPoints}>
//           {items.map((item) => (
//             <Item key={item}>{item}</Item>
//           ))}
//         </Carousel>
//       </div>
//     </div>
//   );
// }

// export default ParentSlider;

// New

// import React from "react";
// import OwlCarousel from "react-owl-carousel";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Container, Row, Card, Image } from "react-bootstrap";
// import $ from "jquery";
import "./Parent_slider.css";

// const options = {
//   center: true,
//   responsiveClass: true,
//   responsive: {
//     0: {
//       items: 1
//     },
//     600: {
//       items: 3
//     },
//     1000: {
//       items: 3
//     },
//     1400: {
//       items: 3
//     }
//   }, // Select Item Number
//   autoplay: false,
//   dots: false,
//   nav: true
// };

// function ParentSlider() {
//   $(document).ready(function () {
//     var $owl = $(".owl-carousel");

//     $owl.children().each(function (index) {
//       $(this).attr("data-position", index);
//       // NB: .attr() instead of .data()
//     });

//     $(document).on("click", ".owl-item>div", function () {
//       var $speed = 300; // in ms
//       $owl.trigger("to.owl.carousel", [$(this).data("position"), $speed]);
//     });
//   });

//   return (
//     <Container>
//       <OwlCarousel
//         className="owl-theme owl-theme testimonial-carousel"
//         loop
//         {...options}
//         navElement
//       >
//         <div>
//           <Card className="item card">
//             <div className="card-details">
//               <i className="fas fa-quote-left"></i>
//               <p className="content mb-5 mx-2">
//                 We are excuted to support Dotgo create this innovative and
//                 unique technology, integrated with the Google jibe platform.
//               </p>
//               <Row className="user-details-testimonial">
//                 <h4>Johanna Kollar</h4>
//                 <p>Strategic Development Manager, Google</p>
//                 <Image
//                   roundedCircle
//                   src="https://i.imgur.com/oW8Wpwi.jpg"
//                   className="img-fluid profile-pic"
//                   alt=""
//                 />
//               </Row>
//             </div>
//           </Card>
//         </div>
//         <div>
//           <Card className="item card">
//             <div className="card-details">
//               <i className="fas fa-quote-left"></i>
//               <p className="content mb-5 mx-2">
//                 We are happy to part with Dotgo and offer our subscribers in
//                 Cameroon the experience the experience of RCS.
//               </p>
//               <Row className="user-details-testimonial">
//                 <h4>Marielle Haag</h4>
//                 <p>dsahgashdjhasg</p>
//                 <Image
//                   roundedCircle
//                   src="https://i.imgur.com/gazoShk.jpg"
//                   className="img-fluid profile-pic"
//                   alt=""
//                 />
//               </Row>
//             </div>
//           </Card>
//         </div>
//         <div>
//           <Card className="item card">
//             <div className="card-details">
//               <i className="fas fa-quote-left"></i>
//               <p className="content mb-5 mx-2">
//                 We are happy to part with Dotgo and offer our subscribers in
//                 Cameroon the experience the experience of RCS.
//               </p>
//               <Row className="user-details-testimonial">
//                 <h4>Marielle Haag</h4>
//                 <p>dsahgashdjhasg</p>
//                 <Image
//                   roundedCircle
//                   src="https://i.imgur.com/gazoShk.jpg"
//                   className="img-fluid profile-pic"
//                   alt=""
//                 />
//               </Row>
//             </div>
//           </Card>
//         </div>
//         <div>
//           <Card className="item card">
//             <div className="card-details">
//               <i className="fas fa-quote-left"></i>
//               <p className="content mb-5 mx-2">
//                 We are excuted to support Dotgo create this innovative and
//                 unique technology, integrated with the Google jibe platform.
//               </p>
//               <Row className="user-details-testimonial">
//                 <h4>Johanna Kollar</h4>
//                 <p>Strategic Development Manager, Google</p>
//                 <Image
//                   roundedCircle
//                   src="https://i.imgur.com/oW8Wpwi.jpg"
//                   className="img-fluid profile-pic"
//                   alt=""
//                 />
//               </Row>
//             </div>
//           </Card>
//         </div>
//         <div>
//           <Card className="item card">
//             <div className="card-details">
//               <i className="fas fa-quote-left"></i>
//               <p className="content mb-5 mx-2">
//                 We are happy to part with Dotgo and offer our subscribers in
//                 Cameroon the experience the experience of RCS.
//               </p>
//               <Row className="user-details-testimonial">
//                 <h4>Marielle Haag</h4>
//                 <p>dsahgashdjhasg</p>
//                 <Image
//                   roundedCircle
//                   src="https://i.imgur.com/gazoShk.jpg"
//                   className="img-fluid profile-pic"
//                   alt=""
//                 />
//               </Row>
//             </div>
//           </Card>
//         </div>
//       </OwlCarousel>
//     </Container>
//   );
// }

// export default ParentSlider;

// NEXT
import React, { useState } from "react";
const slideWidth = 30;

const _items = [
  {
    player: {
      title: "Efren Reyes",
      desc:
        'Known as "The Magician", Efren Reyes is well regarded by many professionals as the greatest all around player of all time.',
      image: "https://i.postimg.cc/RhYnBf5m/er-slider.jpg"
    }
  },
  {
    player: {
      title: "Ronnie O'Sullivan",
      desc:
        "Ronald Antonio O'Sullivan is a six-time world champion and is the most successful player in the history of snooker.",
      image: "https://i.postimg.cc/qBGQNc37/ro-slider.jpg"
    }
  },
  {
    player: {
      title: "Shane Van Boening",
      desc:
        'The "South Dakota Kid" is hearing-impaired and uses a hearing aid, but it has not limited his ability.',
      image: "https://i.postimg.cc/cHdMJQKG/svb-slider.jpg"
    }
  },
  {
    player: {
      title: "Mike Sigel",
      desc:
        'Mike Sigel or "Captain Hook" as many like to call him is an American professional pool player with over 108 tournament wins.',
      image: "https://i.postimg.cc/C12h7nZn/ms-1.jpg"
    }
  },
  {
    player: {
      title: "Willie Mosconi",
      desc:
        'Nicknamed "Mr. Pocket Billiards," Willie Mosconi was among the first Billiard Congress of America Hall of Fame inductees.',
      image: "https://i.postimg.cc/NfzMDVHP/willie-mosconi-slider.jpg"
    }
  }
];

const length = _items.length;
_items.push(..._items);

const sleep = (ms = 0) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const createItem = (position, idx) => {
  const item = {
    styles: {
      transform: `translateX(${position * slideWidth}rem)`
    },
    player: _items[idx].player
  };

  switch (position) {
    case length - 1:
    case length + 1:
      item.styles = { ...item.styles, filter: "grayscale(1)" };
      break;
    case length:
      break;
    default:
      item.styles = { ...item.styles };
      break;
  }

  return item;
};

const CarouselSlideItem = ({ pos, idx, activeIdx }) => {
  const item = createItem(pos, idx, activeIdx);

  return (
    <li className="carousel__slide-item" style={item.styles}>
      <div className="carousel__slide-item-img-link">
        <img src={item.player.image} alt={item.player.title} />
      </div>
      <div className="carousel-slide-item__body">
        <h4>{item.player.title}</h4>
        <p>{item.player.desc}</p>
      </div>
    </li>
  );
};

const keys = Array.from(Array(_items.length).keys());

const ParentSlider = () => {
  const [items, setItems] = React.useState(keys);
  const [isTicking, setIsTicking] = React.useState(false);
  const [activeIdx, setActiveIdx] = React.useState(0);
  const bigLength = items.length;

  const prevClick = (jump = 1) => {
    if (!isTicking) {
      setIsTicking(true);
      setItems((prev) => {
        return prev.map((_, i) => prev[(i + jump) % bigLength]);
      });
    }
  };

  const nextClick = (jump = 1) => {
    if (!isTicking) {
      setIsTicking(true);
      setItems((prev) => {
        return prev.map((_, i) => prev[(i - jump + bigLength) % bigLength]);
      });
    }
  };

  const handleDotClick = (idx) => {
    if (idx < activeIdx) prevClick(activeIdx - idx);
    if (idx > activeIdx) nextClick(idx - activeIdx);
  };

  React.useEffect(() => {
    if (isTicking) sleep(300).then(() => setIsTicking(false));
  }, [isTicking]);

  React.useEffect(() => {
    setActiveIdx((length - (items[0] % length)) % length) // prettier-ignore
  }, [items]);

  return (
    <div className="carousel__wrap">
      <div className="carousel__inner">
        <button
          className="carousel__btn carousel__btn--prev"
          onClick={() => prevClick()}
        >
          <i className="carousel__btn-arrow carousel__btn-arrow--left" />
        </button>
        <div className="carousel__container">
          <ul className="carousel__slide-list">
            {items.map((pos, i) => (
              <CarouselSlideItem
                key={i}
                idx={i}
                pos={pos}
                activeIdx={activeIdx}
              />
            ))}
          </ul>
        </div>
        <button
          className="carousel__btn carousel__btn--next"
          onClick={() => nextClick()}
        >
          <i className="carousel__btn-arrow carousel__btn-arrow--right" />
        </button>
        <div className="carousel__dots">
          {items.slice(0, length).map((pos, i) => (
            <button
              key={i}
              onClick={() => handleDotClick(i)}
              className={i === activeIdx ? "dot active" : "dot"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ParentSlider;
// ReactDOM.render(<Carousel />, document.getElementById('root'));
