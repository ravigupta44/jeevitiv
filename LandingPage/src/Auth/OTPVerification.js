import React from "react";
import Phone from "../Assets/OTP.svg";
import "./Login.css";
import { Card } from "react-bootstrap";
import Button from "../components/UI/Button";
import "./OTP.css";
import { useHistory } from "react-router-dom";

const OTPVerificationLogin = () => {
  const history = useHistory();
  const lastDigit = history.location.search.slice(-3);
  const btnClick = (e) => {
    e.preventDefault()
  };

  return (
    <Card className="login-body p-1 p-md-4">
      <Card.Body>
          <div className="OTPHeading mb-3">OTP Verification</div>
          <p className="OTPsubheading mb-0">Enter the OTP sent to</p>
          <p className="OTPPhoneNumber"> +91-XXXXXXX{`${lastDigit}`}</p>
          <img className="img-fluid mx-auto " alt= '' src={Phone}></img>
          <p className='mt-5'>
            <input className="OTPNumber" type="text"></input>
            <input className="OTPNumber" type="text"></input>
            <input className="OTPNumber" type="text"></input>
            <input className="OTPNumber" type="text"></input>
            <input className="OTPNumber" type="text"></input>
            <input className="OTPNumber" type="text"></input>
          </p>
          <Button buttonClicked={btnClick}>VERIFY</Button>
      </Card.Body>
    </Card>
  );
};

export default OTPVerificationLogin;
