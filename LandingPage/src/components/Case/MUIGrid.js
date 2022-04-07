import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { RecipeReviewCard } from "./MUICard";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

export function NestedGrid() {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={6} sm={6} md={4} lg={3} xl={3}>
          <RecipeReviewCard />
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={3} xl={3}>
          <RecipeReviewCard />
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={3} xl={3}>
          <RecipeReviewCard />
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={3} xl={3}>
          <RecipeReviewCard />
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={3} xl={3}>
          <RecipeReviewCard />
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={3} xl={3}>
          <RecipeReviewCard />
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={3} xl={3}>
          <RecipeReviewCard />
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={3} xl={3}>
          <RecipeReviewCard />
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={3} xl={3}>
          <RecipeReviewCard />
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={3} xl={3}>
          <RecipeReviewCard />
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={3} xl={3}>
          <RecipeReviewCard />
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={3} xl={3}>
          <RecipeReviewCard />
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid
          container
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          spacing={2}
        >
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
}
