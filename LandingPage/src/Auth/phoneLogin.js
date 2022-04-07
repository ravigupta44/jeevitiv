import React, { useState } from "react";
import "./Login.css";
import Button from "../components/UI/Button";
import { useHistory, useParams } from "react-router-dom";
import { Card } from "react-bootstrap";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const PhoneLogin = () => {
  const history = useHistory();
  const {user} = useParams()
  const [value, setValue] = useState();
  const btnClick = () => {
    history.push(`/login-OTP-verification/${user}?phoneNo.=${value}`);
  };

  return (
    <Card className="login-body p-1 p-md-4">
      <Card.Body>
        <div className="loginHeading">
          <p className="loginFirstHeading">Login</p>
        </div>

        <Card.Subtitle className="PhoneSubTitle mb-1 mb-md-2">
          Enter your registered mobile number
        </Card.Subtitle>

        <PhoneInput
          className="phoneNo"
          defaultCountry="IN"
          international={true}
          placeholder="Enter phone number"
          value={value}
          onChange={setValue}
        />

        <Card.Text>
          You will receive a text with verification code. Message and data rates
          may apply. The verified phone number can be used to login.
        </Card.Text>
        <Button buttonClicked={btnClick}>CONTINUE</Button>
      </Card.Body>
    </Card>
  );
};

export default PhoneLogin;
