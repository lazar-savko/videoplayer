// src/App.jsx

import React from 'react';
import './App.css';
import VimeoPlayer from './VimeoPlayer';
import LocalVideoPlayer from './LocalPlayer';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<VimeoPlayer />} />
      <Route path='/local' element={<LocalVideoPlayer />} />
      <Route path='/try' element={<h1>Here</h1>} />

      </Routes>
      
    </div>
  );
}

export default App;
