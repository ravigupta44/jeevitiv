import React, { Component } from 'react'
import "./SignUp.css";
import Button from "../Assets/SigninStaff.svg"


class SignUp extends Component{
    render() {
        return (
            <div className="SignupMain">
                <p className="SignupHeading">Sign Up</p>
                <div className="SignupForm">
                    <div className="SignupInput">
                        <label className="SignupInputLabel">First Name</label> <br/>
                        <input className="SignupInputId" type="text"/>
                    </div>
                    <div className="SignupInput">
                        <label className="SignupInputLabel">Last Name</label> <br/>
                        <input className="SignupInputId" type="text"/>
                    </div>
                </div>
                <div className="SignupForm">
                    <div className="SignupInput">
                        <label className="SignupInputLabel">Email</label> <br/>
                        <input className="SignupInputId" type="email"/>
                    </div>
                    <div className="SignupInput">
                        <label className="SignupInputLabel">Phone Number</label> <br/>
                        <input className="SignupInputId" type="text"/>
                    </div>
                </div>

                <div className="SignupForm">
                    <div className="SignupInput">
                        <label className="SignupInputLabel">Date Of Birth</label> <br/>
                        <input className="SignupInputId" type="date"/>
                    </div>
                    <div className="SignupInput">
                        <label className="SignupInputLabel">Gender</label> <br />
                        <select  className="SignupInputId" >
                            <option value="" disabled selected></option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Prefer Not to Say">Prefer Not to Say</option>
                        </select>    
                    </div>
                </div>
            
                <div className="SignupID">
                    <label className="SignupInputLabel">Choose ID Proof</label> <br />
                    <select  className="SignupInputId" >
                        <option value="" disabled selected></option>
                        <option value="Aadhar">Aadhar Card</option>
                        <option value="PAN">PAN Card</option>
                        <option value="Driving License">Voter ID</option>
                    </select>
                    <input className="SignupInputId" style={{border:"none"}} type="file"/>
                </div>
               
                <div className="SignupForm">
                    <div className="SignupAddress">
                        <label className="SignupInputLabel">Address</label> <br/>
                        <input className="SignupInputId" type="text"/>
                    </div>
                </div>
                

                <div className="SignupFormLastRow">
                    <div className="SignupInput">
                        <label className="SignupInputLabel">PIN Code</label> <br/>
                        <input className="SignupInputId" type="text"/>
                    </div>
                    <div className="SignupInput">
                        <label className="SignupInputLabel">State</label> <br/>
                        <input className="SignupInputId" type="text"/>
                    </div>
                    <div className="SignupInput">
                        <label className="SignupInputLabel">Country</label> <br/>
                        <input className="SignupInputId" type="text"/>
                    </div>
                </div>
                <div className="SignupCheckbox">
                    <input type="checkbox" />
                    <label style={{ display:"flex",flexDirection:"row",marginLeft: "2%" }}>
                        <p>I agree with </p>
                        <p style={{
                            color: "#035b96" ,marginLeft:"6px"}}>Terms and Condition</p>
                    </label>
                </div>
                <div className="SignupCheckbox">
                    <input type="checkbox" />
                    <label  style={{marginLeft:"2%"}}>Remember Me</label>
                </div>
                <div className="SignupSubmit">
                    <img className="SignupSubmitBtn" src={Button}></img>
                </div>
              
            </div>
        )
    }
}

export default SignUp;
