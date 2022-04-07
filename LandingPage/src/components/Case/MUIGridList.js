import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";
/**import tileData from './tileData';**/

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)"
  },
  title: {
    color: theme.palette.primary.light
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 70%, rgba(0,0,0,0) 100%)"
  }
}));

const tileData = [
  {
    img:
      "https://via.placeholder.com/600x100.jpg/EAE0D3/000000?text=My+Favourite+List+1",
    title: "Apple",
    link: "https://apple.com/"
  },
  {
    img:
      "https://via.placeholder.com/600x100.jpg/EAE0D3/000000?text=My+Favourite+List+2",
    title: "Microsoft",
    link: "https://microsoft.com/"
  },
  {
    img:
      "https://via.placeholder.com/600x100.jpg/EAE0D3/000000?text=My+Favourite+List+3",
    title: "Google",
    link: "https://google.com/"
  },
  {
    img:
      "https://via.placeholder.com/600x100.jpg/EAE0D3/000000?text=My+Default+List",
    title: "Facebook",
    link: "https://facebook.com/"
  },
  {
    img:
      "https://via.placeholder.com/600x100.jpg/EAE0D3/000000?text=Add a New List",
    title: "Oracle",
    link: "https://oracle.com/"
  }
];

export function SingleLineGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={2.5}>
        {tileData.map(tile => (
          <a href={tile.link} target="_blank">
            <GridListTile key={tile.img}>
              <img src={tile.img} alt={tile.title} />
              <GridListTileBar
                /** title={tile.title} **/
                classes={{
                  root: classes.titleBar,
                  title: classes.title
                }}
              />
            </GridListTile>
          </a>
        ))}
      </GridList>
    </div>
  );
}
