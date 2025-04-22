package com.example.employee.controller;

import com.example.employee.model.Employee;
import com.example.employee.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/employee")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    // Get the current user's profile
    @GetMapping("/profile")
    public ResponseEntity<Employee> getMyProfile() {
        return ResponseEntity.ok(employeeService.getCurrentUserProfile());
    }

    // Create profile for the current authenticated user
    @PostMapping("/profile")
    public ResponseEntity<Employee> createMyProfile(@RequestBody Employee employee) {
        Employee saved = employeeService.createProfile(employee);
        return new ResponseEntity<>(saved, HttpStatus.CREATED);
    }

    // Update the current user's own profile
    @PutMapping("/update/{id}")
    public ResponseEntity<Employee> updateMyProfile(@PathVariable Long id, @RequestBody Employee updatedEmployee) {
        Employee employee = employeeService.updateOwnProfile(id, updatedEmployee);
        return ResponseEntity.ok(employee);
    }
}
