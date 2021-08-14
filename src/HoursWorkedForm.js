function Hours(){
    return(
        <div className="card">
            <div className="card-body">
                <h2>Form</h2>
                <form className="row g-3">
                    <div className="col-md-4">
                        <label for="EmployeeID" className="form-label">Employee ID</label>
                        <input type="number" className="form-control" id="EmployeeID"></input>
                    </div>
                    <div className="col-md-4">
                        <label for="HoursWorked" className="form-label">Hours Worked</label>
                        <input type="number" className="form-control" id="HoursWorked"></input>
                    </div>
                    <div className="col-md-4">
                        <label for="PayPeriod" className="form-label">Pay Period</label>
                        <select className="form-select" aria-label="PayPeriod">
                            <option selected>Current</option>
                            <option value="20">Next Pay Period</option>
                            <option value="21">Previous Pay Period</option>
                        </select>
                    </div>
                    <div className="col-md-4">
                        <button type="submit" className="btn btn-success">Submit</button>
                    </div>
                    <div className="col-md-4">
                        <button type="reset" className="btn btn-warning">Reset Form</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Hours;