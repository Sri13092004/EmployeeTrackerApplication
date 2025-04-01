import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import EmployeeProvider from "./Admin/EmployeeContext"; 
import HomePage from "./Components/HomePage";
import SignIn from "./Components/AuthPage";
import EmployeeList from "./Admin/EmployeeList";
import LandingPage from "./Admin/LandingPage";
import EmployeeForm from "./Admin/AddEmployee";
import EditEmployee from "./Admin/UpdateEmployee";

import Dashboard from "./User/Dashboard";
import EmployeeDirectory from "./User/EmployeeDirectory";
import EmployeeProfile from "./User/EmployeeProfile";
import SearchEmployee from "./User/SearchEmployee";

import Help from "./Admin/Help";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <EmployeeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Components/AuthPage" element={<SignIn />} />
          <Route path="/Admin/LandingPage" element={<LandingPage />} />
          <Route path="/Admin/EmployeeList" element={<EmployeeList />} />
          <Route path="/Admin/AddEmployee" element={<EmployeeForm />} />
          <Route path="/Admin/EditEmployee" element={<EditEmployee />} />
          <Route path="/User/Dashboard" element={<Dashboard />} />
          <Route path="/User/EmployeeDirectory" element={<EmployeeDirectory />} />
          <Route path="/User/EmployeeProfile/:id" element={<EmployeeProfile />} />
          <Route path="/User/SearchEmployee" element={<SearchEmployee />} />
          <Route path="/Admin/Help" element={<Help />}/>
        </Routes>
      </Router>
    </EmployeeProvider>
  </React.StrictMode>
);
