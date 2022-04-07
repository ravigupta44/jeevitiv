import React, { useState } from "react";
import "./Help1.css";
import './Form.css';

function Input(props) {
  return props.field === "input" ? (
    <div className="wrapper">
      <input type={props.type} placeholder={props.placeholder} />
    </div>
  ) : (
      <div className="help-textBox">
         <label className='text-start w-100 mb-1 mb-md-2' htmlFor="scribe">Message</label> 
        <textarea  className='w-100 d-block'rows="6"id='scribe'/>
      </div>
  );
}

export default function Form() {
  const [submitted, setSubmitted] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault()
    // setSubmitted(true);
  };

  return !submitted ? (
    <div className="help_form">
      <h2 className="mb-3 mb-md-3">Can’t find an answer?</h2>
      <div className="contact-container  mb-2 mb-md-3">
        <form id="form " onSubmit={submitHandler}>
          <Input type="text" placeholder="Name" field="input" />
          <Input type="tel" placeholder="Phone number" field="input" />
          <Input type="email" placeholder="Email" field="input" />
         
          <Input type="text" className="form-text" placeholder="Message" field="textarea" />
          
          <button className="form-submit my-2 my-md-3">SUBMIT</button>
        </form>
      </div>
    </div>
  ) : (
    <div className="contact-container">
      <p className="pTag">
        Thanks for your message. <br /> I'll get back to you soon. 😃
      </p>
    </div>
  );
}
