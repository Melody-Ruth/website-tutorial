import React, { useState } from 'react';
import Card from '@mui/material/Card';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import '../../App.css';
import './Tutorial.css';
import { Divider } from '@mui/material';

const Step1 = () => {
    return (
        <div className="stepContainer">
          <Typography variant="h4" color="secondary.dark" sx={{ mb: "0.8em"}}>
          Step 1: Hello, World!
          </Typography>
          <div id="1.1" className="miniStep">
            <Typography variant="h5" color="primary">
            1.1 Your first website
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
          </div>
          <Divider/>
          <div id="1.2" className="miniStep">
            <Typography variant="h5" color="primary">
            1.2 Anatomy of an HTML file
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
          <Divider/>
          <div id="1.3" className="miniStep">
            <Typography variant="h5" color="primary">
            1.3 Text tags
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
  
  export default Step1;