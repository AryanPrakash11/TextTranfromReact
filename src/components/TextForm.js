import React ,{useState} from 'react'

const TextForm = (props) => {
  const [text, setText] = useState("");
   const UpperCase = ()=>{
    const upperText = text.toUpperCase();
    setText(upperText);
   }
   const LowerCase = ()=>{
    const lowerText = text.toLowerCase();
    setText(lowerText);
   }
   const ExtraSpace = ()=>{
    const removedSpace = text.replace(/\s{2,}/g,' ').trim();  
    setText(removedSpace);
    props.showAlert("Extra space is removed","warning")
   }
   const CopyText =()=>{
    navigator.clipboard.writeText(text);
    props.showAlert("Text is copied to clipboard","success")
     
   }
   const handleOnChange = (event)=>{
     setText(event.target.value)
   }

  return (
    <>
    <div className="container">
      <h1 className='mt-2'>{props.heading}</h1>
      <textarea className="form-control mt-2 mx-2" id="myBox" rows="8" placeholder='Enter your text' value={text} onChange={handleOnChange}></textarea>
      <button disabled={text.length==0} className="btn btn-primary mt-2 mx-2" onClick={UpperCase}>To Uppercase</button>
      <button disabled={text.length==0} className="btn btn-primary mt-2 mx-2" onClick={LowerCase}>To Lowercase</button>
      <button disabled={text.length==0} className="btn btn-primary mt-2 mx-2" onClick={ExtraSpace}>To remove extra space</button>
      <button disabled={text.length==0} className="btn btn-primary mt-2 mx-2" onClick={CopyText}>Copy Clipboard</button>
      <p className='mt-2'>Total charcater is {text.length} and total word is {text.split(" ").filter((element)=>{return element.length!==0}).length}</p>
    </div>
    </>
  )
}

export default TextForm
