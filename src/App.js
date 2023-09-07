import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UploadItem from './components/UploadItem';
import Home from './components/Home';
import ShowMyItems from './components/ShowMyItems';
import ShowAllItems from './components/ShowAllItems';
import Navbar from './components/Navbar';
import FindItems from './components/FindItems';

export const App = () => {
  const [uploadedItems, setUploadedItems] = useState([]);

  return (
    <Router>
      {/* Your content goes here */}
      <Navbar/>
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/upload" element={<UploadItem  />} />
  <Route path="/showmine" element={<ShowMyItems />} />
  <Route path="/showall" element={<ShowAllItems  />} />
  <Route path="/finditem" element={<FindItems  />} />
</Routes>

    </Router>
  );
};

export default App;
