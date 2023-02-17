import React, { Component } from 'react';
import { Link, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

export function withRouter(Children) {
    return (props) => {
        const match = { params: useParams() };
        return <Children {...props} match={match} />
    }
}

class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
    }

    componentDidMount() {
        EmployeeService.getEmployeeById(this.state.id).then(res => {
            this.setState({ employee: res.data })
        });
    }

    render() {
        return (
            <div>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    <h3 className='text-center'> View Employee Details</h3>
                    <div className='card-body'>
                        <div className='row'>
                            <label >Employee Id: {this.state.employee.id}</label>
                            <label >Employee First Name: {this.state.employee.firstName}</label>
                            <label >Employee Last Name: {this.state.employee.lastName} </label>
                            <label >Employee email id: {this.state.employee.emailId}</label>
                            <div>
                                <Link to={'/employees'}>
                                    <button className='btn btn-danger m-2'> Back</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(ViewEmployeeComponent);
