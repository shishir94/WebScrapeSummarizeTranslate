import React, {useState } from 'react';
import Button from './Button';

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
            <Button/>
            <span style={{ margin: '0 10px' }}></span>
            <h2>{props.heading1}</h2>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" rows="8"></textarea>
            </div>
        </div>
    )
}



