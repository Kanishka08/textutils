import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alert from './components/Alert';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert =(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() =>{
      setAlert(null);
    }, 1500);
  }

  // const removeBodyClasses =()=>{
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-warning')
  //   document.body.classList.remove('bg-danger')
  //   document.body.classList.remove('bg-success')
  // }
  const toggleMode = (cls)=>{
    // removeBodyClasses();
    document.body.classList.add('bg-' + cls)
    if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = '#042743';
    showAlert('Dark mode has been enabled',"success")
  }else{
    setMode('light')
    document.body.style.backgroundColor = 'white';
    showAlert('Light mode has been enabled',"success")
  }
}
  return (
    <>
      <BrowserRouter>
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
      <Routes>
        <Route path="/" element={<TextForm showAlert={showAlert} heading='Enter Text Here' mode={mode}></TextForm>} />
        <Route path="/about" element={<About mode={mode}/>} />
      </Routes>
      </div>
      </BrowserRouter>
    
   {/* <Navbar title="Textutils" aboutText="About" mode = {mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>
   <div className="container my-3">
   <TextForm showAlert={showAlert} heading="Enter the text to analyze"  mode = {mode}/>
   <About/> */}
   
   {/* </div> */}
   </>
  );
}

export default App;
