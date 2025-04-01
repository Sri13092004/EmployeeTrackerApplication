import React, { useState, useContext } from "react";
import { EmployeeContext } from "./EmployeeContext";
import "./UpdateEmployee.css";

const UpdateEmployee = ({ employee, goBack }) => {
  const { updateEmployee } = useContext(EmployeeContext);
  const [updatedEmployee, setUpdatedEmployee] = useState(employee);
  const [preview, setPreview] = useState(employee.image || "https://via.placeholder.com/120?text=No+Image");

  const handleChange = (e) => {
    setUpdatedEmployee({ ...updatedEmployee, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);
      setUpdatedEmployee({ ...updatedEmployee, image: imageUrl });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateEmployee(updatedEmployee);
    goBack();
  };

  return (
    <div className="update-employee-wrapper">
      <div className="update-employee-card">
        <h1 className="update-employee-title">Edit Employee Details</h1>
        <form onSubmit={handleSubmit} className="update-employee-form">
          <input type="text" name="name" value={updatedEmployee.name} onChange={handleChange} placeholder="Full Name" />
          <input type="text" name="id" value={updatedEmployee.id} onChange={handleChange} placeholder="Employee ID" />
          <input type="email" name="email" value={updatedEmployee.email} onChange={handleChange} placeholder="Email Address" />
          <input type="text" name="phone" value={updatedEmployee.phone} onChange={handleChange} placeholder="Phone Number" />
          <input type="text" name="designation" value={updatedEmployee.designation} onChange={handleChange} placeholder="Job Title" />
          <select name="department" value={updatedEmployee.department} onChange={handleChange}>
            <option value="">Department</option>
            <option value="HR">HR</option>
            <option value="Engineering">Engineering</option>
            <option value="Sales">Sales</option>
            <option value="Marketing">Marketing</option>
          </select>

          <div className="image-upload-container">
            <img src={preview} alt="Profile Preview" className="image-preview" />
            <input type="file" accept="image/*" onChange={handleImageChange} />
          </div>

          <div className="update-employee-buttons">
            <button type="submit" className="update-employee-save">Save Changes</button>
            <button type="button" className="update-employee-cancel" onClick={goBack}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateEmployee;
