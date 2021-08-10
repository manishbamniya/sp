import React,{useState} from 'react'
import { Button, makeStyles,Modal, TextField, Grid, InputLabel, MenuItem } from '@material-ui/core'
import {KeyboardDatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns';
import CloseIcon from '@material-ui/icons/Close';
const useStyles = makeStyles( (theme) => ({
    root: {
        display: "flex",
        justifyContent: "flex-end",
        gap:theme.spacing(2)        
    },
    btn: {
        width: "130px"
    },
    paper: {
        position: 'absolute',
        top:"25%",
        left:"50%",
        transform:"translate(-50%,-25%)",
        width: "50%",
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(4),
        borderRadius:"10px"
      },
      inputNameLabel: {
          color: "black",
          margin:theme.spacing(0,0,1,0),
      },
      addButtonWrapper: {
        display:"flex",
        justifyContent:"flex-end"
      },
      addButton: {
          width: "130px",
      },
      closeIconAction: {
        display:"flex",
        justifyContent:"flex-end",
        margin: theme.spacing(0,0,1,0)
      },
      closeIcon: {
          cursor:"pointer"
      },     
}))

export default function AddUser() {
    const classes = useStyles()
    const [open, setOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectValue,setSelectValue] = useState();
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    function handleValueChange(event){
        setSelectValue(event.target.value)
    }
    
  
    const body = (
      <div className={classes.paper}>
          <div className={classes.closeIconAction}>
            <CloseIcon 
                className={classes.closeIcon}
                onClick={handleClose}
            />
          </div>
        <Grid
            container
            className={classes.gridContainer}
            spacing={4}
        >
            <Grid item xs={6}>
                <InputLabel
                    className={classes.inputNameLabel}
                >
                    First Name :
                </InputLabel>
                <TextField
                    id="firstName"
                    size="small"
                    fullWidth
                    variant="outlined"
                />
            </Grid>
            <Grid item xs={6}>
                <InputLabel
                    className={classes.inputNameLabel}
                >
                    Last Name :
                </InputLabel>
                <TextField
                    id="lastName"
                    size="small"
                    fullWidth
                    variant="outlined"
                />
            </Grid>
            <Grid item xs={6}>
                <InputLabel
                    className={classes.inputNameLabel}
                >
                    Type :
                </InputLabel>
                <TextField
                    className={classes.selectComponent}
                    id="type"
                    select
                    size="small"
                    fullWidth
                    variant="outlined"
                    SelectProps={{value : selectValue || "", onChange : handleValueChange}}
                >
                <MenuItem value="Company">Company</MenuItem>
                <MenuItem value="Individual">Individual</MenuItem>
                </TextField> 
            </Grid>
            <Grid item xs={6}>
                <InputLabel
                    className={classes.inputNameLabel}
                >
                    Company Name :
                </InputLabel>
                <TextField
                    id="companyName"
                    size="small"
                    fullWidth
                    variant="outlined"
                />
            </Grid>
            <Grid item xs={6}>
                <InputLabel
                    className={classes.inputNameLabel}
                >
                    Person Email :
                </InputLabel>
                <TextField
                    id="personEmail"
                    size="small"
                    fullWidth
                    variant="outlined"
                />
            </Grid>
            <Grid item xs={6}>
                <InputLabel
                    className={classes.inputNameLabel}
                >
                    Person Mobile :
                </InputLabel>
                <TextField
                    id="personMobile"
                    size="small"
                    fullWidth
                    variant="outlined"
                />
            </Grid>
            <Grid item xs={6}>
                <InputLabel
                    className={classes.inputNameLabel}
                >
                    Status :
                </InputLabel>
                <TextField
                    id="status"
                    size="small"
                    fullWidth
                    variant="outlined"
                />
            </Grid>
            <Grid item xs={6}>
                
                <InputLabel
                    className={classes.inputNameLabel}
                >
                    Date :
                </InputLabel>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        className={classes.datePicker}
                        inputVariant="outlined"
                        id="date-picker-dialog"
                        format="dd/MM/yyyy"
                        value={selectedDate}
                        onChange={handleDateChange}
                        fullWidth
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                        InputProps={{margin:"dense"}}
                    />
                </MuiPickersUtilsProvider>
            </Grid>
            <Grid item xs={9}></Grid>
            <Grid item xs={3}>
                <div className={classes.addButtonWrapper}>
                    <Button
                        className={classes.addButton}
                        variant="contained"
                        color="primary"
                    >
                        Add
                    </Button>
                </div>
            </Grid>
        </Grid>
      </div>
    );
    
    return (
        <>
            <div className={classes.root}>
                <Button
                    variant="outlined"
                    color="primary"
                    className={classes.btn}
                >
                    Export
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.btn}
                    onClick={handleOpen}
                >
                    Create
                </Button>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                >
                {body}
            </Modal>
      </>
    )  
      
        
}
