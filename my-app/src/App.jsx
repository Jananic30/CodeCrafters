import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import ViewMembers from './ViewMembers';
import MemberDetails from './MemberDetails';
import AddMember from './AddMember';
import NavBar from './Navbar';
import React from "react";

const App = () => (
  <div>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/add-members" element={<AddMember />} />
        <Route path="/view-members" element={ <ViewMembers />} />
        <Route path="/member-details" element={< MemberDetails />} />
      </Routes>
  </Router>
  </div>
)

export default App;