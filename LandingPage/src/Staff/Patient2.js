import React, { Component } from 'react'
import "./Patient1.css";
import Header from "../Assets/Header.svg"
import Profile from '../Assets/ProfileIcon.svg'
import Doc from '../Assets/doctorIcon.svg'
import { right } from '@popperjs/core';
import BloodGroup from '../Assets/blood.svg'
import WeightingScale from '../Assets/ws.svg'
import Age from '../Assets/age.svg'
import Height from '../Assets/height.svg'
import calendar from '../Assets/calendar.svg'
import Mail from '../Assets/mail.svg'
import Phone from '../Assets/Phone.svg'
import Home from '../Assets/Home.svg'
class Patient2 extends Component{
    render() {
        return (
            <div className="Patient1Main">
                <div className="Patient1Header">
                    <img className="Patient1HeaderImg" src={Profile}></img>
                </div>
                <div className="Patient1Details">
                    <p>Patient's Name
                    <br/>Gender</p>
                    <p style={{ color: "#035B96" }}>Patient ID</p>
                    <p className="Patient1Doctor">
                        <img style={{marginRight:"5px"}}src={Doc}></img>
                        Dr. XYZ
                    </p>
                </div>
                <div className="Patien1Row1">
                    <div className="Patient1Img1">
                        <img className="Patient1ImgDimension" src={WeightingScale}></img>
                        <span className="Patient1Text">80 Kg</span>
                        <br/>
                        <span className="Patient1Text">Weight</span>
                    </div>
                    <div className="Patient1Img2">
                        <img className="Patient1ImgDimension" src={BloodGroup}></img>
                        <span className="Patient1Text">O+</span>
                        <br />
                        <span className="Patient1Text">Blood group</span>
                    </div>
                    
                </div>
                <div className="Patien1Row1">
                    <div className="Patient1Img1">
                        <img className="Patient1ImgDimension" src={Height}></img>
                        <span className="Patient1Text">151 cm</span>
                        <br/>
                        <span className="Patient1Text">Height</span>
                    </div>
                    <div className="Patient1Img2">
                        <img className="Patient1ImgDimension" src={Age}></img>
                        <span className="Patient1Text">55 Years</span>
                        <br />
                        <span className="Patient1Text">Age</span>
                    </div>
                </div>
                <hr />
                  <div className="Patien1Row2">
                    <div className="Patient1Footer1">
                        <span className="Patient1Text2">Contact Details</span>
                        <br/><br/>
                        <div style={{textAlign:"left",marginLeft:"15%"}}>
                            <p><img style={{marginRight:"2%"}} src={Phone}></img> <span className="Patient1Text">97827872</span></p>
                            <p><img style={{marginRight:"2%"}} src={Mail}></img> <span className="Patient1Text">email@gmail.com</span></p>
                            <p><img style={{marginRight:"2%"}} src={Home}></img> <span className="Patient1Text">Address ghjjkjlkkl</span></p>
                       </div>
                    </div>
                    <div className="Patient1Footer2">
                        <span className="Patient1Text2"> Upcoming Appointments</span>
                        <br /><br />
                        <div style={{textAlign:"left",marginLeft:"15%"}}>
                            <p  ><img style={{marginRight:"2%"}}src={Doc}></img> <span className="Patient1Text">Dr. ob</span></p>
                            <p><img style={{ marginRight: "2%" }} src={calendar}></img> <span className="Patient1Text">12 july </span><br />
                                <span className="Patient1Text" style={{marginLeft:"10%"}}>10 am</span></p>
                        </div>
                    </div>
                </div>
           </div>
           
        )
    }
}

export default Patient2;
