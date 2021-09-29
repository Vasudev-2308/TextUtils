import React,{useState} from 'react'
export default function Textbox(props) {
    const [text,setText] = useState('');

    const handleClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleClicktoLower = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleEvent = (event) => {
        setText(event.target.value);
    }

    var t = 0.008 *text.split(" ").length
    t = t.toFixed(4);
    return (
        <div>
            <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleEvent} id="myBox" rows="5"></textarea>
            </div>

            <button className="btn btn-primary mx-5 my-5" onClick={handleClick}>
            Convert to Uppercase
            </button>
            <button className="btn btn-primary mx-5" onClick={handleClicktoLower}>
            Convert to Lowercase
            </button>
            </div>

            <div className="container my-5">
                <h2>
                    Your Text Summary
                </h2>
                <h4>
                    {text.split(" ").length} Words, {text.length} Characters
                </h4>
                
                <h5>
                    You require {t} Minutes to read this
                </h5>

                <h2>
                    Preview
                </h2>
                <h4>
                    {text}
                </h4>
            </div>
        </div>
    )
}
