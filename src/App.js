import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import { useState } from 'react';

function App() {
  const [mode, setmode] = useState('light');
  const toggleMode = ()=> {
    if(mode === 'dark'){
        setmode('light');
        document.body.style.backgroundColor = '#ffffff';
    }
    else{
      setmode('dark');
      document.body.style.backgroundColor = '#000f56';
    }
}
  return (
    <>
    <Navbar mode={mode} toggleMode={toggleMode}/>
    <Textform heading="This is my first react page." mode={mode} />
    </>
    
  );
}

export default App;
