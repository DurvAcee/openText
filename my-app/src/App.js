import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not

  const toggleMode = () => {
      if(mode === 'light'){
          setMode('dark');
          document.body.style.backgroundColor = '#042743';
      } else {
          setMode('light');
          document.body.style.backgroundColor = 'white';
      }
  }

  return (
    <>
    <Router>
      <Navbar title="openText" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3">

      <Routes>
          <Route exact path="/" element={<TextForm heading="Enter The Text :" mode={mode}/>} />
          <Route exact path="/about" element={<About mode={mode}/>} />
      </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
