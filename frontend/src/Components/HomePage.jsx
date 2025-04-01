import React from "react";
import { Link } from "react-router-dom";
import employeeImage from "../Background_New.png";
import "./HomePage.css";

const sections = [
  {
    title: "User-Friendly Interface",
    description:
      "The application features an intuitive dashboard designed for ease of use. Simple navigation, clear layouts, and interactive elements allow Admins and Users to perform their tasks efficiently without requiring technical expertise.",
    image: employeeImage,
  },
  {
    title: "Employee Management",
    description:
      "Admins can easily add new employees, update existing records, and delete employees when necessary. Each employee record includes essential details like name, ID, designation, department, and contact information, making data management efficient and structured.",
    image: employeeImage,
  },
  {
    title: "Quick Employee Search & Filtering",
    description:
      "Users can quickly search for employees by name, department, or designation using a dynamic filtering system. This helps employees and management find relevant personnel efficiently without manually going through the entire database.",
    image: employeeImage,
  },
  {
    title: "Department-Wise Filtering",
    description:
      "Employees can be categorized and filtered based on their departments, making it easy to locate personnel within a specific team or division. This is particularly useful for large organizations where finding the right contact can be time-consuming.",
    image: employeeImage,
  },
];

const HomePage = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const scrollToFeatures = () => document.getElementById("features-section").scrollIntoView({ behavior: "smooth" });

  return (
    <div className="container">
      <nav className="navbar">
        <span className="logo">DN</span>
        <div className="nav-links">
          <a onClick={scrollToTop}>Home</a>
          <a onClick={scrollToFeatures}>About Us</a>
          <Link to="/Components/AuthPage">SignIn</Link>
        </div>
      </nav>

      <div className="content">
        <div className="text-section">
          <h1>Employee Tracker</h1>
          <p>Manage employee records efficiently with our powerful tracking system. Add, edit, and filter employees with ease.</p>
          <p>Designed for businesses to streamline workforce management and enhance accessibility.</p>
          <button className="learn-more" onClick={scrollToFeatures}>Know More</button>
        </div>
        <div className="image-section">
          <img src={employeeImage} alt="Employee Management" />
        </div>
      </div>

      <div id="features-section" className="features-section">
        {sections.map((feature, index) => (
          <div
            key={index}
            className={`feature-card ${index % 2 === 0 ? 'row' : 'row-reverse'}`}
          >
            <div className="feature-image">
              <img src={feature.image} alt={feature.title} />
            </div>
            <div className="feature-content">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

      <footer className="footer">
        <div className="footer-content">
          <p>📧 Contact: support@company.com</p>
          <p>📍 Location: 123 Business St, City, Country</p>
          <p>© {new Date().getFullYear()} DN Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
