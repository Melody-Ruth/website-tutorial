import React from 'react';
import Typography from '@mui/material/Typography';
import '../App.css';
import './Tutorial/Tutorial.css';
import { Divider, Link } from '@mui/material';

const About = () => {
    return (
      <div className="pContainer">
          <Typography variant="h4" color="secondary.dark" sx={{ mb: "0.8em"}}>
          Welcome!
          </Typography>
          <div id="1.1" className="miniStep">
            <Typography variant="h5" color="primary">
            About the tutorial
            </Typography>
            <div class="stepParagraph">
                <Typography variant="p">
                Have you been thinking about learning web development?
                Maybe you need to make a website for a job, a class, or an organization, or maybe you’re just trying to learn a new skill. 
                Either way, this website is designed to help you get started making websites with HTML and CSS. 
                If you follow all of the steps, by the end of the tutorial you will have an ocean-themed website with text and images arranged according to a custom layout.
                 If this is your first time programming with HTML and CSS, start with <Link href='/website-tutorial/'>step 1 of the tutorial</Link> and follow along.
                 If you already have a bit of experience, you can also hop in anywhere and use the steps independently.
                 Once you’ve learned everything the tutorial has to offer, check out <Link href='/website-tutorial/links'>Resources</Link> for some recommended websites to help you learn more advanced topics.</Typography>
            </div>
          </div>
          <Divider/>
          <div id="1.2" className="miniStep">
            <Typography variant="h5" color="primary">
            About the site
            </Typography>
            <div class="stepParagraph">
                <Typography variant="p">
                This website was created using HTML, CSS, JavaScript, React.js, and Material-UI. 
                React.js is a JavaScript framework, meaning it is built with and fits into JavaScript, providing pre-packaged functionality to streamline the programming process. 
                React.js provides tools to help with managing the state of websites and breaking code up into modular pieces, called components. 
                Material-UI is a React library that provides tools for styling and specific components that are common in modern websites. 
                This tutorial focuses only on HTML and CSS since learning all of these languages/frameworks/libraries at once would over-complicate what is meant to be an introductory tutorial. 
                Everything in the tutorial is still applicable to programs that also JavaScript, React.js, and/or Material-UI. 
                In fact, doing a few full projects with just HTML, CSS, and JavaScript will give you skills that will be useful on harder React projects when more complicated functionality is required.
                 Once you have some experience first with just HTML and CSS, then with HTML, CSS, and JavaScript, React is a great skill to learn. 
                 Some of the pages linked in <Link href='/website-tutorial/links'>Resources</Link> are React tutorials. 
                 If you want to see how this website specifically is made, you can find the code in the <Link href='https://github.com/Melody-Ruth/website-tutorial'>Github repository</Link>.
                </Typography>
            </div>
          </div>
          <Divider/>
          <div id="1.3" className="miniStep">
            <Typography variant="h5" color="primary">
            About the creator
            </Typography>
            <div class="stepParagraph">
                <Typography variant="p">
                Melody Ruth is currently studying computer science at UC San Diego, where she is also doing research on sampling strategies for graphics application.
                 She got started with web development seven years ago and has experience with HTML, CSS, JavaScript, React.js, Material-UI, and Vue.js. 
                A selection of the projects she’s done can be found on her <Link href='https://melody-ruth.github.io/portfolio2/'>portfolio website</Link> or <Link href='https://melody-ruth.github.io/portfolio2/'>Github</Link>. 
                Her teaching experience includes tutoring at the San Diego City College Math Center, teaching campers programming as a ThoughtSTEM summer intern, and volunteering at the San Diego Public Library Homework Help Center.
                 For professional inquiries, contact Melody either through <Link href='https://www.linkedin.com/in/melodyruth/'>Linkedin messaging</Link> or through <Link href='https://melody-ruth.github.io/portfolio2/contact'>her website</Link>.
                </Typography>
            </div>
          </div>
        </div>
    )
  }
  
  export default About;