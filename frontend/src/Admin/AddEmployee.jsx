import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom"; 
import { EmployeeContext } from "./EmployeeContext";
import "./AddEmployee.css";

const AddEmployee = () => {
  const navigate = useNavigate(); 
  const { addEmployee } = useContext(EmployeeContext);

  const [employee, setEmployee] = useState({
    name: "",
    id: "",
    designation: "",
    department: "",
    contact: "",
    joiningDate: "",
    image: null,
  });

  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setEmployee({ ...employee, image: file });
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!employee.name || !employee.id || !employee.designation || !employee.department || !employee.contact || !employee.joiningDate) {
      alert("Please fill out all fields.");
      return;
    }

    addEmployee(employee);
    setEmployee({
      name: "", id: "", designation: "", department: "", contact: "", joiningDate: "", image: null
    });
    setPreview(null);
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="add-employee-page">
      <div className="add-employee-container">
        <h2 className="add-employee-title">Add Employee Details</h2>
        <form className="add-employee-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Enter Employee Name" value={employee.name} onChange={handleChange} />
          <input type="text" name="id" placeholder="Enter Employee ID" value={employee.id} onChange={handleChange} />
          <input type="text" name="designation" placeholder="Enter Designation" value={employee.designation} onChange={handleChange} />
          <input type="text" name="department" placeholder="Enter Department" value={employee.department} onChange={handleChange} />
          <input type="text" name="contact" placeholder="Enter Contact Details" value={employee.contact} onChange={handleChange} />
          <input type="date" name="joiningDate" value={employee.joiningDate} onChange={handleChange} />

          <label className="image-upload-label">Upload Profile Image</label>
          <input type="file" accept="image/*" onChange={handleImageChange} />
          {preview && <img src={preview} alt="Preview" className="image-preview" />}

          <div className="add-employee-btn-container">
            <button type="submit" className="add-employee-btn">Save</button>
            <button type="button" className="add-employee-btn-cancel" onClick={() => navigate(-1)}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;
