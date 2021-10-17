import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import '../../App.css';
import './Tutorial.css';
import TutorialDrawer from './TutorialDrawer';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

const Tutorial = () => {
    const [selectedStep, setSelectedStep] = useState({id: 0, component: <div/>, refs: null});
    const changeStep = (newId) => {
      console.log("Trying to change step");
      //console.log("Before: "+selectedStep.refs);
      if (newId ==0) {
        setSelectedStep({...selectedStep, id: newId, component: <Step1/>});
      } else if (newId == 1) {
        setSelectedStep({...selectedStep, id: newId, component: <Step2/>});
      } if (newId == 2) {
        setSelectedStep({...selectedStep, id: newId, component: <Step3/>});
      }
      //console.log(selectedStep.component);
      //console.log("After: "+selectedStep.refs);
    }
    const setRefs = (newRefs) => {
      //console.log("Hello????");
      console.log("Trying to set");
      console.log(newRefs);
      setSelectedStep({...selectedStep, refs: newRefs});
      //console.log("Setting refs");
    }
    const scrollToStep = (id, stepNum) => {
      console.log("Trying to scroll");
      console.log(selectedStep.refs);
      //console.log(stepNum);
      selectedStep.refs[stepNum].scrollIntoView({ behavior: 'smooth' });
    }
    useEffect(() => {  
      changeStep(0);
    },[]);
    return (
      <div id="tutorialMainDiv">
        <TutorialDrawer clickFunction={changeStep} scrollFunction={scrollToStep} selectedId={selectedStep.id}/>
        {/*selectedStep.component*/}
        {React.cloneElement(
          selectedStep.component, 
          { setRefs: setRefs }
        )}
      </div>
    )
  }
  
  export default Tutorial;