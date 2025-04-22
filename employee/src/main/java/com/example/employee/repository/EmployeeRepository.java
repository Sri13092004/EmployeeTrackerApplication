package com.example.employee.repository;


import com.example.employee.model.Employee;
import com.example.employee.model.User;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Long> 
{
	List<Employee> findByNameContaining(String name);
	List<Employee> findByDepartment(String department);
	List<Employee> findByNameContainingAndDepartment(String name, String department);
	Optional<Employee> findByUser(User user);
}