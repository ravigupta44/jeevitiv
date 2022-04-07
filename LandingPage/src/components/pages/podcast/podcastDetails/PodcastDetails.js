import React, {useState, useEffect} from "react";
import "./podcastDetails.css";
import { mock } from "./podcastData";
import image from "./podcast-details.png";
import Support from "../../../UI/Support";
import playIcon from "../playIcon.png";
import { Link, useHistory, useLocation } from "react-router-dom";
import { IconButton } from "@material-ui/core";
import axios from "axios";
import {
  Facebook,
  Twitter,
  LinkedIn,
} from "@material-ui/icons";

const PodcastDetails = () => {
  const history = useHistory();
  const location = useLocation();
  const [post, setPost] = useState({});
  const PF = "http://localhost:8080/uploads/";
  const path = location.pathname.split("/")[2];
  useEffect(()=>{
    const getPost = async () => {
      const res = await axios.get("http://localhost:8080/api/podcasts/" + path);
      console.log(res.data)
      setPost(res.data);
    };
    getPost()
  },[path]);


  return (
    <div className="podcast-details">
      <Support />
      <div className="podcast-thumbnails">
      {post.photo && (
          <img src={PF + post.photo} alt=""  />
        )}
        {/* <img src={image} className="video-img img-fluid" alt="" /> */}
        <div
          className="border-img"
          onClick={() =>
            window.open(
              `${post.link}`,
              "_blank"
            )
          }
        >
          <img src={playIcon} className="play-icon" alt="" />
        </div>
      </div>
      <div className="podcast-details__head p-0 p-md-2 mt-4 mt-md-2">
        <h2>{post.title}</h2>
        <section className="d-flex flex-column flex-md-row information">
          <span className="Podcast__date">{new Date(post.createdAt).toDateString()}</span>
          <span className="Podcast__place ms-0 ms-md-5 mb-2 mb-md-0">
            by <span>{post.username}</span>
          </span>
        </section>
        <div className="podcast-article mt-1 mt-md-3">
        <h5>{post.heading1}</h5>
        <p className=" mb-md-3">{post.desc1}</p>
        <h5>{post.heading2}</h5>
        <p className=" mb-md-3">{post.desc2}</p>
        <h5>{post.heading3}</h5>
        <p className=" mb-md-3">{post.desc3}</p>
          {/* {mock.map(({ heading, content }) => (
            <>
              <h5>{heading}</h5>
              <p className=" mb-md-3">{content}</p>
            </>
          ))} */}
        </div>
        <div className="news-footer podcast-details-news-footer w-100 d-flex flex-column flex-md-row mb-1 mb-md-3">
        <section className="d-flex podcast-social-media w-100 justify-content-start align-items-center">
          <span className='me-1'> SHARE</span>
          <li
            className="podcast-social-media-icons"
            onClick={() =>
              window.open(
                "https://www.facebook.com/Jeevitiv-103368022000583",
                "_blank"
              )
            }
          >
            <IconButton>
              <Facebook />
            </IconButton>
          </li>
          <li
            className="podcast-social-media-icons"
            onClick={() =>
              window.open("https://twitter.com/jeevitiv", "_blank")
            }
          >
            <IconButton>
              <Twitter />
            </IconButton>
          </li>
         
          <li
            className="podcast-social-media-icons"
            onClick={() =>
              window.open("https://in.linkedin.com/company/jeevitiv", "_blank")
            }
          >
            <IconButton>
              <LinkedIn />
            </IconButton>
          </li>
        </section>
        <div className="child-news-footer w-100 d-md-flex justify-content-end my-2 my-md-0">
          <Link to="#">News</Link>
          <Link to="#">Events</Link>
          <Link to="/Podcast">Podcasts</Link>
          <Link to="/Blogs">Our Blogs</Link>
        </div>
      </div>
      </div>

      
    </div>
  );
};

export default PodcastDetails;
