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

const Step1 = (props) => {
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
          Step 1: Hello, World!
          </Typography>
          <div id="1.1" className="miniStep" ref={ref1}>
            <Typography variant="h5" color="primary">
            1.1 Your first website
            </Typography>
            <div class="stepParagraph">
                <Typography variant="p">
                Welcome to the tutorial! If you follow these steps in order you will learn how to make your own website with HTML and CSS.
                The tutorial examples will create an ocean-themed website, but you can make a site themed around anything you'd like using the same steps.
                In this first step, we'll create an HTML file, add text to it, and see what it looks like in a browser.</Typography>
            </div>
            <div class="stepParagraph">
                <Typography variant="p">
                First, a bit of context. No matter how fancy a website is or how it was created, underneath it will be made up of HTML code.
                If you right click on any page and select "Inspect" you can see the underlying HTML code and how it corresponds to the elements of the page.
                (Websites can change what happens when you right click, so this won't work 100% of the time, but they will still have an HTML file)
                CSS code is used to add styling to websites, including colors, fonts, and complicated layouts. 
                JavaScript code is used to add interactivity, from simple button features to complex server communication.
                If you've made a website with Wordpress, Squarespace, etc, underneath it was HTML, CSS, and JavaScript.
                Any features they offered can be recreated with HTML, CSS, and JavaScript, and using the underlying languages gives you more freedom.
                In this tutorial we'll learn the basics of HTML and CSS.
                </Typography>
            </div>
          </div>
          <Divider/>
          <div id="1.2" className="miniStep"  ref={ref2}>
            <Typography variant="h5" color="primary">
            1.2 Anatomy of an HTML file
            </Typography>
            <div class="stepParagraph">
                <Typography variant="p">
                We'll start with a simple HTML file that will tell the browser to display some text.
                Every HTML file follows a particular format, so for such a simple website most of the HTML code will be standard code that you'll find in virtually every HTML file.
                </Typography>
                <Card id="exampleContainer">
                <div class="codeExample">
                    <p className="codeExampleText">
                        &lt;!DOCTYPE html&gt;<br/>
                        &lt;html lang="en"&gt;<br/>
                            &emsp;&lt;head&gt;<br/>
                                &emsp;&emsp;&lt;title&gt;Tab title to display in browser&lt;/title&gt;<br/>
                            &emsp;&lt;/head&gt;<br/>
                            &emsp;&lt;body&gt;<br/>
                            &emsp;&emsp;&lt;p&gt;Hello, world!&lt;/p&gt;<br/>
                            &emsp;&lt;/body&gt;<br/>
                        &lt;/html&gt;<br/>
                    </p>
                </div>
                <Typography variant="p" id="exampleLabel">
                A simple example HTML file
                </Typography>
                </Card>
            </div>
            <div class="stepParagraph">
                <Typography variant="p">
                    HTML files are made of nested tags (the things in &lt; &gt;). 
                    Some tags will have a starting "open" tag of the form &lt;tag&gt; and an ending "closing" tag of the form &lt;/tag&gt; 
                    with content in between, while others will just have one tag of the form &lt;tag&gt;.
                    The &lt;!DOCTYPE html&gt; says that this file will consist of HTML code.
                    (If you've seen an html file that starts with something different after the !DOCTYPE, it was probably using an older version of HTML.
                    We'll be using the HTML5, which is the latest version)
                    All of the html code will be contained with &lt;html&gt; tags, and it will be broken up into a "head" and a "body".
                    Information about the website, non-HTML code, and references to other files will go between the &lt;head&gt; and &lt;/head&gt;.
                    The content we want to display on the website will go between the &lt;body&gt; and &lt;/body&gt;.
                    In this case, we want to display the text "Hello, world!" (a common first task when learning a new type of programming).
                    This is accomplished using the &lt;p&gt; (as in paragraph) tag, with the text content we want to display put in between the opening and closing p tags.
                </Typography>
            </div>
            <div class="stepParagraph">
                <Typography variant="p">
                    If we put this code into a ____.html file (any name will work for our current purposes as long as the file is of type HTML) 
                    and open it in a browser (either by double-clicking on the file or using the right click menu from a file explorer),
                    it will open up a new tab which will display the text "Hello, world!". You can copy and paste the code to try it for yourself!
                    (Note that editing the file won't immediately affect the page; you'll have to save the file and reload the tab to see the updates.)
                </Typography>
            </div>
          </div>
        </div>
    )
  }
  
  export default Step1;