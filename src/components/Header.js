import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({  
  title: {
    flexGrow: 1,
    fontSize:"30px",
    fontWeight:"700"
  },
  logo: {
    textDecoration:"none",
    color:"inherit"
  },
  buttonStyles: {
    margin:theme.spacing(1),
    width:"6em"
  },
  appbarStyles: {
      height:"80px",
      padding: theme.spacing(1,6)
  },
  links: {
      textDecoration:"none",
      color:"inherit"
  },
  
  
}));

export default function Header() {
  const classes = useStyles();

  return (
      <AppBar position="static" className={classes.appbarStyles}>
        <Toolbar>
          <Typography
            className={classes.title}>
            <Link 
              to="/"
              className={classes.logo}>
              SP_ADMIN
            </Link>
          </Typography>
          <Button
            className={classes.buttonStyles}
            variant="outlined"
            color="inherit">
            <Link
                to="/user"
                className={classes.links}>
                USER
            </Link>
          </Button>
          <Button
            className={classes.buttonStyles}
            variant="outlined" 
            color="inherit">
            <Link
                to="/system"
                className={classes.links}>
                SYSTEMS
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
  );
}

