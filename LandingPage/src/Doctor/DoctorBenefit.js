import "./doctorb.css";

import Backdrop from "@material-ui/core/Backdrop";
import Button from "../components/UI/Button";
import Fade from "@material-ui/core/Fade";
import Modal from "@material-ui/core/Modal";
import React from "react";
import Support from "../components/UI/Support";
import ePrescribing from "../Assets/e-prescribing.svg";
import efficient from "../Assets/efficient.svg";
import image1 from "./doctorb.png";
import { makeStyles } from "@material-ui/core/styles";
import patient2 from "../Assets/patient2.svg";
import pencil from "../Assets/pencil.svg";
import scalability from "../Assets/scalability.svg";
import security from "../Assets/security.svg";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(1, 10, 3),
    borderRadius: "23px",
  },
}));
const DoctorBenefit = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = (e) => {
    e.preventDefault()
  }
  return (
    <div className="doctor_Benefit mb-1 mb-md-3">
      <Support />
      <img src={image1} className="img-fluid w-100" alt=''/>
      <div className="doctor-main">
        <div className="doctor-heading text-center my-md-4 mx-auto my-3 fs-2 ">
          BENEFITS FOR DOCTORS
        </div>

        <div className="doctor-how-this d-md-flex justify-content-center mb-2">
          <div className=" doctor-how-this__text text-center col-md-5 col-12 p-md-5 p-2 fw-normal ">
            Want to increase your revenue and daily practice? Are you tired of
            all the traditional paperwork and documents handling? Get onboard
            with us and see a huge change in your profession along by reaching
            out to a larger population. Here are the benefits which you'll be
            redeeming by joining us.
          </div>
          <section className=' doctor-how-this__video rounded col-md-7 col-12 p-md-5 p-3'>
            <iframe
              className='w-100 h-100 rounded'
              title='youtube'
              src="https://www.youtube.com/embed/f3Ebm5WUq_s"
            ></iframe>
          </section>
        </div>

        <div className="doctor-row d-md-flex align-items-center flex-wrap">
          <div className="doctor__column col-md-6 col-12 p-2 p-md-4">
            <img src={efficient} className="doctor-img" alt=''/>
            <p className="doctor-sub my-3 fs-4">INCREASED EFFICIENCY</p>
            <div className="doctor-card">
              Make your practice more efficient using our software. Coordinate
              your scheduling and decrease your paperwork load using our cloud
              storage. Jeevitiv is all that you need.{" "}
            </div>
          </div>
          <div className="doctor__column col-md-6 col-12 p-3 p-md-4 ">
            <img src={scalability} className="doctor-img" alt=''/>
            <p className="doctor-sub my-3 fs-4"> SCALABILITY </p>
            <div className="doctor-card">
              Now get your practice more scalable than ever. We are designed
              according to your varying work. Get onboard with us and enlarge
              your practice.
            </div>
          </div>
          <div className="doctor__column col-md-6 col-12 p-3 p-md-4">
            <img src={security} className="doctor-img" alt=''/>
            <p className="doctor-sub my-3 fs-4">SECURITY & SUPPORT</p>
            <div className="doctor-card">
              Keeping the files safe isn't an easy task. No more need to worry
              about it. Jeevitiv is well fetched with all the security measures
              to keep the data secure. We are HIPAA compliant and following all
              the others security protocols. Moreover, our support system is
              available 24/7 for any of your needs.
            </div>
          </div>
          <div className="doctor__column col-md-6 col-12 p-3 p-md-4 ">
            <img src={ePrescribing} className="doctor-img" alt=''/>
            <p className="doctor-sub my-3 fs-4"> E-PRESCRIBING </p>
            <div className="doctor-card">
              No need to write those scribble notes for the medicine
              recommendation. Go digital and use our E-prescribing software to
              prescribe the medication to your patients.
            </div>
          </div>
          <div className="doctor__column col-md-6 col-12 p-3 p-md-4">
            <img src={pencil} className="doctor-img" alt=''/>
            <p className="doctor-sub my-3 fs-4">CUSTOMIZATION</p>
            <div className="doctor-card">
              Work is productive when it is done your way. Customize your portal
              and scheduling the way you want and increase your efficiency.
            </div>
          </div>
          <div className="doctor__column col-md-6 col-12 p-3 p-md-4 ">
            <img src={patient2} className="doctor-img" alt=''/>
            <p className="doctor-sub my-3 fs-4">ENHANCE PATIENT CARE</p>
            <div className="doctor-card">
              EHR offers practitioners and physicians a powerful tool through an
              efficient practice, health management features, better patient
              engagement, better data analysis and an enhanced patient-doctor
              experience. Join with us and step up your game.
            </div>
          </div>
        </div>

        <div>
          <button
            type="button"
            className="sch_demo_btn d-inline "
            onClick={handleOpen}
          >
            SCHEDULE A DEMO
          </button>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <div className=" schedule-form rounded  col-sm-8 col-md-6 col-lg-4 bg bg-light text-center p-3 m-sm-0 m-2">
                <h6 className="schedule-description">Schedule a demo</h6>

                <p>
                  Fill out the form and one of our Splash <br />
                  experts will give you a spin of our platform
                </p>
                <input
                  className="sch-Input"
                  type="text"
                  placeholder="First Name"
                ></input>
                <br />
                <input
                  className="sch-Input"
                  type="text"
                  placeholder="Last Name"
                ></input>
                <br />
                <input
                  className="sch-Input"
                  type="text"
                  placeholder="Email"
                ></input>
                <input
                  className="sch-Input mb-3"
                  type="text"
                  placeholder="Phone no."
                ></input>
                <Button buttonClicked={handleClick}>SEND MESSAGE</Button>
              </div>
            </Fade>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default DoctorBenefit;
