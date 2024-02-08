
import React,  {useState} from 'react'


export default function TextForm(props) 
{
    const handleUpClick= ()=>{
        let newtext=text.toUpperCase();
        setText(newtext);

    }
    const handleOnChange= (event)=>{
            setText(event.target.value);
    }



    const [text, setText]=useState('');
// text="dipak"  wrong way to update text
// setText("dipak") correct way to update

    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="my-3">
                <textarea className="form-control" value={text}  onChange={handleOnChange}  id="myBox" rows="10"></textarea>
            </div>
            <button className="btn btn-danger" onClick={handleUpClick}>Convert to uppercase</button>
            
            {/* <button className="btn btn-danger">Convert to uppercase</button>
            <button className="btn btn-danger">Convert to uppercase</button> */}
        </div>
    )
}
