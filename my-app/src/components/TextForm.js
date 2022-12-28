import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleUpperCase = () =>{
        emptyTextFound();
        setText(text.toUpperCase());
    }

    const handleOnChange = (event) =>{
        setText(event.target.value);
    }

    const handleLowerCase = () =>{
        emptyTextFound();
        setText(text.toLowerCase());
    }

    const handleClearText = () => {
        setText("");
    }

    const emptyTextFound = () => {
        if(!text){
            alert('Please Enter some Text');
        }
}

    const handleCopyClipboard = () => {
        navigator.clipboard.writeText(text).then(function(){
            let result = text ? 'text copied to clipboard!' : 'Please Enter some Text!';
            alert(result);
        }, function(err){
            alert('Failed: Could not copy text: ',err);
        });
    }
  
    return (
        <>
        <div className="container">
            <h2>{props.heading}</h2>
            <div class="mb-3">
                <textarea className="form-control" id="myTextBox" value={text} onChange={handleOnChange} rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpperCase}>Convert to Upper Case</button>
            <button className="btn btn-primary mx-1" onClick={handleLowerCase}>Convert to Lower Case</button>
            <button className="btn btn-danger mx-1" onClick={handleClearText}>Clear Text</button>
            <button className="btn btn-success mx-1" onClick={handleCopyClipboard}>Copy to Clipboard</button>
        </div>

        <div className="container my-3">
            <h2> Your Text Summary</h2>
            <p> {text.split(" ").length} Words, {text.length} Characters</p>
            <p> {0.008 * text.split(" ").length} Minutes to Read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
