import React from 'react'

export default function MainScreen(props) {
    let myStyle = {

        backgroundColor: props.mode==='dark' ? 'gray' : 'white',
        color:props.mode==='dark' ? 'white' : 'black',
        borderRadius:'30px',
        width:"50%",
        border: props.mode==='dark' ? '2px solid white':''
    }
    let imStyle = {

        backgroundColor: props.mode==='dark' ? 'gray' : 'white',
        color:props.mode==='dark' ? 'white' : 'black',
        borderRadius:'30px',
        border: props.mode==='dark' ? '2px solid white':''
    }
    let myStyle1 = {

        backgroundColor: props.mode==='dark' ? '#11085c' : 'white',
        color:props.mode==='dark' ? 'white' : 'black',      
    }
    let link = "https://www.thehindu.com/education/6o6kn/article32659830.ece/ALTERNATES/LANDSCAPE_615/21EPBSCODING";
    return (
        <div className="d-inline-flex p-2 justify-content-between container p-2 ">
            <div className="container px-3">
                <h1 style={myStyle1}>
                    About The Dev
                </h1>
            <div class="card" style={myStyle}>
  <img src={link} class="card-img-top" alt="" style={imStyle} />
  <div class="card-body left-align-left">
    <h2 class="card-text"> Hi This is Vasudev.</h2>
    <h3 class="card-text">Aka VDX</h3>
    <h5 class="card-text">A Code Enthusiast'</h5>
  </div>
            </div>
</div>
</div>
    )
}
