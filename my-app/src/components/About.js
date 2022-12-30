import React from 'react'

export default function About(props) {
  return (
    <div className="container" style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743', border: props.mode ==='dark'? '1px solid white' : '1px solid black', marginTop: `4rem`}}>
            <h1 style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} className='my-3'>About openText</h1>
            <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"
                style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743', border: props.mode ==='dark'? '1px solid white' : '1px solid black'}}>
                    Analyze your Text
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body"
                style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743', border: props.mode ==='dark'? '1px solid white' : '1px solid black'}}>
                    <strong>openText gives you a way to Analyze your text Quickly & Efficiently, Be it Word Count, Character Count, Reading time or Other Text operations like text-to-speech, clearing white spaces, etc.
                    </strong>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"
                style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743', border: props.mode ==='dark'? '1px solid white' : '1px solid black'}}>
                    Free to use
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743', border: props.mode ==='dark'? '1px solid white' : '1px solid black'}}>
                <strong>openText is a free character counter tool that provides instant character count & word count statistics for a given text.</strong>
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"
                style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743', border: props.mode ==='dark'? '1px solid white' : '1px solid black'}}>
                    Browser Compatible
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743', border: props.mode ==='dark'? '1px solid white' : '1px solid black'}}>
                <strong>This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.   
                </strong>
                </div>
                </div>
            </div>
            </div>

            <div className="container my-3">
            </div>
    </div>
  )
}
