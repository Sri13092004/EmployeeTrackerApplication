import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaCog, FaBell, FaUserCircle } from "react-icons/fa";
import { EmployeeContext } from "./EmployeeContext";
import "./LandingPage.css";

const LandingPage = () => {
    const navigate = useNavigate();
    const { employees } = useContext(EmployeeContext);

    const totalEmployees = employees.length;
    const uniqueDepartments = new Set(employees.map(emp => emp.department)).size;

    return (
        <div className="admin-panel">
            <nav className="admin-navbar">
                <div className="admin-navbar-logo" onClick={() => navigate("/")}>
                    <span className="admin-logo-icon">💙</span> Employee Tracker
                </div>
                <ul className="admin-navbar-menu">
                    <Link to="/" className="admin-active">Dashboard</Link>
                    <Link to="/Admin/EmployeeList">Employee List</Link>
                    <Link to="/Admin/Help">Help</Link>
                </ul>
                <div className="admin-navbar-icons">
                    <FaBell className="admin-icon" />
                    <FaCog className="admin-icon" />
                    <FaUserCircle className="admin-icon admin-user-icon" />
                </div>
            </nav>

            <div className="admin-dashboard">
                <div className="admin-dashboard-content">
                    <h1 className="admin-dashboard-title">Welcome to Employee Manager</h1>
                    <div className="admin-dashboard-stats">
                        <div className="admin-dashboard-stat">
                            <p>Total Employees</p>
                            <h2>{totalEmployees}</h2>
                        </div>
                        <div className="admin-dashboard-stat">
                            <p>Total Departments</p>
                            <h2>{uniqueDepartments}</h2>
                        </div>
                    </div>
                    <div className="admin-dashboard-buttons">
                        <button className="admin-btn" onClick={() => navigate("/Admin/AddEmployee")}>
                            Add Employee
                        </button>
                        <button className="admin-btn" onClick={() => navigate("/Admin/EmployeeList")}>
                            View Employees
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
