import React from "react";

function todayDate(){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;

    return(today)
}

class PaymentCycle extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            StartDate: todayDate(),
            EndDate: todayDate(),
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
                        <div className="col-md-4">
                            <label for="BillingCycle" className="form-label">Pay Period</label>
                            <input type="text" className="form-control" id="BillingCycle" name="BillingCycle" required value={this.state.BillingCycle} onChange={this.handleChange}></input>
                        </div>
                        <div className="col-md-4">
                            <label for="StartDate" className="form-label">Start Date</label>
                            <input type="date" className="form-control" id="StartDate" name="StartDate" required value={this.state.StartDate} onChange={this.handleChange}></input>
                        </div>
                        <div className="col-md-4">
                            <label for="EndDate" className="form-label">End Date</label>
                            <input type="date" className="form-control" id="EndDate" name="EndDate" required value={this.state.EndDate} onChange={this.handleChange}></input>
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

export default PaymentCycle;