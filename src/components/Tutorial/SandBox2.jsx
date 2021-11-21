import React, { useState, useEffect, useRef } from 'react';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import '../../App.css';
import './Tutorial.css';
import './SandBox.css';

const SandBox2 = (props) => {
    //const [builtInCode, setBuiltCode]
    const [srcValue, setSrcValue] = useState('"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Gfp-florida-daytona-beach-beach-shoreline.jpg/1200px-Gfp-florida-daytona-beach-beach-shoreline.jpg"');
    const [widthValue, setWidthValue] = useState(300);
    const [heightValue, setHeightValue] = useState(150);
    const [srcError, setSrcError] = useState(false);
    const [srcErrorText, setSrcErrorText] = useState("");
    const [widthError, setWidthError] = useState(false);
    const [widthErrorText, setWidthErrorText] = useState("");
    const [heightError, setHeightError] = useState(false);
    const [heightErrorText, setHeightErrorText] = useState("");
    const updateInput = (e) => {
        setSrcValue(e.target.value);
        setSrcError(e.target.value.length < 2 || e.target.value.charAt(0) != '"' || e.target.value.charAt(e.target.value.length-1) != '"');
        if (e.target.value.length < 2 || e.target.value.charAt(0) != '"' || e.target.value.charAt(e.target.value.length-1) != '"') {
            setSrcErrorText("Image source locations must be in quotes")
        } else {
            setSrcErrorText("");
        }
    }
    const updateInput2 = (e) => {
        setWidthValue(e.target.value);
        let regex = new RegExp('^[0-9]*$');
        setWidthError(!regex.test(e.target.value));
        if (!regex.test(e.target.value)) {
            setWidthErrorText("Width must be a positive integer")
        } else {
            setWidthErrorText("");
        }
    }
    const updateInput3 = (e) => {
        setHeightValue(e.target.value);
        let regex = new RegExp('^[0-9]*$');
        setHeightError(!regex.test(e.target.value));
        if (!regex.test(e.target.value)) {
            setHeightErrorText("Height must be a positive integer")
        } else {
            setHeightErrorText("");
        }
    }
    return (
        <Card id="cardContainer">
            <div id="container">
            <div id="codeInput">
                <p className="codeInputText">
                    &lt;!DOCTYPE html&gt;<br/>
                    &lt;html lang="en"&gt;<br/>
                    &emsp;&lt;head&gt;<br/>
                    &emsp;&emsp;&lt;title&gt;First website&lt;/title&gt;<br/>
                    &emsp;&lt;head/&gt;<br/>
                    &emsp;&lt;body&gt;<br/>
                    &emsp;&emsp;&lt;img&emsp;<br/>
                    &emsp;&emsp;&emsp;src=
                </p>
                <TextField
                    value={srcValue} error={srcError} onChange={updateInput} variant="standard" sx={{width: '65%'}} className="codeInputText" id="changeableCode" size="string">
                </TextField>
                <p className="codeInputText">
                    <br/>&emsp;&emsp;&emsp;width=
                </p>
                <TextField
                    value={widthValue} error={widthError} onChange={updateInput2} variant="standard" sx={{width: '65%'}} className="codeInputText" id="changeableCode" size="string">
                </TextField>
                <p className="codeInputText">
                    <br/>&emsp;&emsp;&emsp;height=
                </p>
                <TextField
                    value={heightValue} error={heightError} onChange={updateInput3} variant="standard" sx={{width: '65%'}} className="codeInputText" id="changeableCode" size="string">
                </TextField>
                <p className="codeInputText">
                    <br/>&emsp;&emsp;&gt;<br/>
                    &emsp;&lt;body/&gt; <br/>
                    &lt;html/&gt;
                </p>
            </div>
            <div id="result">
                {(srcError || widthError || heightError) ? <p id="errorText">{srcErrorText + "\n" + widthErrorText + "\n" + heightErrorText}</p> : <img src={srcValue.substring(1,srcValue.length-1)} width={widthValue} height={heightValue}/>}
            </div>
            </div>
            <p>Edit the attributes of the &lt;img&gt; tag on the left and see the result generated on the right change</p>
        </Card>
    )
  }
  
  export default SandBox2;