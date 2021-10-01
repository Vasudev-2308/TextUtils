import './App.css';
import {useState} from 'react';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textbox from './components/Textbox';
import Alert from './components/Alert';

// import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
// import MainScreen from './components/MainScreen';

function App() {
  const [darkMode, setdarkMode] = useState('light');
  const [textVal, setTextVal] = useState('Enable Dark Mode')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
      setAlert({message: message,
        type:type})
        setTimeout(() => {
          setAlert(null)
        },2000)
  }

  const toggleMode = () => {
    if(darkMode==='light'){
    setdarkMode('dark')
    document.body.style.backgroundColor = '#11085c';
    setTextVal('Enable Light Mode')
    showAlert("Dark Mode Has Been Enabled","success");
    }
    else{
      setdarkMode('light')
      setTextVal('Enable Dark Mode')
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Has Been Enabled","primary");
    }
  }
  return (
    <div className="App">

      <Navbar mode={darkMode} toggleMode = {toggleMode} text={textVal}/>
      <Alert alert = {alert}/>
      <div className="container">
      
        
        <Textbox heading = "Enter The Text To Analyze Below" mode={darkMode} showAlert={showAlert} />
      </div>
      </div>
  );
}

export default App;
