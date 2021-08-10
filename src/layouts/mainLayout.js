import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles ( (theme) => ({
    mainContent: {
        padding: "30px",
        margin: theme.spacing(2,2),
    },
}));

function MainLayout(props) {
    const classes = useStyles()
    return (
        <>
            <main 
                className={classes.mainContent}>
                    {props.children}
            </main>
        </>
    )
}

export default  MainLayout;
