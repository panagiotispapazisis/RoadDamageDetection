import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';
import React, { useState } from 'react';
import { ITheme } from '../../theme';
import FirebaseApp from '../../firebase/firebase'
import CircularProgress from "@material-ui/core/CircularProgress";
import 'firebase/storage'
import firebase from 'firebase'
import instance from '../../../axios-instance'
import moment from 'moment'
import {Auth} from '../../App'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper'
import {uuid} from 'uuidv4'
const useStyles = makeStyles((theme: ITheme) => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  },
  pagination: {
    marginTop: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  input: {
    display: 'none',
  },
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Select The City', 'Select The District', 'Select The Image'];
}

function getStepContent(stepIndex:any) {
  switch (stepIndex) {
    case 0:
      return 'Select campaign settings...';
    case 1:
      return 'What is an ad group anyways?';
    case 2:
      return 'This is the bit I really care about!';
    default:
      return 'Unknown stepIndex';
  }
}


const UploadList: React.FC<{}> = () => {
  const { user, authUser } = Auth.useContainer();
  const classes = useStyles();
  const [img] = useState("")
  const [imgDownloaded, setImgDownloaded] = useState(true) 
  const [district, setDistrict] = useState('');
  const [city, setCity] = useState('');
  const [open, setOpen] = useState(false);
  
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };


  const handleChange = (event:any) => {
    setDistrict(event.target.value);
  };
  const handleChange2 = (event:any) => {
    setCity(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  if (!user || !authUser) {
    return null;
  }
  const uploadImg = (e:any) => {
    
    const file = e.target.files[0];
    
    setImgDownloaded(false);

    const storage = firebase.storage()
    
     const storageRef = FirebaseApp.storage().ref(`images/${file.name}`).put(file)
     storageRef.on('state_changed',(snapshot)=>{
     
     },(error)=>{
       console.log(error);
     },()=>{
       storage.ref(`images/${file.name}`).getDownloadURL().then(url=>{
        setImgDownloaded(true)
        
        const post = {
          id: uuid(),
          imageUrl: url,
          fullName: authUser.displayName,
          fullDate: moment().format("DD-MM-YYYY"),
          district:district,
          city:city,
        }
        instance.post('imageUrls.json',post)
       })
     })
  };
  

  return (
    <div className={classes.root}>
      
      <div className={classes.content}>
     


      <Stepper activeStep={activeStep} alternativeLabel style={{height:"400px"}}> 
        {steps.map((label,index) => (
          <Step key={label}>
            <StepLabel >{label}</StepLabel>
          <Paper  style={{position:"absolute", top:"100%",left:"100%"}} >
          
            {
            (activeStep === 0 && index === 1)?(

            <FormControl className={classes.formControl}>
            <InputLabel id="demo-controlled-open-select-label">City</InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open}
              onClose={handleClose}
              onOpen={handleOpen}
              value={city}
              onChange={handleChange2}
              >
            <MenuItem value="">
            <em>None</em>
            </MenuItem>
            <MenuItem value={"Thessaloniki"}>Thessaloniki</MenuItem>
            <MenuItem value={"Athina"}>Athina</MenuItem>
            </Select>
            </FormControl>  
             ):null}
             
             {
             (activeStep === 1 && index === 1)?(  
              <FormControl className={classes.formControl}>
              <InputLabel id="demo-controlled-open-select-label">District</InputLabel>
              <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={district}
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"Kordelio"}>Kordelio</MenuItem>
                <MenuItem value={"Evosmos"}>Evosmos</MenuItem>
                <MenuItem value={"Peuka"}>Peuka</MenuItem>
              </Select>
            </FormControl>  
             ):null}
            
            {(activeStep === 2 && index === 1)?(
            <div>
            <input
              accept="image/*"
              className={classes.input} 
              id="contained-button-file"
              multiple
              type="file"
              onChange={uploadImg}
              value={img}
              />
            <label htmlFor="contained-button-file">
            <Button variant="contained" color="primary" component="span">
            Upload  
            </Button>
            </label>

            <CircularProgress
            style={{ display: imgDownloaded ? "none" : "block" }}
            />
          </div>):null}
          </Paper>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed</Typography>
            
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>   
      </div>
     
    </div>
  );
};

export default UploadList;


 


