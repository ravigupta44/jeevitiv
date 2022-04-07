import "../Dashboard/pricing/Pricing.css";
import "./PatientBenefit.css";

import Backdrop from "@material-ui/core/Backdrop";
import Button from "../components/UI/Button";
import Fade from "@material-ui/core/Fade";
import Modal from "@material-ui/core/Modal";
import React from "react";
import Support from "../components/UI/Support";
import billing from "../Assets/billing.svg";
import efficient from "../Assets/efficient.svg";
import image1 from "./pic.png";
import image2 from "./interoperability.svg";
import info from "../Assets/information.svg";
import { makeStyles } from "@material-ui/core/styles";
import paper from "../Assets/paperwork.svg";
import patient2 from "../Assets/patient2.svg";
import pres from "../Assets/prescription 1.svg";

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

const PatientBenefit = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <div className="patient_benefit">
      <Support />
      <img src={image1} className="header-img img-fluid w-100" alt="" />

      <div className="doctor-main">
        <div className="patient-heading text-center my-md-4 mx-auto my-2 fs-2 ">
          BENEFITS FOR PATIENTS
        </div>

        <div className="patient-how-this d-md-flex justify-content-center align-items-start mb-2">
          <div className=" patient-how-this__text text-center col-md-6 col-12 p-md-3 p-1 fw-normal ">
            It's not easy to trust an online software which keeps hold of your
            files and data but with us you shouldn't worry a bit. Trusted by
            many others and sticking to all the protocols, come and join us for
            a better healthcare system. Having many facilities to facilitate you
            with, here are many of our features.
          </div>
          <section className=" patient-how-this__video rounded col-md-6 col-12 p-md-3 p-1">
            <iframe
              className="w-100 h-100 rounded"
              title="youtube"
              src="https://www.youtube.com/embed/f3Ebm5WUq_s"
            ></iframe>
          </section>
        </div>

        <div className="patient-row d-md-flex align-items-center p-1 p-md-3 flex-wrap">
          <div className="patient__column col-md-12 p-1 p-md-2  d-flex justify-content-around align-items-center">
            <section className="patient-img ">
              <img src={paper} alt="" />
            </section>
            <div>
              <p className="patient-sub my-2 fs-4">
                ELIMINATING UNECCESSARY AND REDUNDANT PAPERWORK
              </p>
              <div className="patient-card ">
                With the advancing technology and everything getting digital,
                now it's time to let go of your paper files and documents and
                get on our online platform and ease your work.{" "}
              </div>
            </div>
          </div>

          <div className="patient__column col-md-12 col-12 p-1 p-md-2  d-flex justify-content-around align-items-center">
            <section className="patient-img ">
              <img src={billing} alt="" />
            </section>

            <div>
              <p className="patient-sub my-2 fs-4"> EASY PAYMENT GATEWAY </p>
              <div className="patient-card  w-md-75">
                Pay for your doctor bills using our payment API for online
                scheduling and medicine purchasing. Get your payment invoices
                immediately and even share or print your receipts.
              </div>
            </div>
          </div>

          <div className="patient__column col-md-12 col-12 p-1 p-md-2  d-flex justify-content-around align-items-center">
            <section className="patient-img ">
              <img src={efficient} alt="" />
            </section>

            <div>
              <p className="patient-sub my-2 fs-4">USE EFFECIENT</p>
              <div className="patient-card  w-md-75">
                Access our website from either your phone or your desktop at
                home. Use our services from anywhere and everywhere for your
                best health outcomes.
              </div>
            </div>
          </div>

          <div className="patient__column col-md-12 col-12 p-1 p-md-2  d-flex justify-content-around align-items-center">
            <section className="patient-img ">
              <img src={image2} alt="" />
            </section>

            <div>
              <p className="patient-sub my-2 fs-4"> INTEROPERABILITY </p>
              <div className="patient-card  w-md-75">
                Interoperability allows the user to migrate their documents on a
                new platform thus not only depriving EHR platforms to become
                monopolistic but also privileging the user to migrate to a
                better platform whenever they deem fit.
              </div>
            </div>
          </div>

          <div className="patient__column col-md-12 col-12 p-1 p-md-2  d-flex justify-content-around align-items-center">
            <section className="patient-img ">
              <img src={info} alt="" />
            </section>

            <div>
              <p className="patient-sub my-2 fs-4">
                INCREASED CONTROL OF PERSONAL HEALTH INFORMATION
              </p>
              <div className="patient-card  w-md-75">
                Make an account on Jeevitiv and get your own customizable
                portal. Take the power in your hands and manage the authority of
                your digital paperwork handling to the doctor or someone else.
              </div>
            </div>
          </div>

          <div className="patient__column col-md-12 col-12 p-1 p-md-2  d-flex justify-content-around align-items-center">
            <section className="patient-img ">
              <img src={patient2} alt="" />
            </section>

            <div>
              <p className="patient-sub my-2 fs-4">BETTER CARE</p>
              <div className="patient-card  w-md-75">
                A good doctor-patient engagement is the most necessary step in
                the process. With our many compatible and scalable features,
                immerse yourself in the moment and let us take care of you. We
                will meet all your needs. All you have to do is join.
              </div>
            </div>
          </div>

          <div className="patient__column col-md-12 col-12 p-1 p-md-2  d-flex justify-content-around align-items-center">
            <section className="patient-img ">
              <img src={pres} alt="" />
            </section>

            <div>
              <p className="patient-sub my-2 fs-4">TELEHEALTH</p>
              <div className="patient-card  w-md-75">
                Explore new possibilities of healthcare using Telehealth
                services. With the ever changing technology, empower yourself
                with latest features for a better and nourishing tomorrow.
              </div>
            </div>
          </div>
        </div>
        <div>
          <button
            type="button"
            className="sch_demo_btn d-inline "
            onClick={handleOpen}
          >
            REGISTER NOW
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

export default PatientBenefit;
