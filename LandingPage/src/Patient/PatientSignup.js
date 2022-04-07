import React, { useState } from "react";

import axios from "axios";
import image from "../Doctor/logo.png";
import image1 from "../Doctor/login.png";
import { useHistory } from "react-router-dom";

const PatientSignup = () => {
  const history = useHistory();
  const port = process.env.PORT || 8080;
  const formSubmitHandler = (e) => {
    e.preventDefault();
    history.push("/login/patient");
  };

  const [user, setUser] = useState({
    name: "",
    gender: "",
    dob: "",
    telephone: "",
    address: "",
    pinCode: "",
    city: "",
    country: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const register = () => {
    const {
      name,
      gender,
      email,
      dob,
      telephone,
      address,
      pinCode,
      city,
      password,
      country,
      reEnterPassword,
    } = user;
    if (
      name &&
      gender &&
      email &&
      dob &&
      telephone &&
      address &&
      pinCode &&
      city &&
      country &&
      password &&
      password === reEnterPassword
    ) {
      axios.post(encodeURI("https://jeevitiv.herokuapp.com"+":" + "/patientSignup"), user).then((res) => {
        alert(res.data.message);
        history.push("/login/patient/email");
      });
    } else {
      alert("invalid input");
    }
  };
  //http://localhost:8080/patientSignup
  // This page css is came from DoctorSignup css file, so no need to add separate css file.
  return (
    <div className="DoctorSignupForm">
      <div className="image_container p-3">
        <img
          src={image}
          className="img-fluid companyLogo my-3 my-md-4"
          alt=""
        />
        <img src={image1} className="img-fluid docSignUpImg" alt="" />
      </div>
      <div className="signUp-form__container">
        <h2 className="signUp-form_heading">Sign up</h2>
        <h4 className="signUp-form_subheading">Create a new account</h4>
        <form onSubmit={formSubmitHandler}>
          <input
            className="Input1"
            type="text"
            name="name"
            value={user.name}
            placeholder="Full Name"
            onChange={handleChange}
          ></input>
          <section className="d-flex ">
            <input
              className="Input1"
              type="text"
              name="gender"
              value={user.gender}
              placeholder="Gender"
              onChange={handleChange}
            ></input>
            <input
              className="Input1"
              type="text"
              name="dob"
              value={user.dob}
              placeholder="Date of Birth"
              onChange={handleChange}
            ></input>
          </section>
          <input
            className="Input1"
            type="text"
            name="email"
            value={user.email}
            placeholder="Email Address"
            onChange={handleChange}
          ></input>
          <input
            className="Input1"
            type="text"
            name="telephone"
            value={user.telephone}
            placeholder="Telephone No."
            onChange={handleChange}
          ></input>
          <section className="d-flex ">
            <input
              className="Input1"
              type="text"
              name="address"
              value={user.address}
              placeholder="Home Address"
              onChange={handleChange}
            ></input>
            <input
              className="Input1"
              type="text"
              name="pinCode"
              value={user.pinCode}
              placeholder="Pin Code"
              onChange={handleChange}
            ></input>
          </section>
          <section className="d-flex ">
            <input
              className="Input1"
              type="text"
              name="city"
              value={user.city}
              placeholder="City"
              onChange={handleChange}
            ></input>
            <input
              className="Input1"
              type="text"
              name="country"
              value={user.country}
              placeholder="Country"
              onChange={handleChange}
            ></input>
          </section>
          <section className="d-md-flex ">
            <input
              className="Input1"
              type="password"
              name="password"
              value={user.password}
              placeholder="Password"
              onChange={handleChange}
            ></input>
            <input
              className="Input1"
              type="password"
              name="reEnterPassword"
              value={user.reEnterPassword}
              placeholder="Confirm Password"
              onChange={handleChange}
            ></input>
          </section>

          <div className="checkbox_container">
            <input type="checkbox" />
            <label>
              I have read and agree with all <span>Term and Conditions.</span>
            </label>
          </div>
          <div className="checkbox_container">
            <input type="checkbox" />
            <label>
              I have read and agree with <span>Privacy Policy.</span>
            </label>
          </div>

          <button className="d-block  rounded-1" onClick={register}>
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default PatientSignup;
