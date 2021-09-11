import React from "react";
import { Redirect } from "react-router";

class PayPeriod extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id: window.location.href.substring(window.location.href.lastIndexOf('/') + 1),
            PayPeriodID: '',
            StartDate: '',
            EndDate: '',
            BillingCycle: '',
            redirect: null
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleRedirect = this.handleRedirect.bind(this);
    };

    handleChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({[name]: value});
    };

    handleSubmit(event){
        alert("This Pay Period has been updated");
        const data = {
            PayPeriodID: this.state.PayPeriodID,
            StartDate: this.state.StartDate,
            EndDate: this.state.EndDate,
            BillingCycle: this.state.BillingCycle
        };
        const url = `https://project-7d68.restdb.io/rest/payperiod/${this.state.id}`;
        fetch(url, {method: "PUT", headers: {'Content-Type': 'application/json','cache-control': 'no-cache','x-apikey': '612aec7343cedb6d1f97ea5f'}, body: JSON.stringify(data)})
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.log('Error',error);
        })

        event.preventDefault();
    };

    handleDelete(){
        alert("This Pay Period has been deleted")
        const url = `https://project-7d68.restdb.io/rest/payperiod/${this.state.id}`;
        fetch(url, {method: "DELETE", headers: {'Content-Type': 'application/json','cache-control': 'no-cache','x-apikey': '612aec7343cedb6d1f97ea5f'}})
        .then(response => {
            console.log('Success',response);
        })
        .catch((error) => {
            console.log('Error',error);
        })
        setTimeout(() => {this.handleRedirect()},2000);
    };

    handleRedirect(){
        this.setState({redirect: "/Payment/PayPeriod"});
    };

    componentDidMount(){
        const url = `https://project-7d68.restdb.io/rest/payperiod/${this.state.id}`;
        fetch(url, {method: "GET", headers: {'Content-Type': 'application/json','cache-control': 'no-cache','x-apikey': '612aec7343cedb6d1f97ea5f'}})
        .then(response => response.json())
        .then((result) => {
            this.setState({
                PayPeriodID: result.PayPeriodID,
                StartDate: result.StartDate,
                EndDate: result.EndDate,
                BillingCycle: result.BillingCycle
            })
        })
        .catch((error) => {
            console.log('Error',error);
        })

    }

    render(){
        if (this.state.redirect){
            return <Redirect to={this.state.redirect}/>
        }
        return(
            <div className="card">
                <div className="card-body">
                    <h2>Add Pay Period</h2>
                    <form className="row g-3" onSubmit={this.handleSubmit}>
                        <div className="col-md-6">
                            <label for="PayPeriodID" className="form-label">Pay Period</label>
                            <input type="text" className="form-control" id="PayPeriodID" name="PayPeriodID" readOnly value={this.state.PayPeriodID} onChange={this.handleChange}></input>
                        </div>
                        <div className="col-md-6">
                            <label for="BillingCycle" className="form-label">Pay Period</label>
                            <input type="text" className="form-control" id="BillingCycle" name="BillingCycle" required value={this.state.BillingCycle} onChange={this.handleChange}></input>
                        </div>
                        <div className="col-md-6">
                            <label for="StartDate" className="form-label">Start Date</label>
                            <input type="date" className="form-control" id="StartDate" name="StartDate" required value={`${this.state.StartDate}`.toString().slice(0,10)} onChange={this.handleChange}></input>
                        </div>
                        <div className="col-md-6">
                            <label for="EndDate" className="form-label">End Date</label>
                            <input type="date" className="form-control" id="EndDate" name="EndDate" required value={`${this.state.EndDate}`.toString().slice(0,10)} onChange={this.handleChange}></input>
                        </div>
                        <div className="col-md-6">
                            <button className="btn btn-success" type="submit" value="Submit">Update</button>
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
export default PayPeriod;