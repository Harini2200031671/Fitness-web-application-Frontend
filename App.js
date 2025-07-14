import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";  
import Login from "./components/pages/Login";  
import Signup from "./components/pages/Signup";  
import Home from "./components/pages/Home";  
import Profile from "./components/pages/Profile";
import LearnMore from "./components/pages/Learnmore";
import WorkoutPage from "./components/pages/Workout";
import Nutrition from "./components/pages/Nutrition";
// 🟣 Import the UserProvider
import { UserProvider } from "./UserContext";  // Adjust path if it's in a folder

const App = () => {
  return (
    // 🔄 Wrap everything inside UserProvider
    <UserProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/Login" element={<Login />} />  
          <Route path="/signup" element={<Signup />} />  
          <Route path="/home" element={<Home />} />  
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Learn-more" element={<LearnMore />} /> 
          <Route path="/workout" element={<WorkoutPage />} /> 
          <Route path="/nutrition" element={<Nutrition />} /> 
        </Routes>
      </Router>
    </UserProvider>
  );
};

export default App;
