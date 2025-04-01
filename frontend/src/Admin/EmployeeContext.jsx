import React, { createContext, useState } from "react";

export const EmployeeContext = createContext();

const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([
    {
      id: "001",
      name: "Jessica Brown",
      designation: "Software Engineer",
      department: "IT",
      email: "jessicabrown@example.com",
      phone: "+1 202-555-0191",
      hireDate: "01/2021",
      rating: 4.5,
      image: "https://via.placeholder.com/120?text=Jessica", 
    },
    {
      id: "002",
      name: "Jane Smith",
      designation: "Marketing Manager",
      department: "Marketing",
      email: "jane.smith@example.com",
      phone: "+1 202-555-0192",
      hireDate: "03/2020",
      rating: 4.2,
      image: "https://via.placeholder.com/120?text=Jane", 
    }
  ]);

  const addEmployee = (employee) => {
    setEmployees([...employees, { ...employee, image: employee.image || "https://via.placeholder.com/120?text=No+Image" }]);
  };

  const updateEmployee = (updatedEmployee) => {
    setEmployees(employees.map(emp => emp.id === updatedEmployee.id ? updatedEmployee : emp));
  };

  const deleteEmployee = (id) => {
    setEmployees(employees.filter(emp => emp.id !== id));
  };

  return (
    <EmployeeContext.Provider value={{ employees, addEmployee, updateEmployee, deleteEmployee }}>
      {children}
    </EmployeeContext.Provider>
  );
};

export default EmployeeProvider;
