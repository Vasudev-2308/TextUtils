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
    
    const handleClear = () =>{
        setText('');
    }

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        // text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
        alert("Text Copied");
    }

    const handleSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    var t = 0.008 *text.split(" ").length
    t = t.toFixed(4);
    return (
        <div>
            <div className="container" style = {{
                backgroundColor: props.mode==='dark' ? '#11085c' : 'white',
                color:props.mode==='dark' ? 'white' : '#11085c'
            }}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" style = {{
                backgroundColor: props.mode==='dark' ? 'grey' : 'white',
                color:props.mode==='dark' ? 'white' : '#11085c'
            }} value={text} onChange={handleEvent} id="myBox" rows="5"></textarea>
            </div>

            <button className="btn btn-primary mx-5 my-5" onClick={handleClick}>
            Convert to Uppercase
            </button>
            <button className="btn btn-primary mx-5" onClick={handleClicktoLower}>
            Convert to Lowercase
            </button>
            <button className="btn btn-primary mx-5" onClick={handleCopy}>
            Copy Text
            </button>
            <button className="btn btn-danger mx-5" onClick={handleSpaces}>Clear Extra Spaces</button>
            <button className="btn btn-danger mx-5" onClick={handleClear}>Clear Text</button>
            </div>

            <div className="container my-5" style = {{
                backgroundColor: props.mode==='dark' ? '#11085c' : 'white',
                color:props.mode==='dark' ? 'white' : '#11085c'
            }}>
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
                    {text.length>0?text:"Enter Some text in the text Box"}
                </h4>
            </div>
        </div>
    )
}
