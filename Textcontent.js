import React ,{useState} from 'react'

export default function Textcontent() {
  const handleUPclick =()=>{
    
    let newtext=text.toUpperCase();
    settext(newtext);
  }
  const handeleonchange =(event)=>{
    
    settext(event.target.value)
  }
  const handleLoclick=()=>{
    let newtext=text.toLowerCase();
    settext(newtext);
  }
  const [text,settext]=useState("");
  return (
    <>
    <div className='container'>
     
<div className="mb-3 ">
  <h1>Enter Your Text Here</h1>
  <textarea className="form-control" id="exampleFormControlTextarea1" value={text} placeholder={"Enter your text here"}  onChange={handeleonchange} rows="8"></textarea>
</div>
<button className='btn btn-primary mx-1' onClick={handleUPclick}>Convert to UpperCase</button>
<button className='btn btn-danger bg-warning mx-1'  onClick={handleLoclick} >Convert to LowerCase</button>


    </div>
    <div className='container my-3'>
      <h2>Text Summary</h2>
      <p>
        Number of <b>Words {text.split(" ").length-1} </b>and Number of <b>Character </b>  {text.length} 
      </p>
      <p>
        You can Read this in <b> {60*0.008*(text.split(" ").length-1)}</b> Second
      </p>
      <h2>
        Preview-
      </h2>
      <p>{text}</p>

    </div>
    </>
  )
}
