import React from "react";
import { useNavigate } from "react-router-dom";
import "./Help.css";

const Help = () => {
  const navigate = useNavigate();

  return (
    <div className="help-container">
      <h1 className="help-title">Help & Support</h1>
      <p className="help-intro">
        Welcome to the Employee Management System! Here’s how to navigate and use the application.
      </p>

      <div className="help-section">
        <h2>📌 Dashboard</h2>
        <p>The dashboard provides an overview of the total employees and departments in the system.</p>
      </div>

      <div className="help-section">
        <h2>📋 Employee List</h2>
        <p>View all employees, search, and filter by department. Click on an employee to view details.</p>
      </div>

      <div className="help-section">
        <h2>➕ Adding an Employee</h2>
        <p>
          Navigate to "Add Employee", fill in all required details, upload an image, and click "Save".
        </p>
      </div>

      <div className="help-section">
        <h2>✏️ Updating Employee Details</h2>
        <p>Click on an employee’s profile, select "Update", modify the details, and click "Save Changes".</p>
      </div>

      <div className="help-section">
        <h2>❌ Deleting an Employee</h2>
        <p>
          In the employee profile, click "Delete Employee". Confirm your action to remove the employee permanently.
        </p>
      </div>

      <div className="help-section">
        <h2>⚙️ Settings & Notifications</h2>
        <p>
          Access system settings and notifications using the icons in the top-right corner of the navigation bar.
        </p>
      </div>

      <div className="help-section">
        <h2>💡 Need More Help?</h2>
        <p>Contact support at <a href="mailto:support@employeetracker.com">support@employeetracker.com</a></p>
      </div>

      <button className="help-back-btn" onClick={() => navigate(-1)}>⬅ Back</button>
    </div>
  );
};

export default Help;
