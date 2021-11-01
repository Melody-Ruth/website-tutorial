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
    const updateInput = (e) => {
        setPValue(e.target.value);
        let newP = e.target.value.replace(/<br>/g,"\n");
        setPDisplayValue(newP);
        newP = newP.replace(/<b>|<\/b>/g,"");
        setPError(newP.includes('<') || newP.includes('>'));
    }
    useEffect(() => {  
        //setPDisplayValue(pValue.replace("<br>","\n"));
    }, [pValue]);
    const BoldedText = (text) => {
        const textArray = text.split(/<b>|<\/b>/);
        return (
          <span>
            {textArray.map((item, index) => (
                index % 2 == 0 ? item : <b>{item}</b>
            ))}
          </span>
        );
    }
    return (
        <Card id="container">
            <div id="codeInput">
                <p className="codeInputText">
                    &lt;!DOCTYPE html&gt;<br/>
                    &lt;html lang="en"&gt;<br/>
                    &emsp;&lt;head&gt;<br/>
                    &emsp;&emsp;&lt;meta charset="utf-8" /&gt;<br/>
                    &emsp;&lt;head/&gt;<br/>
                    &emsp;&lt;body&gt;<br/>
                    &emsp;&emsp;&lt;p&gt;
                </p>
                <TextField
                    value={pValue} error={pError} onChange={updateInput} variant="standard" sx={{width: '20em'}} className="codeInputText" id="changeableCode" size="string">
                </TextField>
                <p className="codeInputText">
                    &emsp;&emsp;&lt;/p&gt; <br/>
                    &emsp;&lt;body/&gt; <br/>
                    &lt;html/&gt;
                </p>
            </div>
            <div id="result">
                {pError ? <p id="errorText">You have an error</p> : BoldedText(pDisplayValue)}
            </div>
        </Card>
    )
  }
  
  export default SandBox;