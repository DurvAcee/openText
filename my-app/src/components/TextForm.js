import React, { useState } from 'react'
import { unstable_renderSubtreeIntoContainer } from 'react-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export default function TextForm(props) {

    const mySwal = withReactContent(Swal);
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
        emptyTextFound();
        setText("");
    }

    const emptyTextFound = () => {
        if(!text){
            mySwal.fire({
                icon: 'error',
                title: 'Oopss...',
                text: 'Please Enter some Text'
            });
        }
    }

    const handleCopyClipboard = () => {
        navigator.clipboard.writeText(text).then(function(){
            let result = text ? 'text copied to clipboard!' : 'Cannot copy Empty Text!';
            let iconText = text ? 'success' : 'error';

            mySwal.fire({
                icon: iconText,
                title: result,
                timer: 1200,
                timerProgressBar: true,
                showCancelButton: false,
                showConfirmButton: false
            });

        }, function(err){
            let errorText = 'Failed to copy Text: ' + err;
           mySwal.fire({
                icon : 'warning',
                title: errorText
           });
        });
    }

    const handleWhiteSpaces = () => {
        emptyTextFound();
        setText(text.trim());
    }

    const handleTextToSpeech = () => {
        emptyTextFound();
        if(text){
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.pitch = 1;

            window.speechSynthesis.speak(utterance);
        }
    }
  
    return (
        <>
        <div className="container">
            <h2>{props.heading}</h2>
            <div class="mb-3">
                <textarea className="form-control" id="myTextBox" value={text} onChange={handleOnChange} rows="8"></textarea>
            </div>
            <button className="btn btn-dark mx-1" onClick={handleTextToSpeech}>Text to Speech (Experimental)</button>
            <button className="btn btn-primary mx-1" onClick={handleUpperCase}>Convert to Upper Case</button>
            <button className="btn btn-primary mx-1" onClick={handleLowerCase}>Convert to Lower Case</button>
            <button className="btn btn-success mx-1" onClick={handleCopyClipboard}>Copy to Clipboard</button>
            <button className="btn btn-secondary mx-1" onClick={handleWhiteSpaces}>Remove White Spaces</button>
            <button className="btn btn-danger mx-1" onClick={handleClearText}>Clear Text</button>
        </div>

        <div className="container my-3">
                <h2> Summary of your Text </h2>
                <p> Number of Words : {text.split(" ").length}</p>
                <p> Number of Characters : {text.length} Characters</p>
                <p> Reading Time : {0.008 * text.split(" ").length} seconds.</p>
        </div>
        </>
    )
}
