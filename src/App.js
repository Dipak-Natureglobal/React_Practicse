import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react'


function App() {
  const [mode, setmode] = useState('light'); //wether enable or not 
  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor= '#042743';
    }
    else {
      setmode('light')
      document.body.style.backgroundColor= 'white';
    }
  }
  return (
    <>
      {/* <Navbar /> */}
      {/* <Navbar  title="TextUtils2" abouttext="About TextUtils"/>  */}
      <Navbar title="Textutils" mode={mode} togglemode={togglemode} />

      <div className="container"  my-3> <TextForm heading="Enter the text to analyze" mode={mode}/></div >
      {/* <About /> */}
    </>
  )
}
export default App;
