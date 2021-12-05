
import './App.css';
import Header from './components/header/Header';
import Centre from './components/center/Center';
import Menu from './components/menu/Menu';
import About from './components/about/About';
import General from './components/general/General';
import Be from './components/be/Be';
import Fe from './components/fe/Fe';
import Interview from './components/interview/Interview';
import FeMentor from './components/fe/feMentor/FeMentor';

import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Header />
      </header>
      <div className="container--flex container__app--center">
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/general" element={<General />} />
          <Route path="/frontend" element={<Fe />} />
          <Route path="/backend" element={<Be />} />
          <Route path="/interview" element={<Interview />} /> 
          <Route path="/fe/fementor" element={<FeMentor />} />
        </Routes>
      </div>
      
    </div>
  );
}

export default App;
