import { useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import CreateGoal from './pages/CreateGoal'
import EditGoal from './pages/EditGoal'
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Routes> 
        <Route path="/" element={<HomePage />} />
        <Route path="/create-goal" element={<CreateGoal />} />
        <Route path="/edit-goal/:id" element={<EditGoal />} />
      </Routes>
    </div>
  )
}

export default App
