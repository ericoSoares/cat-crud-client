import './App.css';
import React from 'react';
import CatsCRUDContainer from './components/cat/CatsCRUDContainer';
import MapContainer from './components/map/MapContainer';
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
        <Route path="/" element={<CatsCRUDContainer />} />
        <Route path="/map" element={<MapContainer />} />
        <Route path="/cat/:id" element={<EditForm />} />
      </Routes>
    </Router>
  );
}

export default App;
