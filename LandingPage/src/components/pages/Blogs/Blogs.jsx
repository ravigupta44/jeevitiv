import React, { useEffect } from "react";
import { useState } from "react";
import "./Blog.css";
import Card from "@material-ui/core/Card";
import { useHistory } from "react-router-dom";
import { makeStyles} from "@material-ui/core/styles";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Support from "../../UI/Support";
import Button from "../../UI/Button";
import axios from "axios";

import { Box } from "@material-ui/core";
import { AiOutlineSearch } from "react-icons/ai";
import MediaCard from "./MediaCard";
import { data } from "cheerio/lib/api/attributes";
// import Pagination from "@material-ui/lab/Pagination";
const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 250
  },
  BlogContent: {
    textAlign: "left"
  }
});
const Blog = () => {
  const [input, setInput] = useState("");
  const PF = "http://localhost:8080/uploads/";
  const classes = useStyles();
  const history = useHistory();
  const [visible, setVisible] = useState(3);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("http://localhost:8080/api/posts");
      setPosts(res.data);
      //console.log(res)
    };
    fetchPosts();
  }, []);

  // const handleClick = () => {
  //   history.push(`/Blogs_details/${posts[idx]._id}`);
  //   //  history.push('/Blogs_details/:blogId');
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const loadHandler = () => {
    setVisible((preState) => preState + 2);
  };
  return (
    <div className="Blog">
      <Support />
      <div className="BlogHeading">BLOGS</div>
      <div className="BlogSub px-md-1 px-5">Read new blogs over here!</div>
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
      {/* <Header /> */}
      {/*<Box display="flex" justifyContent="space-around" flexWrap="wrap">
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
      </Box>
      <div className="events_demobtn">
        <button
          type="button"
          display="flex"
          justifyContent="center"
          className="demo_btn"
        >
          LOAD MORE
        </button>
  </div>*/}
      {/* <Box display="flex" justifyContent="space-around" flexWrap="wrap">
    {[...new Array(13)].slice(0, visible).map((jobs, idx) => (
        <MediaCard key={idx} posts={posts} />
      ))}</Box> */}

      <Box display="flex" justifyContent="space-around" flexWrap="wrap">
        {posts.slice(0, visible).map((jobs, idx) => (
          <Card className={classes.root} id="media-Card" key={idx}>
            <CardActionArea>
              <CardMedia className={classes.media} title="Blog Journal">
                {posts[idx].photo && <img src={PF + posts[idx].photo} alt="" />}
              </CardMedia>
              <CardContent className={classes.BlogContent}>
                <Typography
                  style={{ color: "#5F5F5F", fontSize: "12px" }}
                  gutterBottom
                  variant="h"
                  component="h6"
                >
                  {new Date(posts[idx].createdAt).toDateString()}{" "}
                  {posts[idx].username}
                </Typography>
                <Typography
                  style={{ color: "#035B96", fontSize: "18px" }}
                  gutterBottom
                  variant="h5"
                  component="h2"
                >
                  {posts[idx].title}

                  {/* Scary Thing That You Don’t Get Enough Sleep */}
                </Typography>
                <Typography
                  style={{ color: "#5F5F5F", fontSize: "14px" }}
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  <pre>{posts[idx].desc}</pre>
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <button
                onClick={() => {
                  history.push(`/Blogs_details/${posts[idx]._id}`);
                }}
              >
                Read More
              </button>
              {/* <a href="./Blog.jsx">Read More</a> */}

              {/* <Link to="/" className="btn btn-primary">
          Sign up
        </Link> */}
              {/* <Link to='/Blog'>Go to Aboutpage</Link> */}
              {/* <Route exact path="/" component={Blog}/> */}
            </CardActions>
          </Card>
        ))}
      </Box>

      <Button buttonClicked={loadHandler}>Load More</Button>
      {/* <Pagination count={10} id="pagination" /> */}
      {/* <Footer /> */}
    </div>
  );
};
export default Blog;
