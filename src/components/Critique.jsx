import React from 'react';
import Typography from '@mui/material/Typography';
import '../App.css';

const Critique = () => {
    return (
      <div className="pContainer">
        <Typography variant="h4" color="secondary.dark" sx={{ mb: "0.8em"}}>
        Who should learn to code?
        </Typography>
        <div class="stepParagraph">
          <Typography variant="p">
          In “Please don’t learn to code,” Basel Farag argues that the recent push to encourage everyone to learn to code is harmful because it sells the public on an idealized version of the software engineering career path. Farag first paints a picture of the forces encouraging everyone to follow this path, from politicians to non-profits to bootcamps. Farag criticizes bootcamps for overselling their product and public figures for encouraging people to pursue coding. Farag uses personal anecdotes to explain the difficulties of the software engineering career path, and argues that although it is a legitimate path it is not the best one for many people who are being urged to pursue it.
          </Typography>
        </div>
        <div class="stepParagraph">
          <Typography variant="p">
          I agree with Farag’s arguments that the software engineering field isn’t for everyone, but I think a better distinction needs to be made between “learning to code” and “becoming a software engineer.” In order to become a software engineer you must first learn to code, but learning to code can still be useful outside of following a software engineering career path. Farag conflates “learning to code” and “becoming a software engineer.” In the opening of the article he cites the “Learn to Code” movement, including Code.org as “evangelizing what they view as a necessary skill for tomorrow’s workforce.” Code.org’s mission, per their website, is to “expand access to computer science in schools and increase participation by young women and students from other underrepresented groups.” Based on the rest of the article, Farag is arguing against the position that everyone should strongly consider going to a bootcamp or otherwise becoming software engineer, but Code.org simply wants to expose K-12 students to a potential career path that they might not otherwise have gotten to try. Students already learn many skills that aren’t applicable to all careers. Besides ignoring the distinction between adults switching careers and children getting exposed to a new skill, Farag ignores the possibility of coding being useful for adults who don’t enter the software industry. “I would no more urge everyone to learn to program then I would urge everyone to learn to plumb,” he writes, but his metaphor can also argue against him: basic knowledge of sink plumbing can help people avoid the expense of a plumber.
          </Typography>
        </div>
        <div class="stepParagraph">
          <Typography variant="p">
          Despite my disagreements, I think “Please don’t learn to code” is a valuable article because it offers a counter balance to the sometimes overwhelming campaign to teach absolutely everyone how to program. Farag has great arguments for why not everyone should become a software engineer, and even on the level of learning to code I agree that “Coding is not the new literacy.” In the context of this tutorial, this means I can’t universally recommend it as the best way to make a web page (look into Wordpress, Wix, Squarespace, etc before deciding to use HTML and CSS), and I certainly can’t recommend it as the best way to start a new career path. However, I think that coding is a rewarding way to engage with the digital world, an exciting challenge to develop your mind, and a useful skill for many careers. Coding isn’t universally applicable, but it is an amazing tool to have in your tool belt.
          </Typography>
        </div>
        <div class="stepParagraph">
          <Typography variant="p">
          Farag, Basel. “Please Don’t Learn to Code.” Tech Crunch, 10 May 2016, https://techcrunch.com/2016/05/10/please-dont-learn-to-code/. 
          </Typography>
        </div>
        
      </div>
    )
  }
  
  export default Critique;