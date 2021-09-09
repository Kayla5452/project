import React from 'react';
import { Redirect } from "react-router-dom";

class PaymentInformation extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id: window.location.href.substring(window.location.href.lastIndexOf('/') + 1),
            PaymentID: '',
            EmployeeID: '',
            PayPeriodID: '',
            HoursWorked: '',
            redirect: null
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleRedirect = this.handleRedirect.bind(this);
    }

    handleChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({[name]: value});
    }

    handleSubmit(event){
        alert("Payment has been updated")
        const data = {
            PaymentID: this.state.PaymentID,
            EmployeeID: this.state.EmployeeID,
            HoursWorked: this.state.HoursWorked,
            PayPeriodID: this.state.PayPeriodID
        };
        const url = `https://project-7d68.restdb.io/rest/payment/${this.state.id}`;

        fetch(url, {method: 'PUT', headers: {'Content-Type': 'application/json','cache-control': 'no-cache','x-apikey': '612aec7343cedb6d1f97ea5f'}, body: JSON.stringify(data)})
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.log('Error:', error);
        });

        event.preventDefault();
    }

    handleDelete(){
        const url = `https://project-7d68.restdb.io/rest/payment/${this.state.id}`;

        fetch(url, {method: 'DELETE', headers: {'Content-Type': 'application/json','cache-control': 'no-cache','x-apikey': '612aec7343cedb6d1f97ea5f'}})
        .then(
            console.log('Success')
        )
        .catch((error) => {
            console.log('Error:', error);
        });

        alert("This payment has been deleted from the database")
        setTimeout(() => {this.handleRedirect()},2000);
    }

    handleRedirect(){
        this.setState({redirect: "/Payment/Information"})
    }

    componentDidMount(){
        fetch(`https://project-7d68.restdb.io/rest/payment/${this.state.id}`, {method:"GET", headers: {'Content-Type': 'application/json','cache-control': 'no-cache','x-apikey': '612aec7343cedb6d1f97ea5f'}})
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    PaymentID: result.PaymentID,
                    EmployeeID: result.EmployeeID,
                    HoursWorked: result.HoursWorked,
                    PayPeriodID: result.PayPeriodID
                });
            },
            
            (error) => {
                console.log('Error:',error);
            }
        )
    }

    render(){
        if(this.state.redirect){
            return <Redirect to={this.state.redirect}/>
        }
        return(
            <div className="card">
                <div className="card-body">
                    <h2>Payment {this.state.PaymentID} for {this.state.EmployeeID} for {this.state.HoursWorked} hours worked</h2>
                    <form className="row g-3" onSubmit={this.handleSubmit}>
                        <div className="col-md-6">
                            <label for="PaymentID" className="form-label">Payment ID</label>
                            <input type="number" className="form-control" id="PaymentID" name="PaymentID" readOnly value={this.state.PaymentID} onChange={this.handleChange}></input>
                        </div>
                        <div className="col-md-6">
                            <label for="EmployeeID" className="form-label">Employee ID</label>
                            <input type="number" className="form-control" id="EmployeeID" name="EmployeeID" required value={this.state.EmployeeID} onChange={this.handleChange}></input>
                        </div>
                        <div className="col-md-6">
                            <label for="HoursWorked" className="form-label">Hours Worked</label>
                            <input type="number" className="form-control" id="HoursWorked" name="HoursWorked" required value={this.state.HoursWorked} onChange={this.handleChange}></input>
                        </div>
                        <div className="col-md-6">
                            <label for="PayPeriodID" className="form-label">Pay Period</label>
                            <input type="number" className="form-control" id="PayPeriodID" name="PayPeriodID" required value={this.state.PayPeriodID} onChange={this.handleChange}></input>
                        </div>
                        <div className="col-md-6">
                            <button className="btn btn-success" type="submit" value="Update">Update</button>
                        </div>
                        <div className="col-md-6">
                            <button className="btn btn-danger" type="button" value="Delete" onClick={this.handleDelete}>Delete</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
export default PaymentInformation;