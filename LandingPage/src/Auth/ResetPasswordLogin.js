import React from "react";
import "./ResetPassword.css";
import "./Login.css";
import { Card } from "react-bootstrap";
import {useParams, useHistory} from 'react-router-dom'
import Button from "../components/UI/Button";

const ResetPasswordLogin = () => {
  const history = useHistory()
  const {user} = useParams()
  const btnClick = () =>{
    history.push(`/reset-old-password/${user}`);
  }

    return (
      <Card className="reset-body p-2 p-md-3">
        <Card.Body>
          <div className="resetHeading ">
            <p className="resetFirstHeading">RESET PASSWORD</p>
          </div>
          <Card.Subtitle
            className="resetSubHeading my-2"
          >
            Enter your registered email address
          </Card.Subtitle>
          <div className="loginFields">
            <input
              className="user-name mt-5"
              type="email"
              placeholder="Email"
            />
          </div>
          <Button buttonClicked={btnClick}>CONTINUE</Button>
        </Card.Body>
      </Card>
    );
}

export default ResetPasswordLogin;
