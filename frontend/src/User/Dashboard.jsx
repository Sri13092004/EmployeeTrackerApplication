import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <h1>Welcome to Acme Co</h1>
      <p className="subtext">You have 2 employees and 2 departments.</p>

      <div className="stats-container">
        <div className="stat-card">
          <div className="stat-number">2</div>
          <div className="stat-title">Total Employees</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">2</div>
          <div className="stat-title">Departments</div>
        </div>
      </div>

      <div className="quick-actions">
        <h3>Quick Actions</h3>
        <div className="action-list">
          <div className="action-item" onClick={() => navigate("/User/EmployeeDirectory")}>
            <span className="action-icon">📋</span>
            <div className="action-text">
              <div className="action-title">View Employees</div>
              <div className="action-subtext">View all employees</div>
            </div>
          </div>

          <div className="action-item" onClick={() => navigate("/User/SearchEmployee")}>
            <span className="action-icon">🔍</span>
            <div className="action-text">
              <div className="action-title">Search Employee</div>
              <div className="action-subtext">Find employees by name or department</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;



