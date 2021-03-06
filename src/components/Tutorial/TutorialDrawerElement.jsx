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
        props.clickFunction(props.id);
    }
    return (
        <div>
            <ListItem button onClick={handleClick}>
                <ListItemText primary={props.name} />
            </ListItem>
            {props.expanded ?
                props.subSteps.map((text, index) => (
                <ListItem button onClick={() => props.scrollFunction(index,index)} id={index} sx={{bgcolor: grey[300]}}>
                    <ListItemText primary={text} />
                </ListItem>)) : <div></div>
            }
        </div>
    )
  }
  
  export default TutorialDrawerElement;