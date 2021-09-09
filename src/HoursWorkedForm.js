import React from 'react';
import {Redirect} from "react-router-dom";

class Payment extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            EmployeeID: '',
            HoursWorked: '',
            PayPeriodID: '',
            redirect: null
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRedirect = this.handleRedirect.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({[name]: value})
    }

    handleSubmit(event){
        alert("Payment has been added")
        const data = {
            EmployeeID: this.state.EmployeeID,
            HoursWorked: this.state.HoursWorked,
            PayPeriodID: this.state.PayPeriodID
        };
        const url = 'https://project-7d68.restdb.io/rest/payment';

        fetch(url, {method: 'POST', headers: {'Content-Type': 'application/json','cache-control': 'no-cache','x-apikey': '612aec7343cedb6d1f97ea5f'}, body: JSON.stringify(data)})
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.log('Error:', error);
        });

        event.preventDefault();
        setTimeout(() => {this.handleRedirect()},2000)
    }

    handleRedirect(){
        this.setState({redirect: "/Payment/Information"})
    }
    render(){
        if(this.state.redirect){
            return <Redirect to={this.state.redirect}/>
        }
        return(
            <div className="card">
                <div className="card-body">
                    <h2>Add Pay Period</h2>
                    <form className="row g-3" onSubmit={this.handleSubmit}>
                        <div className="col-md-4">
                            <label for="EmployeeID" className="form-label">Employee ID</label>
                            <input type="number" className="form-control" id="EmployeeID" name="EmployeeID" required value={this.state.EmployeeID} onChange={this.handleChange}></input>
                        </div>
                        <div className="col-md-4">
                            <label for="HoursWorked" className="form-label">Hours Worked</label>
                            <input type="number" className="form-control" id="HoursWorked" name="HoursWorked" required value={this.state.HoursWorked} onChange={this.handleChange}></input>
                        </div>
                        <div className="col-md-4">
                            <label for="PayPeriodID" className="form-label">Pay Period</label>
                            <input type="number" className="form-control" id="PayPeriodID" name="PayPeriodID" required value={this.state.PayPeriodID} onChange={this.handleChange}></input>
                        </div>
                        <div className="col-md-4">
                            <button className="btn btn-success" type="submit" value="Submit">Submit</button>
                        </div>
                        <div className="col-md-4">
                            <button className="btn btn-warning" type="reset" value="Reset">Reset</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Payment;