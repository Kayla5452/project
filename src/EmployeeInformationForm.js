import React from "react";
import { Redirect} from "react-router-dom";

function todayDate(){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;

    return(today)
}

class EmployeeForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            EmployeeID: '',
            FirstName: '',
            MiddleName: '',
            LastName: '',
            Email: '',
            MobilePhone: '',
            IRD: '',
            TaxCode: 'M',
            PayRate: '20',
            BankAccount: '',
            StartDate: todayDate(),
            JobRole: 'Worker',
            redirect: null
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRedirect = this.handleRedirect.bind(this);
    }

    handleChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({[name]: value});
    }

    handleSubmit(event){
        alert("Your new employee has been submitted");
        
        const data = {
            EmployeeID: this.state.EmployeeID,
            FirstName: this.state.FirstName,
            MiddleName: this.state.MiddleName,
            LastName: this.state.LastName,
            Email: this.state.Email,
            MobilePhone: this.state.MobilePhone,
            IRD: this.state.IRD,
            TaxCode: this.state.TaxCode,
            PayRate: this.state.PayRate,
            BankAccount: this.state.BankAccount,
            StartDate: this.state.StartDate,
            JobRole: this.state.JobRole
        }
        
        const url = "https://project-7d68.restdb.io/rest/employee"
        
        fetch(url, {method: 'POST', headers: {'Content-Type': 'application/json','cache-control': 'no-cache','x-apikey': '612aec7343cedb6d1f97ea5f'}, body: JSON.stringify(data)})
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);;
        })
        .catch((error) => {
            console.error('Error: ',error)
        });
        
        event.preventDefault();
        setTimeout(() => {this.handleRedirect()},2000);
    };
    
    handleRedirect(){
        this.setState({redirect: "/Employee/Information"})
    }

    render(){
        if(this.state.redirect){
            return <Redirect to={this.state.redirect} />
        }
        return(
            <div className="card">
            <div className="card-body">
                <h2>Add New Employee</h2>
                <form className="row g-3" onSubmit={this.handleSubmit}>
                    <div className="col-md-6">
                        <label for="FirstName" className="form-label">First Name</label>
                        <input type="text" className="form-control" id="FirstName" name="FirstName" required value={this.state.FirstName} onChange={this.handleChange}></input>
                    </div>
                    <div className="col-md-6">
                        <label for="MiddleName" className="form-label">Middle Name/s</label>
                        <input type="text" className="form-control" id="MiddleName" name="MiddleName" value={this.state.MiddleName} onChange={this.handleChange}></input>
                    </div>
                    <div className="col-12">
                        <label for="LastName" className="form-label">Last Name</label>
                        <input type="text" className="form-control" id="LastName" name="LastName" required value={this.state.LastName} onChange={this.handleChange}></input>
                    </div>
                    <div className="col-md-6">
                        <label for="Email" className="form-label">Email Address</label>
                        <input type="email" className="form-control" id="Email" name="Email" required value={this.state.Email} onChange={this.handleChange}></input>
                    </div>
                    <div className="col-md-6">
                        <label for="Phone" className="form-label">Mobile Phone Number</label>
                        <input type="tel" className="form-control" id="Phone" name="MobilePhone" required value={this.state.MobilePhone} onChange={this.handleChange}></input>
                    </div>
                    <div className="col-md-6">
                        <label for="EmployeeID" className="form-label">Employee ID</label>
                        <input type="number" className="form-control" id="EmployeeID" name="EmployeeID" required value={this.state.EmployeeID} onChange={this.handleChange}></input>
                    </div>
                    <div className="col-md-6">
                        <label for="IRD" className="form-label">IRD Number</label>
                        <input type="text" className="form-control" id="IRD" name="IRD" required value={this.state.IRD} onChange={this.handleChange}></input>
                    </div>
                    <div className="col-md-6">
                        <label for="TaxCode" className="form-label">Tax Code</label>
                        <select className="form-select" aria-label="TaxCode" name="TaxCode" value={this.state.TaxCode} onChange={this.handleChange}>
                            <option value="M">M</option>
                            <option value="M SL">M SL</option>
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label for="PayRate" className="form-label">Pay Rate</label>
                        <select className="form-select" aria-label="PayRate" name="PayRate" value={this.state.PayRate} onChange={this.handleChange}>
                            <option value="20">$20.00</option>
                            <option value="21">$21.00</option>
                            <option value="22">$22.00</option>
                        </select>
                    </div>
                    <div className="col-12">
                        <label for="BankAccount" className="form-label">Bank Account Number</label>
                        <input type="text" className="form-control" id="BankAccount" name="BankAccount" required value={this.state.BankAccount} onChange={this.handleChange}></input>
                    </div>
                    <div className="col-md-6">
                        <label for="StartDate" className="form-label">Start Date</label>
                        <input type="date" className="form-control" id="StartDate" name="StartDate" required value={this.state.StartDate} onChange={this.handleChange}></input>
                    </div>
                    <div className="col-md-6">
                        <label for="JobTitle" className="form-label">Job Title</label>
                        <select className="form-select" aria-label="JobTitle" name="JobRole" value={this.state.JobRole} onChange={this.handleChange}>
                            <option value="Manager">Manager</option>
                            <option value="Trainer">Trainer</option>
                            <option value="Worker" >Worker</option>
                        </select>
                    </div>
                    <div className="col-md-6">
                        <button type="submit" className="btn btn-success">Submit</button>
                    </div>
                    <div className="col-md-6">
                        <button type="reset" className="btn btn-warning">Reset Form</button>
                    </div>
                </form>
            </div>
        </div>
        )
    }
}
export default EmployeeForm;