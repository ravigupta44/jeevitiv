import React from "react";
// import ReactDOM from "react-dom";

import InfiniteCarousel from "react-leaf-carousel";

function Slide() {
  return (
    <InfiniteCarousel
      breakpoints={[
        {
          breakpoint: 200,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]}
      dots={true}
      showSides={false}
      sidesOpacity={0.5}
      sideSize={0.1}
      slidesToScroll={1}
      slidesToShow={3}
      scrollOnDevice={true}
      lazyLoad={true}
      placeholderImageSrc={
        "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAJABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAECAwT/xAAWAQEBAQAAAAAAAAAAAAAAAAABAAL/2gAMAwEAAhADEAAAAdM6nAMy/wD/xAAcEAACAAcAAAAAAAAAAAAAAAAAAQIEEBESITL/2gAIAQEAAQUCiWL5LbmB0//EABURAQEAAAAAAAAAAAAAAAAAAAEQ/9oACAEDAQE/ASf/xAAVEQEBAAAAAAAAAAAAAAAAAAACEP/aAAgBAgEBPwFT/8QAGxAAAgEFAAAAAAAAAAAAAAAAAAECEBEhMmH/2gAIAQEABj8C6xYubkSFP//EAB0QAQABAwUAAAAAAAAAAAAAAAEAETFhIVFxobH/2gAIAQEAAT8h0AEySveO0ak0GJfyngwsT//aAAwDAQACAAMAAAAQ7x//xAAVEQEBAAAAAAAAAAAAAAAAAAABEP/aAAgBAwEBPxBz/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPxAf/8QAHhABAAICAQUAAAAAAAAAAAAAAREhADEQcYGhwfD/2gAIAQEAAT8QIR4Qwo75CWSneNqG/WEQeuijgtPpvPGz/9k="
      }
    >
      <div>
        <img
          alt=""
          src="https://lineups.imgix.net/srg/township/333_Main_Street_Redwood_City-large-009-Township333Main_0025-1500x999-72dpi.jpg?w=850&h=500&fit=crop&crop=focal"
        />
      </div>
      <div>
        <img
          alt=""
          src="https://lineups.imgix.net/srg/township/333_Main_Street_Redwood_City-large-008-Township333Main_0021-1500x999-72dpi.jpg?w=850&h=500&fit=crop&crop=focal"
        />
      </div>
      <div>
        <img
          alt=""
          src="https://lineups.imgix.net/srg/township/333_Main_Street_Redwood_City-large-005-Township333Main_0015-1500x999-72dpi.jpg?w=850&h=500&fit=crop&crop=focal"
        />
      </div>
      <div>
        <img
          alt=""
          src="https://lineups.imgix.net/srg/township/Club_Dining_Table_2.jpg?w=850&h=500&fit=crop&crop=focal"
        />
      </div>
      <div>
        <img
          alt=""
          src="https://lineups.imgix.net/srg/township/Club_Coffee_Bar.jpg?w=850&h=500&fit=crop&crop=focal"
        />
      </div>
      <div>
        <img
          alt=""
          src="https://lineups.imgix.net/srg/township/Club_Dining_Table.jpg?w=850&h=500&fit=crop&crop=focal"
        />
      </div>
      {/* <div>
      <img
        alt=""
        src="https://lineups.imgix.net/srg/township/Club_Catering_Kitchen.jpg?w=850&h=500&fit=crop&crop=focal"
      />
    </div>
    <div>
      <img
        alt=""
        src="https://lineups.imgix.net/srg/township/BusinessCenter.jpg?w=850&h=500&fit=crop&crop=focal"
      />
    </div>
    <div>
      <img
        alt=""
        src="https://lineups.imgix.net/srg/township/333_Main_Street_Redwood_City-large-056-Township333Main_0151-1500x999-72dpi.jpg?w=850&h=500&fit=crop&crop=focal"
      />
    </div> */}
      {/* <div>
        <img
          alt=""
          src="https://lineups.imgix.net/srg/township/333_Main_Street_Redwood_City-large-004-Township333Main_0012-1500x999-72dpi.jpg?w=850&h=500&fit=crop&crop=focal"
        />
      </div>
      <div>
        <img
          alt=""
          src="https://lineups.imgix.net/srg/township/333_Main_Street_Redwood_City-large-053-Township333Main_0144-1500x999-72dpi.jpg?w=850&h=500&fit=crop&crop=focal"
        />
      </div> */}
    </InfiniteCarousel>
  );
}

export default Slide;
