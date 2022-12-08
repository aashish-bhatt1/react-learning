import React, {useState} from 'react'

export default function Textform(props) {
  const onChangeEvent = (event)=>{
   // console.log(event.target.value);
   let textar = event.target.value;
   settextarea(textar);
  }
  const onDownFunction = ()=> {
    settextarea(textarea.toLowerCase());
    props.alert_msg('Text has been converted to lowercase!', 'success');
  }
  const onClickFunction = ()=>{
    let upperText = textarea.toUpperCase();
    settextarea(upperText)
    props.alert_msg('Text has been converted to uppercase!', 'success')
  }

  // Copy text area text
  const copy_text = ()=>{
    var selected_text = document.getElementById('first_app');
    selected_text.select();
    navigator.clipboard.writeText(selected_text.value);
    props.alert_msg('Text copied!', 'success');
  }

  // Remove extra spaces
  const remove_extra_spaces = ()=>{
    let remove_text = textarea.split(/[ ]+/);
    settextarea(remove_text.join(" "))
    props.alert_msg('Extra spaces has been removed from text!', 'success');
  }

  // it will speak whatever is in textarea
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = textarea;
    window.speechSynthesis.speak(msg);
  }

  const clear_text = () => {
    settextarea('');
  }

  // Reverse the text
  const reverse_text = () => {
    let newText = textarea.split(' ').reverse().join(' ');
    settextarea(newText);
  };
  
  const [text, settext] = useState('Enter text below to count number...');
  const [textarea, settextarea] = useState('');
  return (
    <div className="container">
        <div className="mb-3 mt-4 text-center" style={{ backgroundColor: props.mode === 'dark'? '#000f56' : '#ffffff' }}>
            <h1 style={{ backgroundColor: props.mode === 'dark'? '#000f56' : '#ffffff', color: props.mode === 'dark'? '#ffffff' : '#000f56' }}>{props.heading} - {text}</h1>
            <label htmlFor="first_app" className="form-label" style={{ color: props.mode === 'dark'? '#ffffff' : '#000f56' }}>Example textarea</label>
            <textarea className="form-control mb-4" value={textarea} onChange={onChangeEvent} style={{ backgroundColor: props.mode === 'dark'? '#000f56' : '#ffffff', color: props.mode === 'dark'? '#ffffff' : '#000f56' }} placeholder={text} id="first_app" rows="8"></textarea>
            <button disabled={textarea.length === 0} className="btn btn-primary mx-2" onClick={onClickFunction}>Convert to uppercase</button>
            <button disabled={textarea.length === 0} className='mx-2 btn btn-primary' onClick={onDownFunction}>Convert to lowercase</button>
            <button disabled={textarea.length === 0} className='mx-2 btn btn-primary' onClick={copy_text}>Copy text</button>
            <button disabled={textarea.length === 0} className='mx-2 btn btn-primary' onClick={remove_extra_spaces}>Remove extra spaces</button>
            <button disabled={textarea.length === 0} type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
            <button disabled={textarea.length === 0} className='mx-2 btn btn-primary' onClick={reverse_text}>Reverse text</button>
            <button disabled={textarea.length === 0} className='mx-2 btn btn-primary' onClick={clear_text}>Clear text</button>
            <p className='justify-left text-light bg-dark p-3 my-3'>{textarea.split(' ').length} and {textarea.length} characters</p>
            <hr/>
            <h2>Preview</h2>
            <p>{textarea}</p>
        </div>
    </div>
  )
}
