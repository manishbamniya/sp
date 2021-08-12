import React, { useEffect } from "react";
import { Paper, makeStyles, Typography } from "@material-ui/core";
import { connect } from "react-redux";
import { getUserDetails } from "../store/userModule/userAction";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2, 4),
    padding: theme.spacing(2),
  },

  typo: {
    textAlign: "center",
    letterSpacing: "1px",
    margin: theme.spacing(0, 0, 1, 0),
  },
  ul: {
    border: "1px solid black",
    borderBottom: "none",
    width: "50%",
    position: "relative",
    left: "25%",
  },
  li: {
    listStyle: "none",
    padding: theme.spacing(2),
    borderBottom: "1px solid black",
    textAlign: "center",
  },
}));

function UserDetails(props) {
  const classes = useStyles();
  const userID = props.match.params.id;
  const userDetails = useSelector((state) => state.user.userdetails);
  console.log("state", userDetails);

  useEffect(() => {
    props.userDetails(userID);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Paper className={classes.root}>
        <Typography variant="h5" className={classes.typo}>
          User Details
        </Typography>
        <ul className={classes.ul}>
          {Array.isArray(userDetails) && userDetails.length > 0
            ? userDetails.map((item) =>
                Object.entries(item).map(([keys, value]) => (
                  <li key={value} className={classes.li}>
                    {keys} : {value}
                  </li>
                ))
              )
            : null}
        </ul>
      </Paper>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    userDetails: (id) => dispatch(getUserDetails(id)),
  };
};

export default connect(null, mapDispatchToProps)(UserDetails);
