import React from "react";
import { useLocation } from "react-router";

const Dashboard = () => {
  const location = useLocation();
  return (
    <div>
      <h1>Cart</h1>
      <p>Info here i got is {location.state}</p>
    </div>
  );
};

export default Dashboard;
