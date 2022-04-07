import React from "react";
import {
  makeStyles,
  ThemeProvider,
  createTheme
} from "@material-ui/core/styles";
import Box from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { blue, green } from "@material-ui/core/colors";

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 250,
    position: "relative"
  },
  mediacontent: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  }
});

const theme = createTheme({
  // overrides: {
  //   MuiCssBaseline: {
  //     "@global": {
  //       body: {
  //         background:
  //           "linear-gradient(180deg, rgba(255, 255, 255, 0) 26.56%, #035B96 76.56%)",
  //         backgroundRepeat: "no-repeat",
  //         backgroundAttachment: "fixed"
  //       }
  //     }
  //   }
  // },
  palette: {
    type: "dark"
    // primary: green,
    // secondary: blue
  }
});

export default function EventsCard() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://s3-alpha-sig.figma.com/img/35a4/4b44/cd88fd8b8b724c0fa5049b666876b495?Expires=1628467200&Signature=MKZw~QLddlvOkNG1H0SjBkJgZh5LJcZYVUcQyc-5nAuhzbzFyw5RiUp4kivEub7UO9~S71mwRKCe01CKB9wVVMT5xOmkgZsbzi~a9a5iRiWXK59soFOO~5q1gh1VDXIfTkQ9acA8YAL1cyWUlmEo7bJc07Gd38ZMp0vV2cTAyekwYG7nPdeFXm1LMiTz33x1MiNqaucUKrJUmGSDbDhcQpdKnEDitF2V4qeNGDSg4dGw3eGeHcsLljfhgy9YDz6zn5fUmS7ESBofK3KyaP6bIqtFUbJTbZ3jbwpqt4CWaRgPXUlDHVgX5Mv2DvxeWPtCNqAhu0eSSuVz0TaWwH0Nmw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            title="Lecture"
          />
          <CardContent className={classes.mediacontent}>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              align="center"
              // background="linear-gradient(180deg, rgba(255, 255, 255, 0) 26.56%, #035B96 76.56%)"
            >
              Phar-East 2020
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              align="center"
            >
              30.06.2020 - 01.07.2020
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              align="center"
            >
              Singapore, 8 Sentosa Gateway
            </Typography>
          </CardContent>
        </CardActionArea>
        {/* <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="secondary">
            Learn More
          </Button>
        </CardActions> */}
      </Card>
    </ThemeProvider>
  );
}
