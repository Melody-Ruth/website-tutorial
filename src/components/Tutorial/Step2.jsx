import React, { useState, useEffect, useRef } from 'react';
import Card from '@mui/material/Card';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import '../../App.css';
import './Tutorial.css';
import { Divider } from '@mui/material';
import SandBox from './SandBox';
import SandBox2 from './SandBox2';

const Step2 = (props) => {
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
          Step 2: Text, Links, and Images
          </Typography>
          <div id="2.1" className="miniStep" ref={ref1}>
            <Typography variant="h5" color="primary">
            2.1 Text tags
            </Typography>
            <div class="stepParagraph">
                <Typography variant="p">
                There are multiple tags for displaying text. &lt;p&gt; is used for standard-sized text, like what you're reading now.
                Headers will use &lt;h1&gt;, &lt;h2&gt;, &lt;h3&gt;, &lt;h4&gt;, &lt;h5&gt;, or &lt;h6&gt; depending on the desired prominance/size
                (h1 is the largest).
                </Typography>
            </div>
            <div class="stepParagraph">
                <Typography variant="p">
                We can use &lt;br&gt; to make the text start a new line
                (pressing enter in the html file will only change the way the file is displayed, not how it is rendered by the browser).
                Multiple &lt;br&gt;s in a row will result in a multi-line gap in the text.
                &lt;br&gt; will make a line break inside of a paragraph, but if you actually want to make separate pargraphs, 
                the best way to go about that is to split your text into multiple &lt;p&gt; paragraphs.
                </Typography>
            </div>
            <div class="stepParagraph">
                <Typography variant="p">
                Any text between a &lt;b&gt; and &lt;/b&gt; will display as bold. Similarly, &lt;i&gt; will make your text italic and &lt;u&gt; will make it underlined.
                </Typography>
            </div>
            <div class="stepParagraph">
                <Typography variant="p">
                Try out these tags in the code sandbox below! (change the code on the left to affect the result on the right)
                Make sure you match up all of your opening tags with closing tags.
                Also, always close inner tags before closing outer ones (no overlaps).
                The browser will probably parse this correctly anyway, but it isn't part of the official standard so there are no guarantees.
                </Typography>
            </div>
            <SandBox/>
          </div>
          <Divider/>
          <div id="2.2" className="miniStep" ref={ref2}>
            <Typography variant="h5" color="primary">
            2.2 Attributes
            </Typography>
            <div class="stepParagraph">
                <Typography variant="p">
                Tags can be customized by specifying attributes.
                These will take the form &lt;tag attr=value&gt;.
                If the tag uses opening and closing tags, you specify the attribute only in the opening tag.
                If the attribute value is text (as opposed to e.g. a number), put it in quotes.
                We'll see some examples of what this looks like later in this step of the tutorial.
                </Typography>
            </div>
          </div>
          <Divider/>
          <div id="2.2" className="miniStep" ref={ref3}>
            <Typography variant="h5" color="primary">
            2.3 Images
            </Typography>
            <div class="stepParagraph">
                <Typography variant="p">
                You can use the &lt;img&gt; tag to add images to your website.
                Image tags don't need a closing tag.
                To specify the address of the link, use the src attribute in the tag.
                To specifiy the width and height of the image, use the width and height attributes.
                For example, &lt;img width=300&gt; will make the image have a width of 300 pixels.
                </Typography>
            </div>
            <SandBox2/>
          </div>
          <Divider/>
          <div id="2.4" className="miniStep"  ref={ref4}>
            <Typography variant="h5" color="primary">
            2.4 Links
            </Typography>
            <div class="stepParagraph">
                <Typography variant="p">
                You can add links to your webpage with the &lt;a&gt; tag.
                To specifiy the address of the link, use the href attribute in the tag.
                For example, &lt;a href="https://www.google.com/"&gt;
                </Typography>
            </div>
            <div class="stepParagraph">
                <Typography variant="p">
                If you put text between the &lt;a&gt; and the &lt;/a&gt;, clicking the text will take the user to the link address.
                Similarly, you can make clickable images by wrapping a &lt;img&gt; tag with opening and closing &lt;a&gt; tags.
                </Typography>
            </div>
          </div>
        </div>
    )
  }
  
  export default Step2;