import React, { useContext, useState } from "react";
import { EmployeeContext } from "./EmployeeContext";
import EmployeeDetails from "./EmployeeDetails";
import UpdateEmployee from "./UpdateEmployee";
import "./EmployeeList.css";

const EmployeeList = () => {
  const { employees } = useContext(EmployeeContext);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [updatingEmployee, setUpdatingEmployee] = useState(null);

  return (
    <div className="admin-employee-container">
      {!selectedEmployee && !updatingEmployee ? (
        <div className="admin-employee-list">
          <h1 className="admin-employee-title">List of Employees</h1>
          <table className="admin-employee-table">
            <thead>
              <tr>
                <th>Employee ID</th>
                <th>Name</th>
                <th>Designation</th>
                <th>Department</th>
                <th>Contact Info</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.id}</td>
                  <td>{employee.name}</td>
                  <td>{employee.designation}</td>
                  <td>{employee.department}</td>
                  <td>{employee.email}</td>
                  <td>
                    <button className="admin-view-btn" onClick={() => setSelectedEmployee(employee)}>View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="admin-export-buttons">
            <button className="admin-export-btn">Export list (CSV)</button>
            <button className="admin-export-btn">Export with details (CSV)</button>
            <button className="admin-export-btn">Export list (PDF)</button>
            <button className="admin-export-btn">Export with details (PDF)</button>
          </div>
        </div>
      ) : updatingEmployee ? (
        <UpdateEmployee employee={updatingEmployee} goBack={() => setUpdatingEmployee(null)} />
      ) : (
        <EmployeeDetails
          employee={selectedEmployee}
          goBack={() => setSelectedEmployee(null)}
          updateEmployee={() => {
            setUpdatingEmployee(selectedEmployee);
            setSelectedEmployee(null);
          }}
        />
      )}
    </div>
  );
};

export default EmployeeList;
