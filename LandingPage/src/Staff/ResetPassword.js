import React, { Component } from 'react'
import "./ResetPassword.css";
import Button from "../Assets/continue.svg"


class ResetPassword extends Component{
    render() {
        return (
            <div className="ResetPasswordMain">
                <p className="ResetPasswordHeading">Reset Password</p>
                <div className="ResetPasswordDetails">
                    <p className="ResetPasswordMessage">Enter Staff ID to receive reset password instructions.</p>
                    
                    <form>
                        <div>
                            <label className="ResetPasswordInputLabel">Staff ID</label> <br/>
                            <input className="ResetPasswordInputId" type="email"/>
                        </div>
                       
                        <div className="ResetPasswordSubmit">
                            <img className="ResetPasswordSubmitBtn" src={Button}></img>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default ResetPassword;
