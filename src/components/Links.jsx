import React from 'react';
import { Divider } from '@mui/material';
import Typography from '@mui/material/Typography';
import '../App.css';

const Links = () => {
    return (
      <div className="pContainer">
          <Typography variant="h4" color="secondary.dark" sx={{ mb: "0.8em"}}>
          Resources
          </Typography>
          <div class="stepParagraph">
                <Typography variant="p">
                There are many resources on the internet that can help you learn more about web development.
          These are a few of my favorites that I think would be helpful after completing this tutorial, but I encourage you look for others as well.
          All of these resources are free. Find something that fits your goals and favorite learning format!</Typography>
            </div>
          <div className="miniStep">
            <Typography variant="h5" color="primary">
            Expanding your HTML/CSS knowledge
            </Typography>
            <div class="stepParagraph">
                <Typography variant="p">
                  <a href="https://www.khanacademy.org/computing/computer-programming/html-css" target="_blank">This Khan Academy course</a> is a great
                  way to continue learning HTML and CSS. I used it when I was first learning web development, and it helped me a lot.
                  The beginning of the course will have some overlap with what's in this tutorial, but it also has plenty of information that
                  was outside of the scope of this tutorial. Khan Academy also has their own sandbox feature that you can use to practice creating websites.
                  You can make any projects you want with it, but I would also encourage doing the project challenges that are included in the course, 
                  since they do a good job of making sure you're learning the content.
                </Typography>
            </div>
            <div class="stepParagraph">
                <Typography variant="p">
                  <a href="https://www.codecademy.com/learn/learn-html" target="_blank">This codecademy course</a> also teaches an introduction to web development
                  with HTML. I haven't used this particular course, but I've had great experiences with other codecademy courses.
                  Unlike Khan Academy courses, which have a mix of videos, articles, exercises, and projects, codecademy courses are built of 
                  short articles with frequent challenges. If you don't like the video format, I would recommend this course instead of the Khan Academy one.
                  Codecademy also has other web development courses which are only available with a (paid) pro membership.
                  I haven't taken any of the pro courses since there are so many amazing free resources out there,
                  but if you really like this course, you might want to consider trying one of the pro-only web development courses.
                </Typography>
            </div>
          </div>
          <Divider/>
          <div className="miniStep">
            <Typography variant="h5" color="primary">
            Adding JavaScript
            </Typography>
            <div class="stepParagraph">
                <Typography variant="p">
<a href="https://www.codecademy.com/catalog/language/javascript" target="_blank">This codecademy course</a> is a great way to learn JavaScript.
                I used it when I was first learning the language. It doesn't cover web development at all, 
                but it's a good idea to get familiar with JavaScript before you start using it in your websites.
                This is especially true if you don't have much experience with programming, since JavaScript has a lot more in common with 
                Java, C++, or Python than it does with HTML or CSS, which are by most formal definitions not even programming languages.
                </Typography>
            </div>
            <div class="stepParagraph">
                <Typography variant="p">
                <a href="https://www.khanacademy.org/computing/computer-programming/html-css-js" target="_blank">This Khan Academy Course</a> is great for learning
                how to use JavaScript with the HTML and CSS you've already learned to make interactive websites. It is similar in structure to
                the other Khan Academy course, so if you tried that one and liked it you'll probably also like this one.
                This course isn't an intro to JavaScript, although Khan Academy does have a course fitting that description (Intro to JS: Drawing and Animation).
                I wouldn't recommend that course to someone trying to learn JavaScript for web development since most of it is dedicated to 
                making visual and interactive processing.js programs, but it is a great course in general if that's something you're interested in.
                </Typography>
            </div>
          </div>
          <Divider/>
          <div className="miniStep">
            <Typography variant="h5" color="primary">
            Quick reference
            </Typography>
            <div class="stepParagraph">
                <Typography variant="p">
                <a href="https://www.geeksforgeeks.org/html-brgt-tag/" target="_blank">Geeks4geeks</a> and <a href="https://www.w3schools.com/tags/tag_br.asp" target="_blank">w3schools</a> both are
                great for looking up the details of a specific hmtl tag or css property. Although they do have tutorials, I find that they are mostly useful for 
                looking up something specific, and often I end up on one after a Google search rather than by specifically pulling up the site.
                The login popup on Geeks4Geeks only appears with an 'x' in certain browsers, so I recommend using Chrome if you don't want to make an account.
                I've linked each of their pages on &lt;br&gt;, since that's something we covered in this tutorial.
                You can compare them to see if you prefer the format of one or the other.
                </Typography>
            </div>
            <div class="stepParagraph">
                <Typography variant="p">
                Flexbox makes controlling the placement of items in your page much easier.
                This <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank">Flexbox cheatsheet</a> is useful for learning
                to use Flexbox and for checking a forgotten keyword etc. I often have this open in a tab when I'm working on a web development project.
                </Typography>
            </div>
          </div>
          <Divider/>
          <div className="miniStep">
            <Typography variant="h5" color="primary">
            Beyond HTML, CSS, and JavaScript
            </Typography>
            <div class="stepParagraph">
                <Typography variant="p">
                <a href="https://www.youtube.com/watch?v=w7ejDZ8SWv8" target="_blank">This React youtube tutorial</a> is a great way to get started with React.js. 
                That's one that I used when I was first starting, but there are many others on youtube.
                Sometimes information can get out of date, so depending on how long it's been since this list was updated (11/15/21), you might be better
                off with a more recent tutorial.
                </Typography>
            </div>
          </div>
      </div>
    )
  }
  
  export default Links;