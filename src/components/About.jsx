import React from 'react';
import Typography from '@mui/material/Typography';
import '../App.css';

const About = () => {
    return (
      <div>
        <Typography variant="p" className="text" sx={{ p: "2em"}}>
        This is the about page of the website. Here is some info. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Aliquam nisl augue, venenatis vitae consequat vel, scelerisque ac neque. Nunc ut quam dignissim, malesuada lectus eget, posuere turpis. 
        Nulla facilisis odio sit amet posuere rhoncus. Praesent vel varius urna. Sed porta, nisl a vestibulum porta, turpis dolor vulputate ligula, 
        vitae rhoncus leo tortor nec lectus. Nulla pharetra placerat enim eget volutpat. 
        Nulla convallis elementum elit, at commodo sapien. Ut iaculis accumsan erat at auctor. Sed porttitor orci dignissim malesuada dapibus.
        </Typography>
      </div>
    )
  }
  
  export default About;