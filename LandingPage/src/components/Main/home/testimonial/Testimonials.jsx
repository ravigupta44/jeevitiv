import "react-alice-carousel/lib/alice-carousel.css";
import "./testimonials.css";

import {Link, useHistory} from "react-router-dom";

import AliceCarousel from "react-alice-carousel";
import Button from "../../../UI/Button";
import React from "react";
import TestimonialCard from "./TestimonialCard";

const items = [
  <TestimonialCard
    testimony="Now the hold of your documents and their management is in your hands. With an innovative and better interface, the user will have the complete power on how to manage their files and information."
    // image="https://randomuser.me/api/portraits/men/32.jpg"
    name="Patient’s dashboard"
    // work="Freelancer"
    data-value="1"
  />,
  <TestimonialCard
    testimony="Patient-doctor engagement is the most important requirement for any healthy outcome. At Jeevitiv, we dedicate ourselves to fulfill the needs of patients."
    // image="https://randomuser.me/api/portraits/men/42.jpg"
    name="Better patient association"
    // work="Designer"
    data-value="2"
  />,
  <TestimonialCard
    testimony="You'll be notified about your appointment and schedules just on time. With our customizable email and notification system, you can now manage your appointments. "
    //image="https://randomuser.me/api/portraits/women/32.jpg"
    name="Automated alert
    system"
    // work="Store owner"
    data-value="3"
  />,
  <TestimonialCard
    testimony=" No more need to worry about your hospital files and documents. We have them all secure at one place. Save your files, create appointments, manage reports, do the payment and much more."
    // image="https://randomuser.me/api/portraits/women/76.jpg"
    name="Paperless
    environment"
    // work="CEO"
  />,
  <TestimonialCard
    testimony="No more standing in the queues for the payment. With our payment technology, you can now do a safe billing within a few easy steps. Easily create invoices and print and email the receipts."
    // image="https://randomuser.me/api/portraits/men/51.jpg"
    name="Easy payment
    gateway"
    // work="Marketer"
  />,
  <TestimonialCard
    testimony="All your data will be stored in the cloud. No need to worry about losing your documents. We also have your data backups."
    // image="https://randomuser.me/api/portraits/men/51.jpg"
    name="Cloud based storing"
    // work="Marketer"
  />,
  <TestimonialCard
    testimony="With top encrypted infrastructure, your data is highly secured at the data centers. Your data is isolated from another person's data and no need to worry about data breaching."
    // image="https://randomuser.me/api/portraits/men/51.jpg"
    name="High class data security"
    // work="Marketer"
  />,
  <TestimonialCard
    testimony="Want to change the platform or share your files? We allow your files and data to be interoperable for the smooth conjunction."
    // image="https://randomuser.me/api/portraits/men/51.jpg"
    name="Interoperability of data"
    // work="Marketer"
  />,
  <TestimonialCard
    testimony="Keep yourself updated with your lab reports, doctor's notice, blogs, newsletters and the software amends too. We'll send you the notification using email, message or the software for any latest change."
    // image="https://randomuser.me/api/portraits/men/51.jpg"
    name="Daily updates and news"
    // work="Marketer"
  />,
  <TestimonialCard
    testimony="We follow all the rules and guidelines set by the government of India and SNOMED for the EHR management.  Use the standard codes to search for a diagnosis or any medication.
    https://www.snomed.org/"
    // image="https://randomuser.me/api/portraits/men/51.jpg"
    name="A perfect EHR model"
    // work="Marketer"
  />,
];

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1000: {items: 3},
  1200: { items: 4 }
};



export default function App() {
  const history = useHistory();
const btnClick = () =>{
  history.push("/about");
}
  return (
    <>
      <div className="testimonial-container">
        <div className="testimonials-title">Why Choose JEEVITIV?</div>
        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          autoPlay
          infinite
          autoPlayInterval={1000}
          animationDuration={1000}
        />
        {/*<div className="testimonials-btn">
          <p>choose jeevitiv for health care</p>
        </div>*/}
        {/* <Button className="test-btn" buttonClicked={btnClick}>Choose Jeevitiv for Healthcare</Button> */}
        <button className="test-btn" type="button" onClick={btnClick}>Choose Jeevitiv for Healthcare</button>
      </div>
    </>
  );
}
