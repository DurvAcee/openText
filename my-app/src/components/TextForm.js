import React, { useState } from 'react'



export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleUpperCase = () =>{
        setText(text.toUpperCase());
    }

    const handleOnChange = (event) =>{
        setText(event.target.value);
    }

    const handleLowerCase = () =>{
        setText(text.toLowerCase());
    }
  
    return (
        <>
        <div className="container">
            <h2>{props.heading}</h2>
            <div class="mb-3">
                <textarea className="form-control" id="myTextBox" value={text} onChange={handleOnChange} rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpperCase}>Convert to Upper Case</button>
            <button className="btn btn-primary mx-2" onClick={handleLowerCase}>Convert to Lower Case</button>
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
