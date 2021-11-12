import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Bundles from "./components/Bundles";
import CourseId from "./components/CourseId";
import Courses from "./components/Courses";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Learn from "./components/Learn";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/learnwithnav" element={<Navigate replace to="/learn" />} />
      <Route path="learn" element={<Learn />}>
        <Route path="courses" element={<Courses />}>
          <Route path=":courseid" element={<CourseId />} />
        </Route>
        <Route path="bundles" element={<Bundles />} />
      </Route>
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
