package com.example.employee.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import com.example.employee.model.Employee;
import com.example.employee.model.Leave;
import com.example.employee.model.User;
import com.example.employee.repository.EmployeeRepository;
import com.example.employee.repository.LeaveRepository;
import com.example.employee.repository.UserRepository;

@Service
public class LeaveService {

    @Autowired
    private LeaveRepository leaveRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private EmployeeRepository employeeRepository;

    // Create a new leave request
    public Leave applyLeave(Leave leave) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        User user = userRepository.findByUsername(auth.getName())
                .orElseThrow(() -> new RuntimeException("User not found"));

        Employee employee = employeeRepository.findByUser(user)
                .orElseThrow(() -> new RuntimeException("Employee profile not found"));

        leave.setEmployee(employee);
        leave.setStatus("PENDING");
        return leaveRepository.save(leave);
    }

    // Employee view own leave requests
    public List<Leave> getMyLeaves() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        User user = userRepository.findByUsername(auth.getName())
                .orElseThrow(() -> new RuntimeException("User not found"));

        Employee employee = employeeRepository.findByUser(user)
                .orElseThrow(() -> new RuntimeException("Employee profile not found"));

        return leaveRepository.findByEmployee(employee);
    }

    // Admin view all leave requests
    public List<Leave> getAllLeaves() {
        return leaveRepository.findAll();
    }

    // Admin approves or rejects a leave request
    public Leave updateLeave(Long id, Leave leaveDetails) {
        Leave existingLeave = leaveRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Leave not found"));

        existingLeave.setStartDate(leaveDetails.getStartDate());
        existingLeave.setEndDate(leaveDetails.getEndDate());
        existingLeave.setStatus(leaveDetails.getStatus());
        return leaveRepository.save(existingLeave);
    }

    // Admin deletes leave
    public void deleteLeave(Long id) {
        Leave leave = leaveRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Leave not found"));
        leaveRepository.delete(leave);
    }
}
