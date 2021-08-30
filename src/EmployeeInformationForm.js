function Employee(){
    return(
        <div className="card">
            <div className="card-body">
                <h2>Add New Employee</h2>
                <form className="row g-3">
                    <div className="col-md-6">
                        <label for="FirstName" className="form-label">First Name</label>
                        <input type="text" className="form-control" id="FirstName"></input>
                    </div>
                    <div className="col-md-6">
                        <label for="MiddleName" className="form-label">Middle Name/s</label>
                        <input type="text" className="form-control" id="MiddleName"></input>
                    </div>
                    <div className="col-12">
                        <label for="LastName" className="form-label">Last Name</label>
                        <input type="text" className="form-control" id="LastName"></input>
                    </div>
                    <div className="col-md-6">
                        <label for="Email" className="form-label">Email Address</label>
                        <input type="email" className="form-control" id="Email"></input>
                    </div>
                    <div className="col-md-6">
                        <label for="Phone" className="form-label">Mobile Phone Number</label>
                        <input type="tel" className="form-control" id="Phone"></input>
                    </div>
                    <div className="col-md-6">
                        <label for="EmployeeID" className="form-label">Employee ID</label>
                        <input type="number" className="form-control" id="EmployeeID"></input>
                    </div>
                    <div className="col-md-6">
                        <label for="IRD" className="form-label">IRD Number</label>
                        <input type="text" className="form-control" id="IRD"></input>
                    </div>
                    <div className="col-md-6">
                        <label for="TaxCode" className="form-label">Tax Code</label>
                        <select className="form-select" aria-label="TaxCode">
                            <option selected>Select a Tax Code</option>
                            <option value="M">M</option>
                            <option value="M SL">M SL</option>
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label for="PayRate" className="form-label">Pay Rate</label>
                        <select className="form-select" aria-label="PayTate">
                            <option selected>Select a Pay Rate</option>
                            <option value="20">$20.00</option>
                            <option value="21">$21.00</option>
                            <option value="22">$22.00</option>
                        </select>
                    </div>
                    <div className="col-12">
                        <label for="BankAccount" className="form-label">Bank Account Number</label>
                        <input type="text" className="form-control" id="BankAccount"></input>
                    </div>
                    <div className="col-md-6">
                        <label for="StartDate" className="form-label">Start Date</label>
                        <input type="date" className="form-control" id="StartDate"></input>
                    </div>
                    <div className="col-md-6">
                        <label for="JobTitle" className="form-label">Job Title</label>
                        <select className="form-select" aria-label="JobTitle">
                            <option selected>Select a Job Title</option>
                            <option value="Manager">Manager</option>
                            <option value="Trainer">Trainer</option>
                            <option value="Worker">Worker</option>
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
export default Employee;