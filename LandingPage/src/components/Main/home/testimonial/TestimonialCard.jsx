import React from "react";
import "./testimonials.css";

export default function TestimonialCard({
  testimony,
  image,
  name,
  work,
  ...rest
}) {
  return (
    <div className="testimonial-card" {...rest}>
      <div className="testimonial-body">
        <div className="testimonial-image">
          <div className="testimonial-details">
            <p>{name}</p>
          </div>
        </div>
        {testimony}
      </div>
    </div>
  );
}
