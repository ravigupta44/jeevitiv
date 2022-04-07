import React, { Component } from 'react'; 
import './Appointment.css'
import Button from  '../Assets/bookAppointmentButton.svg'


class Appointment extends Component {
    constructor() {
        super()
        this.state = {
            doctors: [ "Doctor1", "Doctor2", "Doctor3"],
            departments: [ "department1", "department2", "department3"],
        }
    }


    render() {
        const {doctors, departments} = this.state;

        return (
            <>
                <div className="bookMain">
                    <p className="bookHeading">BOOK AN APPOINTMENT</p>
                    <p className="bookSubHeading">Fill the details below</p>
                    <div className="details">
                        <form>
                            <div style={{ textAlign: "center" }}>
                                <input className="bookInput1" type="text" placeholder=" Enter Location"></input><br/>
                                <input className="bookInput2" type="text" placeholder=" Search Doctors , Hospitals, Clinics"></input><br />
                                <input className="bookInput3" type="date" ></input>
                            </div>
                            <div className="bookButtonDiv">
                                <img  className="bookButton" src={Button}></img>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </>
        )
    }
}

export default Appointment;