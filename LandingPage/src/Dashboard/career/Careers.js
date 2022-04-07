import React, { useState, useEffect } from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import "./Careers.css";
// import JobDetails from "./Careers2";
import Button from "../../components/UI/Button";
import Support from "../../components/UI/Support";
import image1 from "./careers.png";
import { AiOutlineSearch } from "react-icons/ai";
import { Dropdown } from "react-bootstrap";
import Employees from './Employees'
// import SimpleAccordion from "./Careers2";
import {useHistory} from "react-router-dom";
import axios from "axios";

const Careers = () => {
  const history = useHistory();
  const [input, setInput] = useState("");
  const [visible, setVisible] = useState(5);
  const [posts, setPosts] = useState([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [text, setText] = useState("");
 const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
     name,
     email,
     phone,
     portfolio,
     linkedin,
     text,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("http://localhost:8080/api/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.post(
        "http://localhost:8080/careersForm/careers",
        newPost
      );
      console.log(res.data);
      window.location.replace("/careers/" + res.data._id);
    } catch (err) {}
  };




  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("http://localhost:8080/api/careersPage");
      setPosts(res.data);
      //console.log(res.data)
    };
    fetchPosts();
  }, []);


  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };

  const loadHandler = () => {
    setVisible((preState) => preState + 3);
  };

  const formSubmitHandler =(e) => {
    e.preventDefault()
  }
  return (
    <div className="Career">
      <Support />
      <img className="img-fluid w-100" src={image1} alt=''/>
      <div className="CareersHeading">JOB OPENINGS</div>
      <div className="CareersSub px-md-1 px-5">
        Submit your quires here and we will get back to you as soon as possible.
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">
          <AiOutlineSearch size={22} />
        </button>
      </form>
      <div className="Careers__des d-flex mb-md-3 mb-2">
        <span className="Careers__des__heading">Positions Available</span>
        <span className="Careers__des__DropDown d-md-flex text-end">
          <Dropdown className="m-0">
            <Dropdown.Toggle id="dropdown-basic">Sort By</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Internship</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Job</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Experience</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className="m-0">
            <Dropdown.Toggle id="dropdown-basic">Department</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Human Resource</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Marketing</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Developing</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </span>
      </div>
      {posts.slice(0, visible).map((jobs, idx) => (
        <div className="Job-details" key={idx}>
      <Accordion>
        <AccordionSummary className="w-100">
          <div className="PostCard d-md-flex">
            <div className="PostCard__left">
              <h3>{posts[idx].postname}({posts[idx].numberofpost} Posts)</h3>
              <p>{posts[idx].city} - {posts[idx].country}</p>
            </div>
            <p> Posted {new Date(posts[idx].createdAt).toDateString()}</p>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className="Job-details__des p-2 p-md-4">
            <h5 className='mb-0'>Position Description</h5>
            {posts[idx].positiondesc}
            <h5 className='my-2 my-md-4'>{posts[idx].heading1}:</h5>
            <ul>
            <pre>
            {posts[idx].desc1}
            </pre>
            </ul>
            <h5 className='my-2 my-md-4'>{posts[idx].heading2}:</h5>
            <ul>
            <pre>
              {posts[idx].desc2}
            </pre>
            </ul>
            <h5 className='mb-0 mt-2 mt-md-5'>Compensation:</h5>
            {posts[idx].compensationdesc}
            
            <p className='mt-2 mt-md-5'>
              Please provide the following information to start your application
              process:
            </p>
            <form className='Job-details__form m-1 m-md-4 py-2 py-md-4'  onSubmit= {handleSubmit}>
              <input
                className="inputFields"
                type="text"
                placeholder="Full Name"
                onChange={(e) => setName(e.target.value)}
              ></input>
              <input
                className="inputFields"
                type="text"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              ></input>{" "}
              <input
                className="inputFields"
                type="text"
                placeholder="Cell Phone No."
                onChange={(e) => setPhone(e.target.value)}
              ></input>
              <input
                className="inputFields"
                type="text"
                placeholder="LinkedIn"
                onChange={(e) => setLinkedin(e.target.value)}
              ></input>
              <label htmlFor="cv">Attach CV</label>
              <input className="inputFields" id= 'cv'type="file" placeHoler= 'Attach CV' onChange={(e) => setFile(e.target.files[0])}></input>
              <input
                className="inputFields"
                type="text"
                placeholder="Portfolio Link"
            onChange={(e) => setPortfolio(e.target.value)}

              ></input>
              <textarea
                className="inputFields"
                type="text"
                placeholder="Why do you think you are a good fit for this position?"
            onChange={(e) => setText(e.target.value)}
              ></textarea>
              <button>Submit Application </button>
            </form>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
      ))}
      <Button buttonClicked={loadHandler}>Load More</Button>
      <Employees/>
    </div>
  );
};

export default Careers;
{/* <JobDetails key={idx} /> */}