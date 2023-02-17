package com.guptha.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.guptha.model.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {

}
