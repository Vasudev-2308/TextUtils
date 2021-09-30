import './App.css';
import {useState} from 'react';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textbox from './components/Textbox';
function App() {
  const [darkMode, setdarkMode] = useState('light');
  const [textVal, setTextVal] = useState('Enable Dark Mode')
  const toggleMode = () => {
    if(darkMode==='light'){
    setdarkMode('dark')
    document.body.style.backgroundColor = '#11085c';
    setTextVal('Enable Light Mode')
    }
    else{
      setdarkMode('light')
      setTextVal('Enable Dark Mode')
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <div className="App">
      <Navbar mode={darkMode} toggleMode = {toggleMode} text={textVal}/>
      <div className="container">
      <Textbox heading = "Enter The Text To Analyze Below" mode={darkMode}/>
      {/* <About/> */}
      </div>
    </div>
  );
}

export default App;
