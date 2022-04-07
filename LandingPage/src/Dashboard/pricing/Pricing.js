import React from "react";
import { Link } from "react-router-dom";
import pricing from "../../Assets/PricingBg.svg";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "../../components/UI/Button";
import paper from "../../Assets/paperwork.svg"
import billing from "../../Assets/billing.svg"
import efficient from "../../Assets/efficient.svg"
import patient2 from "../../Assets/patient2.svg"
import pres from "../../Assets/prescription 1.svg"
import info from "../../Assets/information.svg"
import image2 from "../../Patient/interoperability.svg"
import Testimonials from "../../components/Main/home/testimonial/Testimonials";
import "./Pricing.css";

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
const Pricing = () => {
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
    <div className="pricing w-100">
      <div className="PricingTop w-100">
        <div className="PricingTop__img w-100">
          <img src={pricing} alt="" className="img-fluid" />
        </div>
        <p>PLANS & PRICING</p>
        <button onClick={handleOpen}>REQUEST PRICING PLAN</button>
      </div>
      <div className="PricingHeading text-center mx-auto mt-2">
        HOW THIS WORKS
      </div>
      <div className="pricing_row d-md-flex justify-content-between align-items-center">
        <div className="pricing_col1">
          <h2 className="pricing_col1_h2 p-2 p-md-0">
            <p className='mb-1'>Jeevitiv EHR, Modern Foot & Ankle</p> With Jeevitiv EHR,
            Modern Foot & Ankle is tackling the idea of delivering modern
            patient care and hope to be able to use this foundation for
            expansion.
          </h2>
          <div>
            <button
              type="button"
              className="pricing_demo_btn d-inline"
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
                <div className=" pricing-form rounded  col-sm-8 col-md-6 col-lg-4 bg bg-light text-center p-1 m-sm-0 m-2">
                  <h6 className="pricing-description">Schedule a demo</h6>

                  <p>
                    Fill out the form and one of our Splash <br />
                    experts will give you a spin of our platform
                  </p>
                  <input
                    className="pricing-Input"
                    type="text"
                    placeholder="First Name"
                  ></input>
                  <br />
                  <input
                    className="pricing-Input"
                    type="text"
                    placeholder="Last Name"
                  ></input>
                  <br />
                  <input
                    className="pricing-Input"
                    type="text"
                    placeholder="Email"
                  ></input>
                  <input
                    className="pricing-Input mb-3"
                    type="text"
                    placeholder="Phone no."
                  ></input>
                  <Button buttonClicked={handleClick}>SEND MESSAGE</Button>
                </div>
              </Fade>
            </Modal>
          </div>
        </div>
        <div className="pricing_col2">
          <iframe
            src="https://www.youtube.com/embed/n69ODVIZgrw"
            title="YouTube video player"
            frameBorder="0"
            className="video-player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <Testimonials />


      {/* These same contents used in patient-benefit page, so we don't need to give separate class to these content */}
      <div className="patient-row d-md-flex align-items-center p-1 p-md-3 flex-wrap">
          
          <div className="patient__column col-md-12 p-1 p-md-2  d-flex justify-content-around align-items-center">
            <section className="patient-img " >
              <img src={paper} alt=''/>
            </section>
            <div>
              <p className="patient-sub my-2 fs-4">ELIMINATING UNECCESSARY AND REDUNDANT PAPERWORK</p>
              <div className="patient-card ">
                    With the advancing technology and everything getting digital,
                    now it's time to let go of your paper files and documents and
                    get on our online platform and ease your work.{" "}
              </div>
            </div>
          </div>

          <div className="patient__column col-md-12 col-12 p-1 p-md-2  d-flex justify-content-around align-items-center">
          <section className="patient-img " >
              <img src={billing} alt=''/>
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
          <section className="patient-img " >
              <img src={efficient} alt=''/>
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
          <section className="patient-img " >
              <img src={image2} alt=''/>
            </section>

            <div>
              <p className="patient-sub my-2 fs-4"> INTEROPERABILITY </p>
              <div className="patient-card  w-md-75">
                Interoperability allows the user to migrate their documents on
                a new platform thus not only depriving EHR platforms to become
                monopolistic but also privileging the user to migrate to a
                better platform whenever they deem fit.
              </div>
            </div>
          </div>

          <div className="patient__column col-md-12 col-12 p-1 p-md-2  d-flex justify-content-around align-items-center">
          <section className="patient-img " >
              <img src={info} alt=''/>
            </section>

            <div>
              <p className="patient-sub my-2 fs-4">INCREASED CONTROL OF PERSONAL HEALTH INFORMATION</p>
              <div className="patient-card  w-md-75">
                  Make an account on Jeevitiv and get your own customizable
                  portal. Take the power in your hands and manage the authority
                  of your digital paperwork handling to the doctor or someone
                  else.
              </div>
            </div>
          </div>

          <div className="patient__column col-md-12 col-12 p-1 p-md-2  d-flex justify-content-around align-items-center">
          <section className="patient-img " >
              <img src={patient2} alt=''/>
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
          <section className="patient-img " >
              <img src={pres} alt=''/>
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


        {/* Because these contents and its styling is same as podcast news footer, so we did not change its class Name */}
        <div className="news-footer podcast-news-footer w-100 d-flex mb-1 mb-md-3 ps-md-4">
        <Link to='#'>News</Link>
        <Link to='#'>Events</Link>
        <Link to='/Podcast'>Podcasts</Link>
        <Link to='/Blogs'>Our Blogs</Link>
      </div>
    </div>
  );
};

export default Pricing;
