import React from "react";
import EmployeesCard from "./EmployeesCard";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import employee1 from "./employee1.png";
import employee2 from "./employee2.png";
import employee3 from "./employee3.png";
import employee4 from "./employee4.png";
import "./Employees.css";

const Employees = () => {
  const EmployeeDetails = [
    {
      name: "Arvind Agrawal",
      image: employee1,
      testimony:
      "I am a front end Web Developer Intern at Jeevitiv. It was a great experience to be at JEEVITIV. I was a little bit anxious about the work  during initial days but colleague helped me and made me comfortable there. I learned a lot over there.",
    },
    {
      name: "Kartik Budhraja",
      image: employee2,
      testimony:
        " JEEVITIV offers a powerfull suite of tools that every team must have  And if I get Stuck, their support team will help out.",
    },
    {
      name: "Arsh Kariya",
      image: employee3,
      testimony:
      "I am a Front-end Developer Intern at Jeevitiv.The flexible work hours and the highly dedicated team of all kinds of  developers is just the thing an intern would want. Jeevitiv, has all of that.",
    },
    {
      name: "Prasannjeet Parasar",
      image: employee4,
      testimony:
      "Working with Jeevitiv will always be special to me. The first time you get  an industry exposure hits different, but the Jeevitiv group has been supportive to its best. The guidance, help and appreciation in the due course has and will continue to motivate me.",
    },
  ];

  const items = EmployeeDetails.map(({ name, image, testimony }, i) => (
    <EmployeesCard
      name={name}
      image={image}
      testimony={testimony}
      data-value={i + 1}
    />
  ));

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1000: { items: 3 },
    1200: { items: 4 },
  };
  return (
    <div className="Employees-container">
      <p className=" title m-1 m-md-2">
        What our employees love about jeevitiv
      </p>
    

      <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        autoPlay
        infinite
        autoPlayInterval={1000}
        animationDuration={1000}
      />
    </div>
  );
};

export default Employees;
