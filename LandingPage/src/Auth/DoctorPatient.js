import "./DoctorPatient.css";
import "./Login.css";

import { Card } from "react-bootstrap";
import React from "react";
import { useHistory } from "react-router-dom";

const LoginSignup = () => {
  const history = useHistory();
  const btnClick1 = () => {
    history.push("/doctorSignup");
  };
  const btnClick = () => {
    history.push("/patientSignup");
  };

  return (
    <Card className="sign-up-body">
      <Card.Body>
       <div className="loginHeading mt-2">
        {/*   <p style={{ color: "#5f5f5f" }} className="loginSecondHeading">
            Login
          </p>
          <p className="login-heading-divider mx-1">|</p>*/}
          <p className="loginFirstHeading">SignUp</p>
        </div>

        <p className="mt-5 mb-4 auth-subheading"> Sign up as a</p>

        <button className="sign-up-buttons" onClick={btnClick1}>
          <span className="ps-2">Doctor</span>{" "}
        </button>
        <br />
        <br />
        <button className="sign-up-buttons " onClick={btnClick}>
          <span className="ps-2"> patient</span>
        </button>
        {/* <div className="authMain">
            <div className="authHeading">
              <Link to="/login" className="loginSecondHeading">
                Login
              </Link>
              <p className="loginFirstHeading">|</p>
              <p className="loginFirstHeading">SignUp</p>
            </div>

            <p
              style={{
                fontSize: "24px",
                textAlign: "center",
                marginTop: "25%",
                color: "grey",
              }}
            >
              {" "}
              Sign up as a
            </p>
            <div className="authButtonsDiv">
              <Button buttonClicked={this.btnClickk.bind(this)}>DOCTOR</Button>
              <br />
              <Button buttonClicked={this.btnClick.bind(this)}>PATIENT</Button>

            </div>
          </div> */}
      </Card.Body>
    </Card>
  );
};

export default LoginSignup;
