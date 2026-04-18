import "./App.css";
import ExploreActivities from "./ExploreActivities/ExploreActivities";
import Home from "./Home/Home";
import Navbar from "./Navbar/Navbar";
import { Routes, Route } from "react-router";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/explore-activities" element={<ExploreActivities />} />
      </Routes>
    </>
  );
}

export default App;
