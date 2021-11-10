import React,{useState} from 'react';

export default function Textform(props) 
{
    const handleupClick= ()=>{
       // setText("you have clicked on handleupClick"+text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","success");
    }
    const handlelowClick=()=>{
        let newText2=text.toLocaleLowerCase();
        setText(newText2);
        props.showAlert("Converted to lowercase","success");
    }
    const handleonchange= (event)=>{
       console.log("on change");
       setText(event.target.value);
    }
    const clearText=()=>{
        let newText='';
        setText(newText);
        props.showAlert("Cleared text","success");
    }
    const handleCopy=()=>{
        let text=document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clickboard","success");
    }
    const handleExtraSpace=()=>{
        let newText=text.split(/[  ]+/);//remeber two spaces
        setText(newText.join(" "))
    }
    const[text,setText] = useState("enter text here:");

    //setText("newText");correct way to change the state
    return (
        <>
    <div className="container"  style={{color:props.mode==="black"?"white":"black"}}>
           <div class="mb-3">
               <h2 className="my-2">{props.heading}</h2>
               <label for="myBox" className="form-label">Example</label>
               <textarea className="form-control" value={text} style={{backgroundColor:props.mode==="black"?"grey":"white",color:props.mode==="black"?"white":"black"}}  onChange={handleonchange} id="myBox" rows="6"></textarea>
               {/*onchange---=to type in textbox*/}
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleupClick}>Convert to upperCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handlelowClick}>Convert to lowerCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={clearText}>Clear text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy text</button>
            <button disabled={text.length===0} className="btn btn-primary my-2" onClick={handleExtraSpace}>Remove extra spaces</button>

   </div>
   <div className="container" style={{color:props.mode==="black"?"white":"black"}}>

       <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and  {text.length}characters</p>
       <h2>Preview</h2>
       <p>{text.length>0?text:"nothing to preview"}</p>
   </div>

   </>
    )
}
