import './App.css';
import About from './Components/About';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
function App() {
  const [mode, setmode] = useState('light'); //wether enable or not 
  const [alert, setAlert] = useState(null);
  const showalert = (message, type) => {
    setAlert(
      {
        message: message,
        type: type
      }
    )
    setTimeout(() => {
      setAlert(null)
    }, 1500);

  }
  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = '#042743';
      showalert("Dark mode is enable", "success");
      document.title = "TextUtils-Drak Mode"
    }
    else {
      setmode('light')
      document.body.style.backgroundColor = 'white';
      showalert("Light mode is enable", "success");
      document.title = "TextUtils-Light Mode"
    }
  }
  return (
    <>
     <Router>
  <div>
    {/* Navbar */}
    <Navbar title="Textutils" mode={mode} togglemode={togglemode} />
    
    {/* Alert */}
    <Alert alert={alert} />
    
    {/* Main content container */}
    <div className="container" my-3>
      {/* Routes component for handling route definitions */}
      <Routes>
        {/* Route for About page */}
        <Route path="/about" element={<About  mode={mode}/>} />
        
        {/* Default route for home page */}
        <Route path="/" element={<TextForm showalert={showalert} heading="Enter the text to analyze" mode={mode} />} />
      </Routes>
    </div>
  </div>
</Router>
    </>
  );
}
export default App;
