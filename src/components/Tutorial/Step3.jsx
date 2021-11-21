import React, { useState, useEffect, useRef } from 'react';
import Card from '@mui/material/Card';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import '../../App.css';
import './Tutorial.css';
import { Divider } from '@mui/material';

const Step3 = (props) => {
    const ref1 = React.createRef();
    const ref2 = React.createRef();
    const ref3 = React.createRef();
    const ref4 = React.createRef();
    const [stepRefs, setStepRefs] = useState([]);
    useEffect(() => {
        //console.log(ref1);
        var tempList = [];
        tempList[0] = ref1.current;
        tempList[1] = ref2.current;
        tempList[2] = ref3.current;
        tempList[3] = ref4.current;
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
          Step 3: Styling with CSS
          </Typography>
          <div id="3.1" className="miniStep" ref={ref1}>
            <Typography variant="h5" color="primary">
            3.1 Adding CSS
            </Typography>
            <div class="stepParagraph">
                <Typography variant="p">
                    You can use html tags to make your text bold, italic, or underlined, but what about <span id="fontChange">changing the font? </span>
                    <span id="colorChange">Changing the text color? </span> <span id="bgChange">Changing the background color?</span> You can acomplish these, and many more changes, with CSS.
                    The first step to adding styling to your website is to create a CSS file.
                    Name it ___.css, and put it in the same folder as your HTML file.
                    (You can also put it somewhere else as long as you get the file path right.)
                    In your HTML file, add 
                    &lt;link rel="stylesheet" type="text/css" href="yourFileName.css"&gt;
                    This tells the browser to display the HTML code using the styling information given in the CSS file yourFileName.css.
                </Typography>
            </div>
            <div class="stepParagraph">
                <Typography variant="p">
                    In the CSS file you can choose properties that all elements with a certain tag should have (e.g. all p tags),
                    all elements with a certain class should have, or the element with a certain id should have.
                    You can specify a class or id for an element as an attribute. For example &lt;p class="blueText" id="oceanDescription"&gt;.
                    Then, in the CSS file, you could specify that all p elements should have the font Times New Roman,
                    all blueText elements should have the color blue, and the element oceanDescription should have a black background.
                </Typography>
            </div>
          </div>
          <Divider/>
          <div id="3.2" className="miniStep"  ref={ref2}>
            <Typography variant="h5" color="primary">
            3.2 Font and color
            </Typography>
            <div class="stepParagraph">
                <Typography variant="p">
                The CSS properties we need to do this are font-family, color, and background-color.
                (Multi-word CSS properties usually have a hyphen between words)
                The CSS code will look like this:
                </Typography>
            </div>
            <Card id="exampleContainer">
                <div class="codeExample">
                    <p className="codeExampleText">
                        p &#123;<br/>
                        &emsp;font-family: "Times New Roman";<br/>
                        &#125;<br/>
                        <br/>
                        .blueText &#123;<br/>
                        &emsp;color: blue;<br/>
                        &#125;<br/>
                        <br/>
                        #oceanDescription &#123;<br/>
                        &emsp;background-color: black;<br/>
                        &#125;<br/>
                    </p>
                </div>
                <Typography variant="p" id="exampleLabel">
                A simple example CSS file
                </Typography>
            </Card>
            <div class="stepParagraph">
                <Typography variant="p">
                    Refer to classes by putting a dot before the name and ids by putting a # before the name.
                    The font name needs to be in quotes, but the colors don't.
                    If we wanted to use a color besides the built-in ones, we can specify it exactly with a hex value (e.g. #2ac754).
                    I find <a href="https://g.co/kgs/jcYpBq">this color picker</a> very useful for choosing colors and getting their hex values.
                </Typography>
            </div>
          </div>
          <Divider/>
          <div id="3.3" className="miniStep" ref={ref3}>
            <Typography variant="h5" color="primary">
            3.3 Divs
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
          <div id="3.4" className="miniStep" ref={ref4}>
            <Typography variant="h5" color="primary">
            3.4
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
  
  export default Step3;