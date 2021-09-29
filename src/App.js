import './App.css';
import Navbar from './components/Navbar';
import Textbox from './components/Textbox';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="container">
      <Textbox heading = "Enter The Text To Analyze Below"/>
      </div>
    </div>
  );
}

export default App;
