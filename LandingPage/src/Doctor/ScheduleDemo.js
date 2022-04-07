// import { now } from 'mongoose';
import React, { Component } from 'react'; 
import Demo from "../Assets/Demo.svg"
import './DoctorSignup.css'
class ScheduleDemo extends Component {
    render() {
        return (
            <div className="DoctorSignupForm">
                <div className="DoctorSignupHeading">
                    <p style={{fontWeight:"bold"}}>SCHEDULE A DEMO</p>
                    <p>Fill out the form and one of our Splash experts will give you a spin of our platform.</p>
                </div>
                <div style={{textAlign:"center", marginTop:"15%"}}>
                    <input className="DoctorSignupInput" placeholder="First Name"></input>
                    <br/>
                    <input  className="DoctorSignupInput" type="text" placeholder="Last Name"></input>
                    <br/>
                    <input  className="DoctorSignupInput"  type="text" placeholder="Email"></input>
                    <br />
                    <input className="DoctorSignupInput"  type="text" placeholder="Phone Number"></input>
                    <br />
                    
                    <img style={{marginTop:"5%"}} src={Demo}></img>
                </div>
            </div>
        )
    }
}

export default ScheduleDemo;