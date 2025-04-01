import React, { useState, useContext } from "react";
import { EmployeeContext } from "./EmployeeContext";
import "./EmployeeDetails.css";

const EmployeeDetails = ({ employee, goBack, updateEmployee }) => {
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const { deleteEmployee } = useContext(EmployeeContext);

  const handleDelete = () => {
    deleteEmployee(employee.id);
    goBack();
  };

  return (
    <div className="admin-employee-details-container">
      {!showDeleteConfirmation ? (
        <>
          <h2 className="admin-employee-title">Employee Details</h2>
          <div className="admin-employee-card">
            <img src={employee.image} alt={employee.name} className="admin-employee-image" />
            <h3 className="admin-employee-name">{employee.name}</h3>
            <p className="admin-employee-role">{employee.designation}</p>
          </div>
          <div className="admin-employee-info">
            <p><strong>Name:</strong> {employee.name}</p>
            <p><strong>Email:</strong> {employee.email}</p>
            <p><strong>Position:</strong> {employee.designation}</p>
            <p><strong>Department:</strong> {employee.department}</p>
            <p><strong>Phone:</strong> {employee.phone}</p>
            <p><strong>Date of Hire:</strong> {employee.dateOfHire}</p>
            <p><strong>Performance Rating:</strong> {employee.performanceRating}</p>
          </div>
          <div className="admin-button-group">
            <button className="admin-btn admin-update" onClick={updateEmployee}>Update Employee</button>
            <button className="admin-btn admin-delete" onClick={() => setShowDeleteConfirmation(true)}>Delete Employee</button>
          </div>
        </>
      ) : (
        <div className="admin-delete-confirmation">
          <h2>Are you sure you want to delete this employee?</h2>
          <div className="admin-delete-buttons">
            <button className="admin-btn admin-delete" onClick={handleDelete}>Delete</button>
            <button className="admin-btn admin-cancel" onClick={() => setShowDeleteConfirmation(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployeeDetails;
