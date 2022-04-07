import React, { Component } from 'react'
import "./Patient1.css";
import "./SignUp.css"
import Profile from '../Assets/ProfileIcon.svg'
class UpdateProfile extends Component{
    render() {
        return (
            <div className="Patient1Main">
                <div className="Patient1Header">
                    <img className="Patient1HeaderImg" src={Profile}></img>
                </div>
                <div className="SignupMain">
              
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
                <div className="SignupSubmit">
                    <button className="SignupSubmitBtn" style={{height:"35px",color:"white"}} >UPDATE</button>
                </div>
               
            </div>
           </div>
           
        )
    }
}

export default UpdateProfile;
