import React, { useState, useEffect, useRef } from 'react';
import Card from '@mui/material/Card';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import '../../App.css';
import './Tutorial.css';
import { Divider } from '@mui/material';

const Step2 = (props) => {
    const ref1 = React.createRef();
    const ref2 = React.createRef();
    const [stepRefs, setStepRefs] = useState([]);
    useEffect(() => {
        //console.log(ref1);
        var tempList = [];
        tempList[0] = ref1.current;
        tempList[1] = ref2.current;
        setStepRefs(tempList);
    }, []);
    useEffect(() => {
        //console.log(ref1);
        //console.log("Should be set now: "+stepRefs[0]);
        if (typeof(stepRefs[0]) != undefined) {
            //console.log("hello??");
            props.setRefs(stepRefs);
        }
    }, [stepRefs]);
    return (
        <div className="pContainer stepContainer">
          <Typography variant="h4" color="secondary.dark" sx={{ mb: "0.8em"}}>
          Step 2: Links and Images
          </Typography>
          <div id="2.1" className="miniStep" ref={ref1}>
            <Typography variant="h5" color="primary">
            2.1 Something
            </Typography>
            <div class="stepParagraph">
                <Typography variant="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nisl augue, venenatis vitae consequat vel, scelerisque ac neque. 
                Nunc ut quam dignissim, malesuada lectus eget, posuere turpis. Nulla facilisis odio sit amet posuere rhoncus. Praesent vel varius urna. 
                Sed porta, nisl a vestibulum porta, turpis dolor vulputate ligula, vitae rhoncus leo tortor nec lectus. 
                Nulla pharetra placerat enim eget volutpat. 
                Nulla convallis elementum elit, at commodo sapien. Ut iaculis accumsan erat at auctor. Sed porttitor orci dignissim malesuada dapibus.
                </Typography>
            </div>
            <div class="stepParagraph">
                <Typography variant="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nisl augue, venenatis vitae consequat vel, scelerisque ac neque. 
                Nunc ut quam dignissim, malesuada lectus eget, posuere turpis. Nulla facilisis odio sit amet posuere rhoncus. Praesent vel varius urna. 
                Sed porta, nisl a vestibulum porta, turpis dolor vulputate ligula, vitae rhoncus leo tortor nec lectus. 
                Nulla pharetra placerat enim eget volutpat. 
                Nulla convallis elementum elit, at commodo sapien. Ut iaculis accumsan erat at auctor. Sed porttitor orci dignissim malesuada dapibus.
                </Typography>
            </div>
            <div class="stepParagraph">
                <Typography variant="p">
                Sed id sodales dui, at placerat mi. Mauris pharetra bibendum laoreet. Quisque eget dolor purus.
                Quisque sollicitudin fringilla eros, id cursus orci ullamcorper ac. Quisque fringilla vitae erat nec sodales. 
                Phasellus a leo in arcu aliquet condimentum. Mauris rutrum enim eget imperdiet placerat. 
                Morbi ultrices massa urna, at cursus eros varius auctor.
                Nunc volutpat turpis at vulputate placerat. Cras neque quam, dignissim eget urna sed, mollis tempus quam.
                </Typography>
            </div>
            <div class="stepParagraph">
                <Typography variant="p">
                Sed id sodales dui, at placerat mi. Mauris pharetra bibendum laoreet. Quisque eget dolor purus.
                Quisque sollicitudin fringilla eros, id cursus orci ullamcorper ac. Quisque fringilla vitae erat nec sodales. 
                Phasellus a leo in arcu aliquet condimentum. Mauris rutrum enim eget imperdiet placerat. 
                Morbi ultrices massa urna, at cursus eros varius auctor.
                Nunc volutpat turpis at vulputate placerat. Cras neque quam, dignissim eget urna sed, mollis tempus quam.
                </Typography>
            </div>
            <div class="stepParagraph">
                <Typography variant="p">
                Sed id sodales dui, at placerat mi. Mauris pharetra bibendum laoreet. Quisque eget dolor purus.
                Quisque sollicitudin fringilla eros, id cursus orci ullamcorper ac. Quisque fringilla vitae erat nec sodales. 
                Phasellus a leo in arcu aliquet condimentum. Mauris rutrum enim eget imperdiet placerat. 
                Morbi ultrices massa urna, at cursus eros varius auctor.
                Nunc volutpat turpis at vulputate placerat. Cras neque quam, dignissim eget urna sed, mollis tempus quam.
                </Typography>
            </div>
            <div class="stepParagraph">
                <Typography variant="p">
                Sed id sodales dui, at placerat mi. Mauris pharetra bibendum laoreet. Quisque eget dolor purus.
                Quisque sollicitudin fringilla eros, id cursus orci ullamcorper ac. Quisque fringilla vitae erat nec sodales. 
                Phasellus a leo in arcu aliquet condimentum. Mauris rutrum enim eget imperdiet placerat. 
                Morbi ultrices massa urna, at cursus eros varius auctor.
                Nunc volutpat turpis at vulputate placerat. Cras neque quam, dignissim eget urna sed, mollis tempus quam.
                </Typography>
            </div>
          </div>
          <Divider/>
          <div id="2.2" className="miniStep"  ref={ref2}>
            <Typography variant="h5" color="primary">
            2.2 Something else
            </Typography>
            <div class="stepParagraph">
                <Typography variant="p">
                Sed id sodales dui, at placerat mi. Mauris pharetra bibendum laoreet. Quisque eget dolor purus.
                Quisque sollicitudin fringilla eros, id cursus orci ullamcorper ac. Quisque fringilla vitae erat nec sodales. 
                Phasellus a leo in arcu aliquet condimentum. Mauris rutrum enim eget imperdiet placerat. 
                Morbi ultrices massa urna, at cursus eros varius auctor.
                Nunc volutpat turpis at vulputate placerat. Cras neque quam, dignissim eget urna sed, mollis tempus quam.
                </Typography>
            </div>
            <div class="stepParagraph">
                <Typography variant="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nisl augue, venenatis vitae consequat vel, scelerisque ac neque. 
                Nunc ut quam dignissim, malesuada lectus eget, posuere turpis. Nulla facilisis odio sit amet posuere rhoncus. Praesent vel varius urna. 
                Sed porta, nisl a vestibulum porta, turpis dolor vulputate ligula, vitae rhoncus leo tortor nec lectus. 
                Nulla pharetra placerat enim eget volutpat. 
                Nulla convallis elementum elit, at commodo sapien. Ut iaculis accumsan erat at auctor. Sed porttitor orci dignissim malesuada dapibus.
                </Typography>
            </div>
          </div>
        </div>
    )
  }
  
  export default Step2;