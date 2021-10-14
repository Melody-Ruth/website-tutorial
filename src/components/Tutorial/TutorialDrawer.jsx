import React, { useState } from 'react';
import Card from '@mui/material/Card';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import TutorialDrawerElement from './TutorialDrawerElement';
import '../../App.css';
import './Tutorial.css';

const TutorialDrawer = (props) => {
    const [steps, setSteps] = useState([
        {text: 'Step 1: Hello, World!', steps: ['1.1 Your first website', '1.2 Anatomy of an HTML file', '1.3 Text tags']},
        {text: 'Step 2: Links and Images', steps: ['2.1', '2.2']},
        {text: 'Step 3: Divs and Positioning', steps: []}
    ]);
    return (
        <Card
            id="tutorialDrawer"
            sx={{ borderRadius: 0 }}
        >
            <List>
            {/*['Step 1: Hello, World!', 'Step 2: Links and Images', 'Step 3: Divs and Positioning'].map((text, index) => (
                <TutorialDrawerElement name={text} id={index} expanded={props.selectedId==index} clickFunction={props.clickFunction}/>
            ))*/}
            {steps.map((step, index) => (
                <TutorialDrawerElement name={step.text} id={index} expanded={props.selectedId==index} clickFunction={props.clickFunction} subSteps={step.steps}/>
            ))}
            </List>
        </Card>
    )
  }
  
  export default TutorialDrawer;