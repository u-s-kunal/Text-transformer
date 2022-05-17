import React, { useState } from 'react'


// Declare a new state variable, which we'll call "count"


export default function TextForm(props) {
    const upperBtn = () => {
        let newText = text.toUpperCase();
        setText(newText);

    }
    const clearText = () => {
        let newText = '';
        setText(newText);

    }
    const copyText = () => {
        let newText = text;
        navigator.clipboard.writeText(newText);
        setText(newText);
        props.showAlert('Text has been copied')

    }
    const lowText = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const textUpdate = (event) => {
        setText(event.target.value)
    }
    const extraSpace =()=> {
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '));
    
    }
    

    const [text, setText] = useState(' ');
    return (
        <>
            <div className="container my-4">
                <div className="row">
                    <div className="col-12">
                        <h1>{props.heading}</h1>
                    </div>
                    <div className="col-12">
                        <div className="mb-3">
                            <textarea className="form-control " id="textBox" onChange={textUpdate} rows="8" value={text}></textarea>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <button type="button" onClick={upperBtn} className="btn btn-outline-dark m-2 ">To UpperCase</button>
                            <button type="button" onClick={lowText} className="btn btn-outline-dark m-2  ">To LowerCase</button>
                            <button type="button" id='copyBtn' onClick={copyText} className="btn btn-outline-dark m-2  ">Copy Text</button>
                            <button type="button" onClick={extraSpace} className="btn btn-outline-dark m-2  ">Remove Extra spaces</button>
                            <button type="button" onClick={clearText} className="btn btn-outline-dark m-2  col-6 col-lg-2 ">Clear</button>
                        </div>


                    </div>

                </div>


            </div>

            <div className="container my-5">
                <h2 className='text  my-3'> Text Summary</h2>
                <p> {text === ''? text.split(' ').length-1:text.split(' ').length} Words and  {text.length} Characters.</p>
                <p> Will take average {0.48 * text.split(" ").length} Seconds to read.</p>
                <h2>Preview</h2>
                <p>{text.length>''? text:'Enter text to analyze...!!!'}</p>
            </div>


        </>
    )
};

