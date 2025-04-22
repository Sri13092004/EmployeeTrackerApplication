package com.example.employee.service;

import com.example.employee.model.Employee;
import com.example.employee.model.User;
import com.example.employee.repository.EmployeeRepository;
import com.example.employee.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
    private UserRepository userRepository;

    public Employee createProfile(Employee employee) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        User user = userRepository.findByUsername(auth.getName())
                .orElseThrow(() -> new RuntimeException("Current user not found"));

        if (user.getEmployee() != null) {
            throw new RuntimeException("Profile already exists for this user");
        }

        if (employee.getName() == null || employee.getDesignation() == null ||
            employee.getDepartment() == null || employee.getContactInfo() == null ||
            employee.getDateOfJoining() == null) {
            throw new IllegalArgumentException("All fields are required");
        }

        employee.setUser(user);
        return employeeRepository.save(employee);
    }

    public Employee getCurrentUserProfile() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        User user = userRepository.findByUsername(auth.getName())
                .orElseThrow(() -> new RuntimeException("User not found"));

        return Optional.ofNullable(user.getEmployee())
                .orElseThrow(() -> new RuntimeException("No profile found"));
    }

    public Employee updateOwnProfile(Long id, Employee updated) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        User currentUser = userRepository.findByUsername(auth.getName())
                .orElseThrow(() -> new RuntimeException("Current employee not found"));

        Employee existing = employeeRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Employee not found"));

        if (!currentUser.getId().equals(existing.getUser().getId())) {
            throw new RuntimeException("You can only update your own profile");
        }

        existing.setName(updated.getName());
        existing.setContactInfo(updated.getContactInfo());

        return employeeRepository.save(existing);
    }
}
