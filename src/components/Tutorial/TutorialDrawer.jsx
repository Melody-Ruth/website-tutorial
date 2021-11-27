import React, { useState, useRef } from 'react';
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
        {text: 'Step 1: Hello, World!', steps: ['1.1 Your first website', '1.2 Anatomy of an HTML file']},
        {text: 'Step 2: Text, Links, and Images', steps: ['2.1 Text tags', '2.2 Attributes', '2.3 Images', '2.4 Links']},
        {text: 'Step 3: Styling with CSS', steps: ['3.1 Adding CSS','3.2 Font and Color','3.3 Divs']}
    ]);
    const myRef = useRef(null);
    const executeScroll = () => {
        myRef.current.scrollIntoView();
    }
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
                <TutorialDrawerElement name={step.text} id={index} expanded={props.selectedId==index} clickFunction={props.clickFunction} scrollFunction={props.scrollFunction} subSteps={step.steps}/>
            ))}
            </List>
        </Card>
    )
  }
  
  export default TutorialDrawer;