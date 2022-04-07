import "./Scheduler.css";
import "./Schedule_demo.css";

import Backdrop from "@material-ui/core/Backdrop";
import Button from "../../../UI/Button";
import Fade from "@material-ui/core/Fade";
import Modal from "@material-ui/core/Modal";
import React from "react";
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

const Scheduler = () => {
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
    <div className="sch_row d-md-flex justify-content-between align-items-center">
      <div className="sch_col1">
        <h2 className="sch_col1_h2">
          Experience a new healthier way of life. <br />
          Be a part of us and feel the change.
          <br />
          <br /> Schedule a demo with us.
        </h2>
        <div>
          <button
            type="button"
            className="sch_demo_btn d-inline"
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
      <div className="sche_col2"> 
        <iframe
          src="https://www.youtube.com/embed/f3Ebm5WUq_s"
          title="YouTube video player"
          frameBorder="0"
          className="video-player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Scheduler;
