import React, { useEffect } from "react";
import { connect } from "react-redux";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { makeStyles, Typography } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { getSystemDetails } from "../store/systemModule/systemAction";

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

function SystemDetails(props) {
  const systemID = props.match.params.id;
  const classes = useStyles()

  const{ systemDetails, isFetching } = props
  console.log('system details-----------', systemDetails)

  useEffect(() => {
    props.systemDetailsAction(systemID);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Link to="/system">
        < ArrowBackIcon 
          className={classes.backArrow}
        />
      </Link>
      <Typography variant="h5" className={classes.typo}>
        System Details
      </Typography>
      {isFetching ? (
        <Spinner />
      ) : (
        <ul className={classes.ul}>
          {Array.isArray(systemDetails) && systemDetails.length > 0
            ? systemDetails.map((item) =>
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
    systemDetails: state.system.systemDetails,
    isFetching: state.system.isFetching,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    systemDetailsAction: (ID) => dispatch(getSystemDetails(ID)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SystemDetails);
