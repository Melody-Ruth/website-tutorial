import React, { useState } from 'react';
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
    const [selectedStep, setSelectedStep] = useState({id: 0, component: <Step1/>});
    const changeStep = (newId) => {
      if (newId ==0) {
        setSelectedStep({...selectedStep, id: newId, component: <Step1/>});
      } else if (newId == 1) {
        setSelectedStep({...selectedStep, id: newId, component: <Step2/>});
      } if (newId == 2) {
        setSelectedStep({...selectedStep, id: newId, component: <Step3/>});
      }
    }
    return (
      <div id="tutorialMainDiv">
        <TutorialDrawer clickFunction={changeStep} selectedId={selectedStep.id}/>
        <div>
          {selectedStep.component}
        </div>
      </div>
    )
  }
  
  export default Tutorial;