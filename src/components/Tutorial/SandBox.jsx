import React, { useState, useEffect, useRef } from 'react';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import '../../App.css';
import './Tutorial.css';
import './SandBox.css';

const SandBox = (props) => {
    //const [builtInCode, setBuiltCode]
    const [pValue, setPValue] = useState('Try writing something here!');
    const [pDisplayValue, setPDisplayValue] = useState('Try writing something here!');
    const [pError, setPError] = useState(false);
    const [pErrorText, setPErrorText] = useState("");
    const checkFormatError = (text) => {
        var startTags = [];
        var inUse = new Map();
        inUse.set('b',false);
        inUse.set('u',false);
        inUse.set('i',false);
        var temp = text.indexOf('<');
        if (temp === text.length-1) {
            console.log(1);
            return "Error: Incomplete Tag";
        }
        //console.log("Start");
        while (temp != -1) {
            console.log(text.substring(temp));
            if (text.charAt(temp+1) === '/') {
                //closing tag
                if (temp > text.length-4) {
                    return "Error: Incomplete tag";
                } else if (text.charAt(temp+3) !== '>') {
                    return "Error: Incomplete or unknown tag";
                } else if (startTags.length === 0) {
                    return "Error: Closing tag before opening tag";
                } else if (text.charAt(temp+2) !== startTags.pop()) {
                    return "Error: Closing tag doesn't match most recent opening tag";
                } else if (!inUse.has(text.charAt(temp+2))) {
                    return "Error: Unknown tag";
                } else {
                    inUse.set(text.charAt(temp+2),false);
                }
            } else {
                //opening tag
                if (temp > text.length-3) {
                    return "Error: Incomplete tag";
                } else if (text.charAt(temp+2) !== '>') {
                    return "Error: Incomplete or unknown tag";
                } else if (inUse.get(text.charAt(temp+1))) {
                    return "Error: Nested tags of the same type";
                } else if (!inUse.has(text.charAt(temp+1))) {
                    return "Error: Unknown Tag";
                } else {
                    inUse.set(text.charAt(temp+1),true);
                    startTags.push(text.charAt(temp+1));
                }
            }
            temp = text.indexOf('<',temp+1);
        }
        if (startTags.length != 0) {
            console.log(4);
            return "Error: Unclosed tag";
        }
        return "";
    }
    const updateInput = (e) => {
        setPValue(e.target.value);
        let newP = e.target.value.replace(/<br>/g,"\n");
        setPDisplayValue(newP);

        /*newP = newP.replace(/<b>|<\/b>/g,"");
        newP = newP.replace(/<i>|<\/i>/g,"");
        newP = newP.replace(/<u>|<\/u>/g,"");
        setPError(newP.includes('<') || newP.includes('>'));*/
        setPError(checkFormatError(newP).length !== 0);
        setPErrorText(checkFormatError(newP));
    }
    useEffect(() => {  
        //setPDisplayValue(pValue.replace("<br>","\n"));
    }, [pValue]);
    const generalText = (text, depth) => {
        var tagStart = text.search(/<.>/);
        var tagEnd = -1;
        if (tagStart != -1) {
            tagEnd = text.indexOf("/"+text.charAt(tagStart+1)+">");
        }
        console.log(text);
        console.log(tagStart);
        console.log(tagEnd);
        if (depth > 4) {
            return (
                <span>
                    {text}
                </span>
            ); 
        }
        if (tagStart === -1 || tagEnd === -1) {
            return (
                <span>
                    {text}
                </span>
            ); 
        } else {
            if (text.charAt(tagStart+1) === 'b') {
                return (
                    <span>
                        {text.substring(0,tagStart)}
                        <b>{generalText(text.substring(tagStart+3,tagEnd-1),depth+1)}</b>
                        {generalText(text.substring(tagEnd+3),depth+1)}
                    </span>
                )
            } else if (text.charAt(tagStart+1) === 'u') {
                return (
                    <span>
                        {text.substring(0,tagStart)}
                        <u>{generalText(text.substring(tagStart+3,tagEnd-1),depth+1)}</u>
                        {generalText(text.substring(tagEnd+3),depth+1)}
                    </span>
                )
            } else {
                return (
                    <span>
                        {text.substring(0,tagStart)}
                        <i>{generalText(text.substring(tagStart+3,tagEnd-1),depth+1)}</i>
                        {generalText(text.substring(tagEnd+3),depth+1)}
                    </span>
                )
            }
        }
        return (
            <span>
                {text}
            </span>
        );
    }
    /*const BoldedText = (text) => {
        const textArray = text.split(/<b>|<\/b>/);
        console.log("Bold level: ");
        console.log(textArray);
        return (
          <span>
            {textArray.map((item, index) => (
                index % 2 == 0 ? ItalicText(item) : <b>{ItalicText(item)}</b>
            ))}
          </span>
        );
    }
    const ItalicText = (text) => {
        const textArray = text.split(/<i>|<\/i>/);
        console.log("Italic level: ");
        console.log(textArray);
        return (
          <span>
            {textArray.map((item, index) => (
                index % 2 == 0 ? UnderlineText(item) : <i>{UnderlineText(item)}</i>
            ))}
          </span>
        );
    }
    const UnderlineText = (text) => {
        const textArray = text.split(/<u>|<\/u>/);
        console.log("Underline level level: ");
        console.log(textArray);
        return (
          <span>
            {textArray.map((item, index) => (
                index % 2 == 0 ? item : <u>{item}</u>
            ))}
          </span>
        );
    }*/
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
                    &emsp;&emsp;&lt;p&gt;
                </p>
                <TextField
                    value={pValue} error={pError} onChange={updateInput} variant="standard" sx={{width: '65%'}} className="codeInputText" id="changeableCode" size="string">
                </TextField>
                <p className="codeInputText">
                    &lt;/p&gt; <br/>
                    &emsp;&lt;body/&gt; <br/>
                    &lt;html/&gt;
                </p>
            </div>
            <div id="result">
                {pError ? <p id="errorText">{pErrorText}</p> : generalText(pDisplayValue,0)}
            </div>
            </div>
            <p>Edit the text between the &lt;p&gt; and &lt;/p&gt; on the left and see the result generated on the right change</p>
        </Card>
    )
  }
  
  export default SandBox;