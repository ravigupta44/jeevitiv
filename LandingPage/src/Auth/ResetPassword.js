import React from "react";
import "./ResetPassword.css";
import { Card } from "react-bootstrap";
import Button from "../components/UI/Button";


const ResetOldPasswordLogin = () => {
    const btnClick = (e) =>{
      e.preventDefault()
    }
  
    return (
      <Card className="reset-body p-2 p-md-3">
        <Card.Body>
          <div className="resetHeading ">
            <p className="resetFirstHeading">RESET PASSWORD</p>
          </div>

          <Card.Subtitle className="resetSubHeading my-2">
            Enter your new Password
          </Card.Subtitle>

          <form onSubmit={btnClick}>
            <div className="loginFields">
              <input
                className="user-password"
                type="password"
                placeholder="New Password"
              />
              <input
                className="user-password"
                type="password"
                placeholder="Confirm Password"
              />
            </div>
          </form>
          <Button buttonClicked={btnClick}>Reset</Button>
          
        </Card.Body>
      </Card>
    );
 
}

export default ResetOldPasswordLogin;
