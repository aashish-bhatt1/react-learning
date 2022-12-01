import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import { useState } from 'react';
import About from './components/About';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);
  const showAlert = (message, type)=> {
  setalert({
    msg: message,
    type: type
  })
  setTimeout (()=>{
    setalert(null);
  }, 2000);
  }
  
  const toggleMode = ()=> {
    if(mode === 'dark'){
        setmode('light');
        document.body.style.backgroundColor = '#ffffff';
        showAlert('light mode has been enabled', 'success');
    }
    else{
      setmode('dark');
      document.body.style.backgroundColor = '#000f56';
      showAlert('dark mode has been enabled', 'success');
    }
}
  return (
    <>
    <BrowserRouter>

    <Navbar mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
      <Routes>
        <Route path="/" element={<Textform alert_msg={showAlert} heading="This is my first react page." mode={mode} />}>
        </Route>
        <Route path="/about" element={<About />}>
          
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
