package com.guptha.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.guptha.exception.ResourceNotFoundException;
import com.guptha.model.Employee;
import com.guptha.repository.EmployeeRepository;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/api/v1")
public class EmployeeController {

	@Autowired
	private EmployeeRepository employeeRepo;

	@GetMapping("/employees")
	public List<Employee> getAllEmployees() {
		return employeeRepo.findAll();
	}

	@GetMapping("/employees/{id}")
	public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id) {
		Employee emp = employeeRepo.findById(id).orElse(null);
		if (emp == null)
			throw new ResourceNotFoundException("Employee not exits with id :" + id);
		return ResponseEntity.ok(emp);
	}

	@PostMapping("/addEmployees")
	public Employee addEmployee(@RequestBody Employee emp) {
		return employeeRepo.save(emp);
	}

	@PutMapping("/updateEmployee/{id}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable Long id, @RequestBody Employee emp) {

		Employee e = employeeRepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exits with id :" + id));

		e.setFirstName(emp.getFirstName());
		e.setLastName(emp.getLastName());
		e.setEmailId(emp.getEmailId());

		Employee updatedEmployee = employeeRepo.save(e);

		return ResponseEntity.ok(updatedEmployee);
	}

	@DeleteMapping("/deleteEmployee/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable Long id) {
		Employee e = employeeRepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exists with id: " + id));

		employeeRepo.delete(e);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);

	}

}
