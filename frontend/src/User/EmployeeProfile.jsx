import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { EmployeeContext } from "../Admin/EmployeeContext";
import "./EmployeeProfile.css";

const EmployeeProfile = () => {
  const { id } = useParams();
  const { employees } = useContext(EmployeeContext);
  const navigate = useNavigate();

  const employee = employees.find(emp => emp.id === id);

  if (!employee) {
    return <h2 className="employee-profile-error">Employee not found!</h2>;
  }

  return (
    <div className="employee-profile-container">
      <h2>Employee Profile</h2>
      <div className="employee-profile-card">
        <img src={employee.image} alt={employee.name} className="employee-profile-img" />
        <div className="employee-profile-info">
          <p><strong>Name:</strong> {employee.name}</p>
          <p><strong>Designation:</strong> {employee.designation}</p>
          <p><strong>Department:</strong> {employee.department}</p>
          <p><strong>Email:</strong> {employee.email}</p>
          <p><strong>Phone:</strong> {employee.phone}</p>
          <p><strong>Hire Date:</strong> {employee.hireDate}</p>
          <p><strong>Rating:</strong> ⭐ {employee.rating}</p>
        </div>
      </div>
      <button className="employee-profile-back-btn" onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default EmployeeProfile;
