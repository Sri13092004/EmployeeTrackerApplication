import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { EmployeeContext } from "../Admin/EmployeeContext";
import "./EmployeeDirectory.css";

const EmployeeDirectory = () => {
  const { employees } = useContext(EmployeeContext);
  const navigate = useNavigate();

  return (
    <div className="directory-container">
      <h2>Employee Directory</h2>
      <table className="employee-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Designation</th>
            <th>Department</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th> {/* New column for the View button */}
          </tr>
        </thead>
        <tbody>
          {employees.map(emp => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.designation}</td>
              <td>{emp.department}</td>
              <td>{emp.email}</td>
              <td>{emp.phone}</td>
              <td>
                <button 
                  className="view-btn" 
                  onClick={() => navigate(`/User/EmployeeProfile/${emp.id}`)}
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeDirectory;
