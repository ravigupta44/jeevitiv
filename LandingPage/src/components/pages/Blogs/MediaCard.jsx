import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "../../UI/Button";
import Typography from "@material-ui/core/Typography";
// import image1 from "./blogg.png";

// import { post } from "request-promise";


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

export default function MediaCard({post}) {
  const PF = "http://localhost:8080/uploads/";
  const classes = useStyles();
  const history = useHistory();

  const handleClick = () =>{
    history.push(`/Blogs_details/${post._id}`);
    //  history.push('/Blogs_details/:blogId');
  };

  return (
    <Card className={classes.root} id="media-Card">
      <CardActionArea>
      <CardMedia className={classes.media} title="Blog Journal">{post.photo && <img  src={PF + post.photo} alt="" />}</CardMedia>
        <CardContent className={classes.BlogContent}>
          <Typography
            style={{ color: "#5F5F5F", fontSize: "12px" }}
            gutterBottom
            variant="h"
            component="h6"
          >
            {new Date(post.createdAt).toDateString()}  {post.username}
          </Typography>
          <Typography
            style={{ color: "#035B96", fontSize: "18px" }}
            gutterBottom
            variant="h5"
            component="h2"
          >{post.title}
          
            {/* Scary Thing That You Don’t Get Enough Sleep */}
          </Typography>
          <Typography
            style={{ color: "#5F5F5F", fontSize: "14px" }}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            
          <pre>{post.desc}</pre>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button buttonClicked={handleClick}>Read More</Button>
        {/* <a href="./Blog.jsx">Read More</a> */}
        
        {/* <Link to="/" className="btn btn-primary">
          Sign up
        </Link> */}
        {/* <Link to='/Blog'>Go to Aboutpage</Link> */}
        {/* <Route exact path="/" component={Blog}/> */}
      </CardActions>
    </Card>
  );
}
