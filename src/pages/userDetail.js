import React from "react";
import { Paper, makeStyles, Typography } from "@material-ui/core";
import { connect } from "react-redux";
import getUserData from "../store/userModule/userAction";
import {  usersData } from "../store/userModule/userSelector";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2, 4),
    padding: theme.spacing(2),
  },
  userDataList: {
    listStyle: "none",
    borderBottom: "1px solid black",
    padding: theme.spacing(2),
    textAlign: "center",
  },
  ul: {
    position: "relative",
    left: "38%",
    width: "25%",
    borderTop: "1px solid black",
    borderLeft: "1px solid black",
    borderRight: "1px solid black",
  },
  typo: {
    position: "relative",
    left: "46%",
    margin: theme.spacing(0, 0, 1, 0),
  },
}));

function UserDetails(props) {
  const classes = useStyles();
  const { usersData } = props;

  let value = "";
  let dd = "";
  let result = "";
  if (props.location.data) {
    value = Object.values(props.location.data).map((item) => {
      return item;
    });
    dd = value.find((val) => {
      return val;
    });
    result = [];
    Object.entries(dd).forEach(([key, val]) => result.push(`${key} : ${val}`));
  }

  console.log(usersData);

  return (
    <>
      {/* <Button variant="contained" color="primary" onClick={() => showUserData}>
        Click
      </Button> */}

      <Paper className={classes.root}>
        <Typography variant="h5" className={classes.typo}>
          User Details
        </Typography>
        <ul className={classes.ul}>
          {result
            ? result.map((item) => (
                <li className={classes.userDataList} key={item}>
                  {item}
                </li>
              ))
            : null}
        </ul>
      </Paper>
    </>
  );
}

const mapStateToProps = () => ({
  usersData: usersData(),
});

const mapDispatchToProps = (dispatch) => {
  return {
    showUserData: dispatch(getUserData()), //dispatching the action here
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);
