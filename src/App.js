import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Components/pages/HomePage";
import { Reserves } from "./Components/pages/Reserves";
import Bookings from "./Components/pages/Bookings";
import Register from "./Components/pages/Register";
import Login from "./Components/pages/Login";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route
            path="reserves"
            element={
              <Reserves
                country1={"Nigeria"}
                country2={"United Arab Emirate"}
                country3={"United States"}
                country4={"South Africa"}
                country5={"Malasia"}
                country6={"Italy"}
              />
            }
          />
          <Route path="bookings" element={<Bookings />} />
          <Route path="sign-up" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
};
export default App;
