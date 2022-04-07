import React, { useState, useEffect } from "react";
import "./Podcast.css";
import image1 from "./podcastImg.png";
import image2 from "./podcastLeftImg.png";
import Support from "../../UI/Support";
import Button from "../../UI/Button";
import { useHistory } from "react-router-dom";
import playIcon from "./playIcon.png";
import { Link } from "react-router-dom";
import axios from "axios";

function Podcast() {
  const PF = "http://localhost:8080/uploads/";
  const history = useHistory();
  const [visible, setVisible] = useState(5);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("http://localhost:8080/api/podcasts");
      setPosts(res.data);
      //console.log(res.data)
    };
    fetchPosts();
  }, []);

  const loadHandler = () => {
    setVisible((preState) => preState + 3);
  };

  // const handleClick = () => {
  //   history.push(`/Podcast-details/${posts._id}`);
  //   // history.push("/Podcast-details/podcast-Id");
  // };
  return (
    <div className="podcast">
      <Support />
      <img src={image1} alt="podcast" className="img-fluid" />
      <h1 className="my-2 my-md-4">Latest Health Podcasts</h1>
      {posts.slice(0, visible).map((jobs, idx) => (
        <div
          className="podcast_cont d-flex flex-column flex-md-row mx-auto py-3 py-md-4"
          key={idx}
        >
          <div className="Left_part me-md-4">
            {/* <img src={image2} alt="" className="left_img img-fluid"/> */}
            {posts[idx].photo && (
              <img
                src={PF + posts[idx].photo}
                alt="left_img"
                className="left_img img-fluid"
              />
            )}
            <div
              className="border-img"
              onClick={() => window.open(`${posts[idx].link}`, "_blank")}
            >
              <img src={playIcon} className="play-icon" alt="" />
            </div>
          </div>

          <div className="right_part p-0 p-md-2 mt-2 mt-md-0">
            <h2>{posts[idx].title}</h2>
            <p>{posts[idx].desc1}</p>
            <section className="d-flex flex-column flex-md-row information">
              <span className="Podcast__date">
                {new Date(posts[idx].createdAt).toDateString()}
              </span>
              <span className="Podcast__place ms-0 ms-md-5 mb-2 mb-md-0">
                by <span>{posts[idx].username}</span>
              </span>
            </section>
            <button
              className="podcastButton"
              onClick={() => {
                history.push(`/Podcast-details/${posts[idx]._id}`);
              }}
            >
              Read More
            </button>
            {/* <Button className="podcastButton" buttonClicked={handleClick}>
              Read More
            </Button> */}
          </div>
        </div>
      ))}
      <Button buttonClicked={loadHandler}>Load More</Button>

      <div className="news-footer podcast-news-footer w-100 d-flex mb-1 mb-md-3 ps-md-4">
        <Link to="#">News</Link>
        <Link to="#">Events</Link>
        <Link to="/Podcast">Podcasts</Link>
        <Link to="/Blogs">Our Blogs</Link>
      </div>
    </div>
  );
}

export default Podcast;
