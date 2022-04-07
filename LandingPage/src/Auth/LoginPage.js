import "./Login.css";

import { Link, useHistory, useParams } from "react-router-dom";
import { MailOutline, Phone } from "@material-ui/icons";

import { Card } from "react-bootstrap";
import React from "react";
import image from "../Assets/loginIcon.svg";

const LoginPage = () => {
  const history = useHistory();
  const { user } = useParams();
  const btnClick1 = () => {
    history.push(`/login/${user}/email`);
  };
  const btnClick = () => {
    history.push(`/login/${user}/phone`);
  };

  return (
    <Card className="login-body">
      <Card.Body>
        <div className="loginHeading mt-2">
          <p className="loginFirstHeading">Login</p>
          <p className="login-heading-divider mx-1">|</p>

          <Link className="loginSecondHeading" to="/signupAsDoctorPatient">
            SignUp{" "}
          </Link>
        </div>

        <img className="img-fluid my-3 mx-auto" src={image}></img>
        <br />
        <br />
        <div>
          <button className="login-buttons" onClick={btnClick1}>
            <MailOutline /> <span className="ps-2">Log in with E-mail</span>{" "}
          </button>
          <br />
          <br />
          <button className="login-buttons " onClick={btnClick}>
            <Phone /> <span className="ps-2"> Log in with Phone number</span>
          </button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default LoginPage;
