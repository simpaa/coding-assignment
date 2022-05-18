import React from 'react';
import './App.css';
import { ColleaguesContextProvider } from './data/colleagues/ColleaguesContext';
import Colleagues from './pages/Colleagues';

function App() {
  return (
    <ColleaguesContextProvider>
      <div className="app-container">
        <Colleagues />
      </div>
    </ColleaguesContextProvider>
  );
}

export default App;
