import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import ViewMembers from './ViewMembers';
import MemberDetails from './MemberDetails';
import AddMembers from './AddMembers';
import Navbar from './NavBar';
import React from "react";

const App = () => (
  <div>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/add-member" element={<AddMembers />} />
        <Route path="/view-members" element={ <ViewMembers />} />
        <Route path="/member-details" element={< MemberDetails />} />
      </Routes>
  </Router>
  </div>
)

export default App;