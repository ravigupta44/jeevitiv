import React from "react";
import "./Patient.css";
import image1 from "./image.png";

const Patient = () => {
  return (
    <>
    
    
      <div class="Patient_row mt-0">
      <a className="overlayyy" href="/PatientBenefit" ></a>
        
        <div class="column1">
          {/* <h2>Column 1</h2> */}
          <p className="Patient_p">
            Eliminating unnecessary and redundant paperwork
          </p><br/>
          <p className="Patient_p">
            Increased control of personal health information
          </p><br/>
          <p className="Patient_p">Easy access to Online Patient Portals</p><br/>
          <p className="Patient_p">Reduction in unnecessary testing</p><br/>
          <p className="Patient_p">More accurate billing</p><br/>
          <p className="Patient_p">Interoperability</p><br/>
          <p className="Patient_p">Faster prescribing</p>
        </div>
        <div class="column2">

          <h2 className="col2_txt">benefits for patient</h2>

        </div>
      </div>
      
    </>
  );
};

export default Patient;
