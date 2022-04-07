import "./About.css";

import Backdrop from "@material-ui/core/Backdrop";
import Button from '../../UI/Button'
import Fade from "@material-ui/core/Fade";
import Modal from "@material-ui/core/Modal";
import React from "react";
import Support from "../../UI/Support";
import image1 from "./aboutUsImage1.png";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(1, 10, 3),
  },
}));

export default function About() {
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
    <div className="about-us">
      <Support />
      <img src={image1} alt="about-us" className="img-fluid" />
      <section className='about-us__Intro my-2'>
      <h1 className= 'my-1 my-md-2'>ABOUT US</h1>
        <p className="px-2 px-md-5"
        >
          Jeevitiv is an EHR (Electronic health record) organization which is an
          all-in-one place for your health related work. We will store all your
          documents and health related data on our cloud database. The data will
          be safe and encrypted and can be only accessed by the designated
          person. Besides that, there are many other helpful features as well.
          You can book an appointment and consult with a specialist online. You
          can use the E- prescribing feature to order the assigned medication.
          Each patient will have their own portal which will be customizable.
          Get your next notification using our alert system or find the next
          healthcare related event happening in your city. We have it all here.
          Come and join us and step towards a better healthy future.
        </p>
      </section>
        <div className="about-us__video my-3 my-md-4">
          <iframe
            border-radius="40px"
            src="https://www.youtube.com/embed/f3Ebm5WUq_s"
            title="YouTube video player"
            frameborder="0"
            className="video-player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      <h2 className="about-us__heading__2 mb-2 mb-md-5">Why Choose JEEVITIV?</h2>

      <fieldset className="field">
        <legend>
          <h2 className="legend_headTxt">
            <span>Patients dashboard</span>
          </h2>
        </legend>
        <p className="field_paraTxt">
          Now the hold of your documents and their management is in your hands.
          With an innovative and better interface, the user will have the
          complete power on how to manage their files and information. With
          patient portal, you can access your medical information, book an
          appointment, do the billing, communicate with the doctors and the
          pharmaceuticals and much more. Your health is now at your fingertips.
        </p>
      </fieldset>
      <fieldset className="field">
        <legend>
          <h2 className="legend_headTxt">
            <span>Better patient association</span>
          </h2>
        </legend>
        <p className="field_paraTxt">
          Patient-doctor engagement is the most important requirement for any
          healthy outcome. At Jeevitiv, we dedicate ourselves to fulfill the
          needs of patients. The active communication between the patients and
          the doctor is our primary motto. Patients can effectively communicate
          with the doctors via the portal, video conferencing, emails and the
          online appointments.
        </p>
      </fieldset>
      <fieldset className="field">
        <legend>
          <h2 className="legend_headTxt">
            <span>Automated alert system</span>
          </h2>
        </legend>
        <p className="field_paraTxt">
          Patient-doctor engagement is the most important requirement for any
          healthy outcome. At Jeevitiv, we dedicate ourselves to fulfill the
          needs of patients. The active communication between the patients and
          the doctor is our primary motto. Patients can effectively communicate
          with the doctors via the portal, video conferencing, emails and the
          online appointments.
        </p>
      </fieldset>
      <fieldset className="field">
        <legend>
          <h2 className="legend_headTxt">
            <span>Paperless environment</span>
          </h2>
        </legend>
        <p className="field_paraTxt">
          With Jeevitiv, we not only bring the electronic mode of documentation
          but much more. No more need to worry about your hospital files and
          documents. We have them all secure at one place. Save your files,
          create appointments, manage reports, do the payment, order your
          medication, talk to your doctor at your home and speed up your
          productivity.
        </p>
      </fieldset>
      <fieldset className="field">
        <legend>
          <h2 className="legend_headTxt">
            <span>Easy payment gateway</span>
          </h2>
        </legend>
        <p className="field_paraTxt">
          No more standing in the queues for the payment. With our payment
          technology, you can now do a safe billing within a few easy steps.
          Easily create invoices and print and email the receipts. View your
          summary before making the payment or even pay later.
        </p>
      </fieldset>
      <div className="abt_demobtn">
        <button type="button" className="about-us__demo__btn" onClick={handleOpen}>
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
  );
}
