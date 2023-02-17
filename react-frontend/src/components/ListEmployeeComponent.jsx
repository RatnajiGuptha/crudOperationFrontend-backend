import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            employees: []
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmpolyee = this.editEmpolyee.bind(this);
        this.deleteEmpolyee = this.deleteEmpolyee.bind(this);
    }

    addEmployee() {
        this.props.history.push('/add-employee/_add')
    }
    editEmpolyee(id) {
        this.props.history.push(`/update-employee/${id}`);
    }

    deleteEmpolyee(id) {
        EmployeeService.deleteEmployee(id).then(res => {
            this.setState({ employees: this.state.employees.filter(employee => employee.id !== id) })
        })
    }

    viewEmpolyee(id){
        this.props.history.push(`/view-employee/${id}`);
    }

    componentDidMount() {
        EmployeeService.getEmployees()
            .then((res) => this.setState({
                employees: res.data
            })
            );
    }
    render() {
        return (
            <div>
                <h2 className='text-center'>Employees List</h2>
                <Link to='/add-employee/_add'>
                    <button className='btn btn-primary mb-2' onClick={this.addEmployee}>Add Employee</button>
                </Link>
                <div className='row'>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr className='text-center'>
                                <th> Employee First Name</th>
                                <th> Employee Last Name </th>
                                <th> Employee Email Id</th>
                                <th> Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(
                                    employee =>
                                        <tr key={employee.id}>
                                            <td>{employee.firstName}</td>
                                            <td>{employee.lastName}</td>
                                            <td>{employee.emailId}</td>
                                            <td>
                                                <Link to={`/add-employee/${employee.id}`}>
                                                    <button onClick={() => this.editEmpolyee(employee.id)} className='btn btn-success'> Update</button>
                                                </Link>
                                                <Link to={'/employees'}>
                                                    <button className='btn btn-danger' style={{ marginLeft: '10px' }} onClick={() => this.deleteEmpolyee(employee.id)}> Delete</button>
                                                </Link>
                                                <Link to={`/view-employee/${employee.id}`}>
                                                    <button className='btn btn-info' style={{ marginLeft: '10px' }} onClick={() => this.viewEmpolyee(employee.id)}> View</button>
                                                </Link>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListEmployeeComponent;