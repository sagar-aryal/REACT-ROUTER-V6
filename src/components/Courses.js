import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Courses = () => {
  const courseList = ["React", "Next", "Vue", "Angular"];
  const randomCourseName =
    courseList[Math.floor(Math.random() * courseList.length)];
  return (
    <div>
      <h1>Courses</h1>
      <h3>Course lists</h3>
      <p>Test</p>
      <NavLink
        style={({ isActive }) => {
          return {
            backgroundColor: isActive ? "pink" : "lightblue",
          };
        }}
        to={`/learn/courses/${randomCourseName}`}
      >
        {randomCourseName}
      </NavLink>
      <Outlet />
    </div>
  );
};

export default Courses;
