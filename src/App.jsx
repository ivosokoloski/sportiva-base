import "./App.css";
import ExploreActivities from "./ExploreActivities/ExploreActivities";
import Home from "./Home/Home";
import Navbar from "./Navbar/Navbar";
import ActivityDetails from "./ActivityDetails/ActivityDetails";
import Signup from "./Authentications/SignUp";
import Login from "./Authentications/Login";
import MyReviews from "./MyReviews/MyReviews";
import { Routes, Route } from "react-router";
import React, { useState, useEffect } from "react";


function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {

    fetch("http://127.0.0.1:8000/api/activities/")
      .then((response) => response.json())
      .then((data) => {
        setActivities(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home activities={activities} />} />
        <Route path="/explore-activities" element={<ExploreActivities activities={activities} />} />
        <Route path="/my-reviews" element={<MyReviews activities={activities} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/details/:id" element={<ActivityDetails activities={activities} />} />      
      </Routes>
    </>
  );
}

export default App;
