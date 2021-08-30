import React, {useState, useEffect} from 'react';

function EmployeeItem({match}){
    const [item, setItem] = useState([]);

    useEffect(() => {
        fetchItem();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const fetchItem = async () => {
        const url = `https://project-7d68.restdb.io/rest/employee/${match.params.id}`;
        const data = await fetch(url, {method: 'GET',
        headers: 
        { 'cache-control': 'no-cache',
            'x-apikey': '612aec7343cedb6d1f97ea5f' }});
        const item = await data.json();
        setItem(item)
    };

    return(
        <div className="card">
        <div className="card-body">
            <h3>{item.FirstName} {item.LastName}</h3>
            <form className="row g-3">
                <div className="col-md-6">
                    <label for="FirstName" className="form-label">First Name</label>
                    <input type="text" className="form-control" id="FirstName" value={`${item.FirstName}`} readOnly></input>
                </div>
                <div className="col-md-6">
                    <label for="MiddleName" className="form-label">Middle Name/s</label>
                    <input type="text" className="form-control" id="MiddleName" value={`${item.MiddleName}`}  readOnly></input>
                </div>
                <div className="col-12">
                    <label for="LastName" className="form-label">Last Name</label>
                    <input type="text" className="form-control" id="LastName" value={`${item.LastName}`}  readOnly></input>
                </div>
                <div className="col-md-6">
                    <label for="Email" className="form-label">Email Address</label>
                    <input type="email" className="form-control" id="Email" value={`${item.Email}`}  readOnly></input>
                </div>
                <div className="col-md-6">
                    <label for="Phone" className="form-label">Mobile Phone Number</label>
                    <input type="tel" className="form-control" id="Phone" value={`${item.MobilePhone}`}  readOnly></input>
                </div>
                <div className="col-md-6">
                    <label for="EmployeeID" className="form-label">Employee ID</label>
                    <input type="number" className="form-control" id="EmployeeID" value={`${item.EmployeeID}`}  readOnly></input>
                </div>
                <div className="col-md-6">
                    <label for="IRD" className="form-label">IRD Number</label>
                    <input type="text" className="form-control" id="IRD"  value={`${item.IRD}`} readOnly></input>
                </div>
                <div className="col-md-6">
                    <label for="TaxCode" className="form-label">Tax Code</label>
                    <input type="text" className="form-control" id="TaxCode"  value={`${item.TaxCode}`} readOnly></input>
                </div>
                <div className="col-md-6">
                    <label for="PayRate" className="form-label">Pay Rate</label>
                    <input type="number" className="form-control" id="PayRate"  value={`${item.PayRate}`} readOnly></input>
                </div>
                <div className="col-12">
                    <label for="BankAccount" className="form-label">Bank Account Number</label>
                    <input type="text" className="form-control" id="BankAccount" value={`${item.BankAccount}`} readOnly></input>
                </div>
                <div className="col-md-6">
                    <label for="StartDate" className="form-label">Start Date</label>
                    <input type="date" className="form-control" id="StartDate" value={`${item.StartDate}`} readOnly></input>
                </div>
                <div className="col-md-6">
                    <label for="JobTitle" className="form-label">Job Title</label>
                    <input type="text" className="form-control" id="JobTitle"  value={`${item.JobRole}`} readOnly></input>
                </div>
                <div className="col-sm-3">
                    <button className="btn btn-info" disabled>Edit</button>
                </div>
                <div className="col-sm-3">
                    <button className="btn btn-warning" disabled>Reset</button>
                </div>
                
                <div className="col-sm-3">
                    <button className="btn btn-success" disabled>Update</button>
                </div>
                
                <div className="col-sm-3">
                    <button className="btn btn-danger" disabled>Delete</button>
                </div>
            </form>
        </div>
    </div>
    );
}

export default EmployeeItem;