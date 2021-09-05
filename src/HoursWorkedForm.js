import React from 'react';

class Payment extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            EmployeeID: '',
            HoursWorked: '',
            PayPeriodID: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({[name]: value})
    }

    handleSubmit(event){
        alert("Your hours worked have been submitted");
        var request = require("request")
        var options = {
            method: 'POST',
            url: 'https://project-7d68.restdb.io/rest/payment',
            headers: {
                'cache-control': 'no-cache',
                'x-apikey': '612aec7343cedb6d1f97ea5f',
                'content-type' : 'application/json'
            },
            body: {
                EmployeeID: this.state.EmployeeID,
                HoursWorked: this.state.HoursWorked,
                PayPeriodID: this.state.PayPeriodID
            },
            json: true
        };
        request(options, function (error, response, body) {
            if (error) throw new Error(error);
            console.log(body);
        });
        event.preventDefault();
        setTimeout(() => {window.location.reload()},2000)
    }
    render(){
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
                            <input className="btn btn-success" type="submit" value="Submit"></input>
                        </div>
                        <div className="col-md-4">
                            <input className="btn btn-warning" type="reset" value="Reset"></input>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Payment;