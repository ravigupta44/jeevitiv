import "./Hero.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Backdrop from "@material-ui/core/Backdrop";
import Button from "../../../UI/Button";
import { Carousel } from 'react-bootstrap';
import Fade from "@material-ui/core/Fade";
import Modal from "@material-ui/core/Modal";
import React from "react";
import image1 from "./carousal.png";
import image2 from "./carousal2.png";
import { makeStyles } from "@material-ui/core/styles";

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


const CarouselContainer = () => {
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
    <section className='hero'>
    
    <Carousel fade={true} pause={false} controls={false} indicators={true}  style={{marginTop:"5rem", background: 'rgba(0,0,0,0.2)', borderRadius: '0px'}} variant='dark'>
      <Carousel.Item interval={3000}>
        <img
          className=" w-100 img-fluid"
          src={image1} 
          alt="First slide"
        />
       
      </Carousel.Item>
     <Carousel.Item interval={3000}>
        <img
          className="w-100 img-fluid"
          src={image2} 
          alt="second slide"
        />
        
  </Carousel.Item>
    </Carousel>
    <button onClick={handleOpen}>Register Now</button>
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
    </section>
  )
}

export default CarouselContainer;
