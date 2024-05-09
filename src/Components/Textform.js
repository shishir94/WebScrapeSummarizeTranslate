import React, { useState } from 'react';
import Translate from './Translate';

export default function Textform(props) {
    const [text, setText] = useState('Enter URL');

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    return (
        <div>   
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="1"></textarea>
            </div>        
            <div>
                <div className="buttons">
                    <button className="btn btn-primary">Get Summary</button>
                </div>
            </div>
            <div className="container my-3">
                <h2>{props.heading1}</h2>
                <Translate text={text} setText={setText} />
            </div>
        </div>
    )
}
