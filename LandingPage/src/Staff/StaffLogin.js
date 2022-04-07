import React, { Component } from 'react'
import "./StaffLogin.css";
import Button from "../Assets/SigninStaff.svg"


class StaffLogin extends Component{
    render() {
        return (
            <div className="staffLoginMain">
                <p className="staffLoginHeading">Log In</p>
                <div className="staffLoginDetails">
                    <form>
                        <div>
                            <label className="staffLoginInputLabel">Staff ID</label> <br/>
                            <input className="staffLoginInputId" type="email"/>
                        </div>
                        <div>
                            <label className="staffLoginInputLabel">Password</label> <br/>
                            <input className="staffLoginInputPass" type="password"></input> 
                        </div>
                        <div class="form-group form-check">
                            <input className="staffLoginCheckbox" type="checkbox" />
                            <label className="staffLoginInputLabel" style={{marginTop: "5%"}}>Remember Me</label>
                            <label className="staffLoginInputLabel" style={{marginTop: "5%", float: "right", marginRight: "3%"}}>Forgot Password?</label>
                        </div>
                        <div className="staffLoginSubmit">
                            <img className="staffLoginSubmitBtn" src={Button}></img>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default StaffLogin;
