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
        setText(text.replace(/\s\s+/g, ' '));
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
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743', marginTop: `4rem`}}>
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" id="myTextBox" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white',
            color: props.mode==='dark'?'white':'#042743'}} rows="8"></textarea>
            </div>
            <button className="btn btn-dark my-2 mx-1" onClick={handleTextToSpeech}>Text to Speech (Experimental)</button>
            <button className="btn btn-primary my-2 mx-1" onClick={handleUpperCase}>Convert to Upper Case</button>
            <button className="btn btn-primary my-2 mx-1" onClick={handleLowerCase}>Convert to Lower Case</button>
            <button className="btn btn-success my-2 mx-1" onClick={handleCopyClipboard}>Copy to Clipboard</button>
            <button className="btn btn-secondary my-2 mx-1" onClick={handleWhiteSpaces}>Remove White Spaces</button>
            <button className="btn btn-danger my-2 mx-1" onClick={handleClearText}>Clear Text</button>
        </div>

        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h2 style={{marginTop: `2rem`}}> Summary of your Text </h2>
                <div className="textSummary" style={{marginTop: `1rem`}}>
                    <p> Number of Words : {!text? 0 : text.trim().split(/\s+/).length} Words.</p>
                    <p> Number of Characters : {text.length} Characters.</p>
                    <p> Reading Time : {!text? 0 : 0.008 * text.split(" ").length} seconds.</p>
                </div>
        </div>
        </>
    )
}
