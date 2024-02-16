
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
        navigator.clipboard.writeText(text);
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
                <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark' ? '#042743':'white',color:props.mode==='dark'?'white':'black'}} onChange={handleOnChange}  id="myBox" rows="7"></textarea>
            </div>
            <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to uppercase </button>
          
            <button className="btn btn-primary mx-2 my-2" onClick={handledownclick}>Convert to Lowercase</button>
            
            <button className="btn btn-danger mx-2 my-2" onClick={handleclearclick}>Clear text</button>
         
            <button className="btn btn-success mx-2 my-2" onClick={handlecopytext}>Copy text</button>
           
            <button className="btn btn-warning mx-2 my-2" onClick={handlespace}>Remove space</button>
          

        </div>
          <div className="container my-3" style={{color:props.mode==='dark' ? 'white':'black'}}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return  element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008* text.split(" ").filter((element)=>{return  element.length!==0}).length}Minutes required to read</p>
             <h2>Preview</h2>
             <p>{text.length>0?text: "Enter something to preview here..."}</p>
          </div>
          </>
    )
}
