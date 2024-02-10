
import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showalert("Converted to upperCase","success");

    }
    const handleOnChange = (event) => {
        setText(event.target.value);
        
    }
    const handledownclick = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showalert("Converted to LowerCase","success");

    }
    const handleclearclick = () => {
        // let newtext = text.toLowerCase();
        setText(''); /// render 
        props.showalert("Text cleared !!","success");
       

    }
    const handlecopytext = () => {
        let text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showalert("Copied to clipboard","success");
       

    }
    const handlespace = () => {
        let newtext=text.split(/[  ]+/);
       setText(newtext.join(" "));
       props.showalert("Spaced Removed ","success");
    
    }
    
    



    const [text, setText] = useState('');

    
    // text="dipak"  wrong way to update text xhsx
    // setText("dipak") correct way to update
    console.log("render")

    return (
        <>
        <div className="container"  style={{color:props.mode==='dark' ? 'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="my-3">
                <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark' ? 'grey':'white',color:props.mode==='dark'?'white':'black'}} onChange={handleOnChange}  id="myBox" rows="7"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase </button>
            &nbsp;&nbsp;
            <button className="btn btn-primary" onClick={handledownclick}>Convert to Lowercase</button>
            &nbsp;&nbsp;<br/>
            <br/>
            <button className="btn btn-danger" onClick={handleclearclick}>Clear text</button>
            &nbsp;&nbsp;
            <button className="btn btn-success" onClick={handlecopytext}>Copy text</button>
            &nbsp;&nbsp;
            <button className="btn btn-warning" onClick={handlespace}>Remove space</button>
          

        </div>
          <div className="container my-3" style={{color:props.mode==='dark' ? 'white':'black'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length-1} words and {text.length} characters</p>
            <p>{0.008* text.split(" ").length}Minutes required to read</p>
             <h2>Preview</h2>
             <p>{text.length>0?text: "Enter something to preview here..."}</p>
          </div>
          </>
    )
}
