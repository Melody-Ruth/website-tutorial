import React, { useState, useEffect, useRef } from 'react';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import '../../App.css';
import './Tutorial.css';
import './SandBox.css';

const SandBox3 = (props) => {
    //const [builtInCode, setBuiltCode]
    const [paddingValue, setPaddingValue] = useState(0);
    const [paddingError, setPaddingError] = useState(false);
    const [paddingErrorText, setPaddingErrorText] = useState("");
    const updateInput2 = (e) => {
        setPaddingValue(e.target.value);
        let regex = new RegExp('^[0-9]*$');
        setPaddingError(!regex.test(e.target.value));
        if (!regex.test(e.target.value)) {
            setPaddingErrorText("Padding must be a positive integer")
        } else {
            setPaddingErrorText("");
        }
    }
    return (
        <Card id="cardContainer">
            <div id="container">
            <div id="codeInput">
                <p className="codeInputText">
                    #beachImg &#123;<br/>
                    &emsp;width: 100%;<br/>
                    &#125;<br/><br/>
                </p>
                <p className="codeInputText">
                    #beachDiv &#123;<br/>
                    &emsp;background-color: tan;<br/>
                    &emsp;width: 300px;<br/>
                    &emsp;padding: 
                </p>
                <TextField
                    value={paddingValue} error={paddingError} onChange={updateInput2} variant="standard"  className="codeInputText" id="changeableCode" size="string">
                </TextField>
                <p className="codeInputText">
                px;
                <br/>&#125;<br/>
                </p>
            </div>
            <div id="result">
                {paddingError ? <p id="errorText">{paddingErrorText}</p> : 
                <div id="beachDiv" style={{padding: paddingValue+"px"}}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Gfp-florida-daytona-beach-beach-shoreline.jpg/1200px-Gfp-florida-daytona-beach-beach-shoreline.jpg" style={{width:"100%"}}/>
                    <p style={{margin: 0}}>Beautiful beach</p>
                </div>}
            </div>
            </div>
            <p>Edit the attributes of the &lt;img&gt; tag on the left and see the result generated on the right change</p>
        </Card>
    )
  }
  
  export default SandBox3;