import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

const CourseId = () => {
  const { courseid } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h2>URL Params is : {courseid}</h2>
      <button onClick={() => navigate("/dashboard", { state: courseid })}>
        Price
      </button>
      <Link to="/dashboard" state={"CART"}>
        Cart
      </Link>
    </div>
  );
};

export default CourseId;
