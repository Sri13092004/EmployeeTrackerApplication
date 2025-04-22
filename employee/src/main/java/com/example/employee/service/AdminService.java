package com.example.employee.service;

import com.example.employee.model.Employee;
import com.example.employee.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminService {

    @Autowired
    private EmployeeRepository employeeRepository;

    public Employee addEmployeeAsAdmin(Employee employee) {
        if (employee.getUser() == null) {
            throw new IllegalArgumentException("User association required");
        }
        return employeeRepository.save(employee);
    }

    public void deleteEmployee(Long id) {
        employeeRepository.deleteById(id);
    }

    public Employee updateEmployeeByAdmin(Employee existing, Employee updated) {
        existing.setName(updated.getName());
        existing.setDesignation(updated.getDesignation());
        existing.setDepartment(updated.getDepartment());
        existing.setContactInfo(updated.getContactInfo());
        existing.setDateOfJoining(updated.getDateOfJoining());
        return employeeRepository.save(existing);
    }

    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }
}
