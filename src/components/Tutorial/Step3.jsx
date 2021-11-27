import React, { useState, useEffect, useRef } from 'react';
import Card from '@mui/material/Card';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import '../../App.css';
import './Tutorial.css';
import { Divider } from '@mui/material';
import SandBox3 from './SandBox3';

const Step3 = (props) => {
    const ref1 = React.createRef();
    const ref2 = React.createRef();
    const ref3 = React.createRef();
    const [stepRefs, setStepRefs] = useState([]);
    useEffect(() => {
        //console.log(ref1);
        var tempList = [];
        tempList[0] = ref1.current;
        tempList[1] = ref2.current;
        tempList[2] = ref3.current;
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
                    Divs are containers for grouping elements. 
                    All of the elements between the &lt;div&gt; and &lt;/div&gt; will be inside of the div.
                    Nesting is allowed, so this includes other divs.
                    Divs are rectangles, and are by default transparent (only showing the elements inside of them).
                    You can control the appearance of a div using CSS.
                </Typography>
            </div>
            <div class="stepParagraph">
                <Typography variant="p">
                    Suppose we want to add an image with a caption on a tan rectangular background to our website.
                    In order to do this we will put the image and the text inside of a div, then use CSS styling to get the layout we want.
                    By default the image is very large, so we use the width CSS property to make it 100%, which will cause it to fill the width of its "parent,"
                    in this case our div. Then we can control the sizing using the div. We set it to 300px.
                </Typography>
            </div>
            <Card id="exampleContainer">
                <div class="codeExampleContainer">
                    <div class="codeExampleSmall">
                        <p className="codeExampleText">
                            &lt;!DOCTYPE html&gt;<br/>
                            &lt;html lang="en"&gt;<br/>
                                &emsp;&lt;head&gt;<br/>
                                    &emsp;&emsp;&lt;title&gt;Ocean website&lt;/title&gt;<br/>
                                &emsp;&lt;/head&gt;<br/>
                                &emsp;&lt;body&gt;<br/>
                                &emsp;&emsp;&lt;div id="beachDiv"&gt;<br/>
                                    &emsp;&emsp;&emsp;&lt;img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Gfp-florida-daytona-beach-beach-shoreline.jpg/1200px-Gfp-florida-daytona-beach-beach-shoreline.jpg"&gt;<br/>
                                    &emsp;&emsp;&emsp;&lt;p&gt;Beautiful beach&lt;/p&gt;<br/>
                                &emsp;&emsp;&lt;/div&gt;<br/>
                                &emsp;&lt;/body&gt;<br/>
                            &lt;/html&gt;<br/>
                        </p>
                    </div>
                    <div class="codeExampleSmall">
                        <p className="codeExampleText">
                            #beachImg &#123;<br/>
                            &emsp;width: 100%;<br/>
                            &#125;<br/><br/>

                            #beachDiv &#123;<br/>
                            &emsp;background-color: tan;<br/>
                            &emsp;width: 300px;<br/>
                            &#125;<br/>
                        </p>
                    </div>
                </div>
                <Typography variant="p" id="exampleLabel">
                An HTML file and a CSS file to display an image with a caption
                </Typography>
            </Card>
            <div class="stepParagraph">
                <Typography variant="p">
                By default, the image and text will go right up to the edge of the tan rectangle. This would probably look better if there was some padding between the edge of the content and the edge of the div’s rectangle.
                We can accomplish this with the css property padding. (The padding will outside of the part of the div that determines "width", so the image and text will stay the same size but the box will grow beyond 300 pixels.)
                Try changing the number of pixels of padding below:
                </Typography>
            </div>
            <SandBox3/>
            <div class="stepParagraph">
                <Typography variant="p">
                (Best practice is to set size properties like width or padding using relative sizing, not absolute pixels. You can learn more about this <Link href="https://www.w3schools.com/cssref/css_units.asp" target="_blank">here</Link>)
                </Typography>
            </div>
            <div class="stepParagraph">
                <Typography variant="p">
                You’ve reached the end of the tutorial. Congratulations! Hopefully you’ve gotten a taste of what you can accomplish with HTML and CSS. Check out the <Link href='/website-tutorial/links' target="_blank">Resources</Link> to learn more.
                </Typography>
            </div>
            <div class="stepParagraph">
                <Typography variant="p">
                References:<br/>
                Romy, Ben. “Why HTML is Not a Programming Language.” Syracuse University School of Information Studies, 5 April 2012, https://ischool.syr.edu/why-html-is-not-a-programming-language/.
                <br/>W3Schools. “HTML &lt;a&gt; target Attribute.” https://www.w3schools.com/tags/att_a_target.asp.
                <br/>W3Schools. “CSS Box Model.” https://www.w3schools.com/css/css_boxmodel.asp.
                </Typography>
            </div>
          </div>
        </div>
    )
  }
  
  export default Step3;