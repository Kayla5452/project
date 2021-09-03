import React from "react";

class PaymentCycle extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            PayPeriodID: '',
            StartDate: '',
            EndDate: '',
            BillingCycle: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({[name]: value});
    }

    handleSubmit(event){
        alert("Your new Pay Period has been submitted");
        var request = require("request");

        var options = { 
            method: 'POST',
            url: 'https://project-7d68.restdb.io/rest/payperiod',
            headers: {
                'cache-control': 'no-cache',
                'x-apikey': '612aec7343cedb6d1f97ea5f',
                'content-type' : 'application/json'
            },
            body: {
                PayPeriodID: this.state.PayPeriodID,
                StartDate: this.state.StartDate,
                EndDate: this.state.EndDate,
                BillingCycle: this.state.BillingCycle
            },
            json: true
        };

        request(options, function (error, response, body ){
            if (error) throw new Error(error);
            console.log(body);
        });
        
        event.preventDefault();
        setTimeout(() => {window.location.reload()},2000);
    }
    render(){
        return(
            <div className="card">
                <div className="card-body">
                    <h2>Add Pay Period</h2>
                    <form className="row g-3" onSubmit={this.handleSubmit}>
                        <div className="col-md-6">
                            <label for="PayPeriodID" className="form-label">Pay Period ID</label>
                            <input type="number" className="form-control" id="PayPeriodID" name="PayPeriodID" required value={this.state.PayPeriodID} onChange={this.handleChange}></input>
                        </div>
                        <div className="col-md-6">
                            <label for="BillingCycle" className="form-label">Pay Period</label>
                            <input type="text" className="form-control" id="BillingCycle" name="BillingCycle" required value={this.state.BillingCycle} onChange={this.handleChange}></input>
                        </div>
                        <div className="col-md-6">
                            <label for="StartDate" className="form-label">Start Date</label>
                            <input type="date" className="form-control" id="StartDate" name="StartDate" required value={this.state.StartDate} onChange={this.handleChange}></input>
                        </div>
                        <div className="col-md-6">
                            <label for="EndDate" className="form-label">End Date</label>
                            <input type="date" className="form-control" id="EndDate" name="EndDate" required value={this.state.EndDate} onChange={this.handleChange}></input>
                        </div>
                        <div className="col-md-6">
                            <input className="btn btn-success" type="submit" value="Submit"></input>
                        </div>
                        <div className="col-md-6">
                            <input className="btn btn-warning" type="reset" value="Reset"></input>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

}

export default PaymentCycle;