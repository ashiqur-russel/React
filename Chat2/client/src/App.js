import React from 'react'

import { Routes, Route, Link } from "react-router-dom";

import Join from './components/Join/Join.js';
import Chat from './components/Chat/Chat.js';


const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Join />} />
        <Route path="chat" element={<Chat />} />
      </Routes>
    </div>
  )
}

export default App
