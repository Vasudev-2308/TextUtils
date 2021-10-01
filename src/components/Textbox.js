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
        props.showAlert("Text Cleared","danger");
    }

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        // text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied to Clipboard","success");
    }

    const handleSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    var t = 0.0080 * text.split(" ").filter(
        (elem)=>{
            return elem.length!==0
        }
    ).length
    if(t===0){
        t = t.toFixed(0);
    }
    else
    t = t.toFixed(4);
     


    return (
        <div className="container my-5">
            <div style = {{
                backgroundColor: props.mode==='dark' ? '#11085c' : 'white',
                color:props.mode==='dark' ? 'white' : 'black'
            }}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" style = {{
                backgroundColor: props.mode==='dark' ? '#13466e' : 'white',
                color:props.mode==='dark' ? 'white' : 'black'
            }} value={text} onChange={handleEvent} id="myBox" rows="5"></textarea>
            </div>

            <button className="btn btn-primary mx-1 my-1" onClick={handleClick}>
            Convert to Uppercase
            </button>
            <button className="btn btn-primary mx-1 my 1" onClick={handleClicktoLower}>
            Convert to Lowercase
            </button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
            Copy Text
            </button>
            <button className="btn btn-danger mx-1 my-1" onClick={handleSpaces}>Clear Extra Spaces</button>
            <button className="btn btn-danger mx-1 my-1" onClick={handleClear}>Clear Text</button>
            </div>

            <div className="container my-5" style = {{
                backgroundColor: props.mode==='dark' ? '#11085c' : 'white',
                color:props.mode==='dark' ? 'white' : 'black'
            }}>
                <h2>
                    Your Text Summary
                </h2>
                <h4>
                    {text.split(" ").filter(
                        (elem)=>{
                            return elem.length!==0
                        }
                    ).length} Words, {text.length} Characters
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
