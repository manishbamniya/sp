import React from "react";
import { CircularProgress, makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  spinner: {
    textAlign: "center",
  },
  loading: {
    padding: theme.spacing(2),
    letterSpacing: "1px",
  },
}));

export default function Spinner() {
  const classes = useStyles();
  return (
      <div className={classes.spinner}>
        <CircularProgress size={60} color="primary" />
        <div className={classes.loading}>LOADING...</div>
      </div>
  );
}
