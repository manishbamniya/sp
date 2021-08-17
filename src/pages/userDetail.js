import React, { useEffect } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { connect } from "react-redux";
import { getUserDetails } from "../store/userModule/userAction";
import Spinner from "../components/Spinner";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from "react-router-dom";

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
    width: "50%",
    position: "relative",
    left: "25%",
  },
  li: {
    listStyle: "none",
    padding: theme.spacing(2),
    border: "1px solid black",
    textAlign: "center",
  },
  backArrow: {
    color:"black"
  }
}));

function UserDetails(props) {
  const { userDetails, isFetching } = props;
  const classes = useStyles();
  const userID = props.match.params.id; // getting the employee id from params
  console.log("state of userDetails", userDetails);

  useEffect(() => {
    props.userDetailsAction(userID);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Link to="/">
        < ArrowBackIcon 
          className={classes.backArrow}
        />
      </Link>
      <Typography variant="h5" className={classes.typo}>
        User Details
      </Typography>
      {isFetching ? (
        <Spinner />
      ) : (
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
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    userDetails: state.user.userdetails,
    isFetching: state.user.isFetching,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userDetailsAction: (id) => dispatch(getUserDetails(id)),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(UserDetails);
