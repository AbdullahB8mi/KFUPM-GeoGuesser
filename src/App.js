import React from 'react';
import Landing from './pages/Landing';
import Photographer from './pages/Photographer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <Routes>
        {/*<Route path="/" element={<Landing />} />*/}
        <Route path="/" element={<Photographer />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/image" element={<Image />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/score" element={<Score />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
