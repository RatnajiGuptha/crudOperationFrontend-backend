import axios from 'axios';

const EMPLOYEE_API_FETCH_URL = "http://localhost:8080/api/v1/employees";

const EMPLOYEE_API_ADD_URL = "http://localhost:8080/api/v1/addEmployees";

const EMPLOYEE_API_UPDATE_URL = "http://localhost:8080/api/v1/updateEmployee";

const EMPLOYEE_API_DELETE_URL = "http://localhost:8080/api/v1/deleteEmployee"

class EmployeeService {

    getEmployees() {
        return axios.get(EMPLOYEE_API_FETCH_URL);
    }

    getEmployeeById(employeeId) {
        return axios.get(EMPLOYEE_API_FETCH_URL + "/" + employeeId);
    }

    createEmployee(employee) {
        return axios.post(EMPLOYEE_API_ADD_URL, employee);
    }

    updateEmployee(employee, employeeId) {
        return axios.put(EMPLOYEE_API_UPDATE_URL + "/" + employeeId, employee);
    }

    deleteEmployee(employeeId) {
        return axios.delete(EMPLOYEE_API_DELETE_URL + "/" + employeeId);
    }
}

export default new EmployeeService();