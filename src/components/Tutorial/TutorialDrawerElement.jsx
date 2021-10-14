import React, { useState } from 'react';
import Card from '@mui/material/Card';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import { grey } from '@mui/material/colors';
import '../../App.css';
import './Tutorial.css';

const TutorialDrawerElement = (props) => {
    //const [selected, setSelected] = useState(false);
    const handleClick = () => {
        //setSelected(true);
        //console.log("Hello????");
        //console.log(props.expanded);
        props.clickFunction(props.id);
    }
    return (
        <div>
            <ListItem button onClick={handleClick}>
                <ListItemText primary={props.name} />
            </ListItem>
            {props.expanded ?
                props.subSteps.map((text, index) => (
                <ListItem onClick={handleClick} sx={{bgcolor: grey[300]}}>
                    <ListItemText primary={text} />
                </ListItem>)) : <div></div>
            }
        </div>
    )
  }
  
  export default TutorialDrawerElement;