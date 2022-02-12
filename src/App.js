import './App.css';
import React from 'react';
import CatsLayout from './components/cat/CatsLayout';
import MapLayout from './components/map/MapLayout';
import NavBar from './components/layout/NavBar';
import EditForm from './components/cat/EditForm';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<CatsLayout />} />
        <Route path="/map" element={<MapLayout />} />
        <Route path="/cat/:id" element={<EditForm />} />
      </Routes>
    </Router>
  );
}

export default App;
