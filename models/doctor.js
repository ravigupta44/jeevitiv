import mongoose from 'mongoose';

const { schema } = mongoose;

const doctorSchema = newSchema({
  /*  doctor_id: { type: String, required: [true, "doctor ID is required"] },
    hospital_working_in: { type: String },
    doctorSpecialist: { type: String, required: [true, "Doctor Specialist is required"] },
    doctor_about: {
        type: String, required: [true, "Information about a doctor is required"]
    },
    phone: {
        type: { Number, required: [true, "doctor number is required"] },

    },
    email: {
        type: { String, required: [true, "email is required"] }
    }*/
    
    name: String,
    email: String,
    phone: String,
    age: Number,
    dob: Number,
    location: String,
    Gender: String,
    hospital_working_in: String,
    Address: String,
    
    

});