import React from 'react'
import { makeStyles } from '@material-ui/core'
import { Paper } from '@material-ui/core';

const useStyles = makeStyles ( (theme) => ({
    root: {
        margin : theme.spacing(2,4),
        padding: theme.spacing(4),
        height:"auto"
      },
    mainContent: {
        padding: "30px",
        // margin: theme.spacing(2,2),
    },
    
}));

function MainLayout(props) {
    const classes = useStyles()
    return (
        <>
            <Paper className={classes.root}>
                <main 
                    className={classes.mainContent}>
                        {props.children}
                </main>
            </Paper>
        </>
    )
}

export default  MainLayout;
