import React, { useState } from 'react'



export default function TextForm(props) {
    const [text, setText] = useState('Enter text here');

    const handleOnClick = () =>{
        setText(text.toUpperCase());
    }

    const handleOnChange = (event) =>{
        setText(event.target.value);
    }
  
    return (
        <div>
            <h2>{props.heading}</h2>
            <div class="mb-3">
                <textarea className="form-control" id="myTextBox" value={text} onChange={handleOnChange} rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleOnClick}>Convert to UpperCase</button>
        </div>
    )
}
