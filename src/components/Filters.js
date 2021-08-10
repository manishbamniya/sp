import React from 'react'
import {
    TextField,
    makeStyles,
    InputLabel, 
    Grid, 
    Button,
    Typography
} from '@material-ui/core'
const useStyles = makeStyles( (theme) => ({
    root: {
        marginBottom: theme.spacing(4),
        paddingBottom:theme.spacing(2),
        borderBottom:"1px solid black"
    },
    inputNameLabel: {
        color: "black",
    },
    inputField: {
        marginTop: theme.spacing(1),
    },
    buttonGrid: {
        display: "flex",
        justifyContent: "flex-end",
        margin:theme.spacing(2,0),
        gap:theme.spacing(2)
    },
    labelFilter: {
        margin: theme.spacing(4,0,2,0),
        fontWeight: "700"
    },
    button: {
        width: "130px"
    },
}))

export default function Filters() {
    const classes = useStyles()
    
    return (
        <>
            <Typography 
                className={classes.labelFilter}
            >
                Filters :
            </Typography>
            <Grid 
                container
                className={classes.root}
            >
                <Grid container item spacing={2}>
                    <Grid item xs={3}>
                        <InputLabel
                            className={classes.inputNameLabel}
                        >
                            First Name :
                        </InputLabel>
                        <TextField 
                            id="first_name"
                            fullWidth
                            size="small"
                            variant="outlined"
                            className={classes.inputField}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <InputLabel
                            className={classes.inputNameLabel}
                        >
                            Last Name :
                        </InputLabel>
                        <TextField 
                            id="last_name"
                            fullWidth
                            size="small"
                            variant="outlined"
                            className={classes.inputField}
                        />
                    </Grid>
                </Grid>
                <Grid container item>
                    <Grid item xs={9}>
                        {/* SHOW MORE LINK */}
                    </Grid>
                    <Grid 
                        item xs={3}
                        className={classes.buttonGrid}
                    >
                        <Button
                            variant="outlined" 
                            color="primary" 
                            className={classes.button}
                        >
                            Clear
                        </Button>
                        <Button
                            variant="contained" 
                            color="primary" 
                            className={classes.button}
                        >
                            Search
                        </Button>                        
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}
