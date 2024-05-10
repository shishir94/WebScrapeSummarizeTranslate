import React, { useState } from 'react';
import Translate from './Translate';

export default function Textform(props) {
    const [text, setText] = useState('Enter URL');
    const [text1, setText1] = useState('Enter your key');

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const handleFocus = (event) => {
        if (event.target.value === 'Enter URL') {
            setText('');
        }
    };

    const handleBlur = (event) => {
        if (event.target.value.trim() === '') {
            setText('Enter URL');
        }
    };


    const handleOnChange1 = (event) => {
        setText1(event.target.value);
    };

    const handleFocus1 = (event) => {
        if (event.target.value === 'Enter your key') {
            setText1('');
        }
    };

    const handleBlur1 = (event) => {
        if (event.target.value.trim() === '') {
            setText1('Enter your key');
        }
    };

    return (
        <div>  
            <h2>Enter your chatgpt key</h2>
            <div className="mb-3 my-3">
                <textarea
                    className="form-control"
                    value={text1}
                    onChange={handleOnChange1}
                    onFocus={handleFocus1}
                    onBlur={handleBlur1}
                    id="myBox"
                    rows="1">
                </textarea>
            </div>  
            <h2>{props.heading}</h2>
            <div className="mb-3 my-3">
                <textarea
                    className="form-control"
                    value={text}
                    onChange={handleOnChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    id="myBox"
                    rows="1">
                </textarea>
            </div>        
            <div>
                <div className="buttons my-3">
                    <button className="btn btn-primary my-3">Get Summary</button>
                </div>
            </div>
            <div className="container">
                <h2>{props.heading1}</h2>
                <Translate text={text} setText={setText} />
            </div>
        </div>
    );
}
