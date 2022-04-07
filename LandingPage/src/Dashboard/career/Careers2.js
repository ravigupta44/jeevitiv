import React, {useState, useEffect} from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import "./Careers.css";
import {useHistory, useLocation} from "react-router-dom";
import axios from "axios";

function SimpleAccordion({post}) {

  const formSubmitHandler =(e) => {
    e.preventDefault()
  }
  return (
    <div className="Job-details">
      <Accordion>
        <AccordionSummary className="w-100">
          <div className="PostCard d-md-flex">
            <div className="PostCard__left">
              <h3>{post.postname}({post.numberofpost} Posts)</h3>
              <p>{post.city} - {post.country}</p>
            </div>
            <p> Posted {new Date(post.createdAt).toDateString()}</p>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className="Job-details__des p-2 p-md-4">
            <h5 className='mb-0'>Position Description</h5>
            {post.positiondesc}
            <h5 className='my-2 my-md-4'>{post.heading1}:</h5>
            <ul>
            <pre>
            {post.desc1}
            </pre>
            </ul>
            <h5 className='my-2 my-md-4'>{post.heading2}:</h5>
            <ul>
            <pre>
              {post.desc2}
            </pre>
            </ul>
            <h5 className='mb-0 mt-2 mt-md-5'>Compensation:</h5>
            {post.compensationdesc}
            
            <p className='mt-2 mt-md-5'>
              Please provide the following information to start your application
              process:
            </p>
            <form className='Job-details__form m-1 m-md-4 py-2 py-md-4'  onSubmit= {formSubmitHandler}>
              <input
                className="inputFields"
                type="text"
                placeholder="Full Name"
              ></input>
              <input
                className="inputFields"
                type="text"
                placeholder="Email"
              ></input>{" "}
              <input
                className="inputFields"
                type="text"
                placeholder="Cell Phone No."
              ></input>
              <input
                className="inputFields"
                type="text"
                placeholder="LinkedIn"
              ></input>
              <label htmlFor="cv">Attach CV</label>
              <input className="inputFields" id= 'cv'type="file" placeHoler= 'Attach CV'></input>
              <input
                className="inputFields"
                type="text"
                placeholder="Portfolio Link"
              ></input>
              <textarea
                className="inputFields"
                type="text"
                placeholder="Why do you think you are a good fit for this position?"
              ></textarea>
              <button>Submit Application </button>
            </form>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default SimpleAccordion;
