package com.example.employee.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.employee.model.Employee;
import com.example.employee.model.Leave;

public interface LeaveRepository extends JpaRepository<Leave, Long> {
    List<Leave> findByEmployee(Employee employee);
}

