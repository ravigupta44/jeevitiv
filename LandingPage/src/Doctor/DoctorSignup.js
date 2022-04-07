import React, { useState } from "react";
import "./DoctorSignup.css";
import image1 from "./login.png";
import image from "./logo.png";
import { useHistory } from "react-router-dom";
import axios from "axios";

const DoctorSignup = () => {
  const history = useHistory();
  const port = process.env.PORT || 8080;
  const formSubmitHandler = (e) => {
    e.preventDefault();
    history.push("/login/doctor");
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
      axios
        .post(encodeURI("http://localhost:8080/doctorSignupPage/doctorSignup"), user)
        .then((res) => {
          alert(res.data.message);
          console.log(res.data)
          history.push("/login/doctor/email");
        });
    } else {
      alert("invalid input");
    }
  };
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
        <h2 className="signUp-form_heading">Sign up as a Doctor</h2>
        <h4 className="signUp-form_subheading">Create a new account</h4>
        <form onSubmit={formSubmitHandler}>
          <input
            className="Input1"
            type="text"
            name="name"
            placeholder="Full Name"
            value={user.name}
            onChange={handleChange}
          ></input>
          <section className="d-flex ">
            <input
              className="Input1"
              type="text"
              name="gender"
              placeholder="Gender"
              value={user.gender}
              onChange={handleChange}
            ></input>
            <input
              className="Input1"
              type="text"
              name="dob"
              placeholder="Date of Birth"
              value={user.dob}
              onChange={handleChange}
            ></input>
          </section>
          <input
            className="Input1"
            type="text"
            name="email"
            placeholder="Email Address"
            value={user.email}
            onChange={handleChange}
          ></input>
          <input
            className="Input1"
            type="text"
            name="telephone"
            placeholder="Telephone No."
            value={user.telephone}
            onChange={handleChange}
          ></input>
          <section className="d-flex ">
            <input
              className="Input1"
              type="text"
              name="address"
              placeholder="Home Address"
              value={user.address}
              onChange={handleChange}
            ></input>
            <input
              className="Input1"
              type="text"
              name="pinCode"
              placeholder="Pin Code"
              value={user.pinCode}
              onChange={handleChange}
            ></input>
          </section>
          <section className="d-flex ">
            <input
              className="Input1"
              type="text"
              name="city"
              placeholder="City"
              value={user.city}
              onChange={handleChange}
            ></input>
            <input
              className="Input1"
              type="text"
              name="country"
              placeholder="Country"
              value={user.country}
              onChange={handleChange}
            ></input>
          </section>

          {/* <input
            className="Input1"
            type="text"
            placeholder="Hospital working with"
            value={user.telephone}
               onChange={handleChange}
          ></input> */}
          <section className="d-md-flex ">
            <input
              className="Input1"
              type="password"
              name="password"
              placeholder="Password"
              value={user.password}
              onChange={handleChange}
            ></input>
            <input
              className="Input1"
              type="password"
              name="reEnterPassword"
              placeholder="Confirm Password"
              value={user.reEnterPassword}
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

export default DoctorSignup;
