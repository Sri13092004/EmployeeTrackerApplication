import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { EmployeeContext } from "../Admin/EmployeeContext";
import "./SearchEmployee.css";

const SearchEmployee = () => {
  const { employees } = useContext(EmployeeContext);
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [designation, setDesignation] = useState("");
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    const results = employees.filter(
      (emp) =>
        emp.name.toLowerCase().includes(name.toLowerCase()) &&
        (department ? emp.department === department : true) &&
        (designation ? emp.designation === designation : true)
    );

    if (results.length > 0) {
      setFilteredEmployees(results);
      setError("");
    } else {
      setFilteredEmployees([]);
      setError("No employees found matching your criteria.");
    }
  };

  const resetFilters = () => {
    setName("");
    setDepartment("");
    setDesignation("");
    setFilteredEmployees([]);
    setError("");
  };

  return (
    <div className="search-employee-page">
      <h2>Search Employees</h2>
      <div className="search-employee-form">
        <input
          type="text"
          placeholder="Enter employee name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <select value={department} onChange={(e) => setDepartment(e.target.value)}>
          <option value="">All Departments</option>
          <option value="HR">HR</option>
          <option value="IT">IT</option>
          <option value="Marketing">Marketing</option>
        </select>

        <select value={designation} onChange={(e) => setDesignation(e.target.value)}>
          <option value="">All Designations</option>
          <option value="Manager">Manager</option>
          <option value="Team Lead">Team Lead</option>
          <option value="Developer">Developer</option>
          <option value="Analyst">Analyst</option>
        </select>

        <div className="search-employee-actions">
          <button className="search-employee-search-btn" onClick={handleSearch}>Search</button>
          <button className="search-employee-reset-btn" onClick={resetFilters}>Reset</button>
        </div>
      </div>

      {error && <p className="search-employee-error">{error}</p>}

      {filteredEmployees.length > 0 && (
        <div className="search-employee-results">
          <h3>Search Results</h3>
          <ul>
            {filteredEmployees.map((emp) => (
              <li key={emp.id} onClick={() => navigate(`/User/EmployeeProfile/${emp.id}`)}>
                {emp.name} - {emp.designation} ({emp.department})
              </li>
            ))}
          </ul>
        </div>
      )}

      <button className="search-employee-back-btn" onClick={() => navigate("/User/Dashboard")}>
        Back to Dashboard
      </button>
    </div>
  );
};

export default SearchEmployee;
