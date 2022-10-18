import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import About from './components/About';

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  return (
    <div className="App">
      <Router>
      <Navbar />
          <Alert alert={alert} />
        <Routes>
          <Route path='/' element={ <TextForm heading="Word Converter App" showAlert={showAlert} />} />
          {/* <Route path="/about">
            <About />
          </Route> */}
          <Route path='/about' element={<About />} />
        </Routes>
        
       
       
      </Router>
    </div>
  );
}

export default App;
