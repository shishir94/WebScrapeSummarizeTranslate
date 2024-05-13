import './App.css';
import React,{ useState } from 'react';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';

function App() {
  const [mode,setMode] = useState('light'); 

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor='black';
      document.body.style.color='white';

    }else{
      setMode('light')
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
    }
  }
  return (
    <>
    <Navbar title="WebScrapeSummarizeTranslate" mode={mode} toggleMode={toggleMode}/>
    <span style={{ margin: '0 10px' }}></span>
    <div className="container" my3="true">
      <Textform heading="Enter the URL" heading1="Your Summary"></Textform>
    </div>
    </>
  );
}

export default App;
