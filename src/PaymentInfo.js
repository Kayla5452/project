import React, {useState, useEffect} from 'react';

function PaymentInfo({match}){
    const [payment, setPayment] = useState([]);

    useEffect(() => {
        fetchPayment();
        // eslint-disable-next-line
    }, []);

    const fetchPayment = async () => {
        const url = `https://project-7d68.restdb.io/rest/payment/${match.params.id}`;
        const data = await fetch(url, {
            method: 'GET',
            headers: {
                'cache-control': 'no-cache',
                'x-apikey': '612aec7343cedb6d1f97ea5f'
            }
        });
        const payment = await data.json();
        setPayment(payment);
    };

    return(
        <div className="card">
            <div className="card-body">
                <h2 className="card-title">Payment {payment.PaymentID} for {payment.EmployeeID} for {payment.HoursWorked} hours worked</h2>
                <form className="row g-3">
                    <div className="col-md-6">
                        <label for="PaymentID" className="form-label">Pay Period ID</label>
                        <input type="number" className="form-control" id="PaymentID" name="PaymentID" required value={payment.PaymentID}></input>
                    </div>
                    <div className="col-md-6">
                        <label for="EmployeeID" className="form-label">Employee ID</label>
                        <input type="number" className="form-control" id="EmployeeID" name="EmployeeID" required value={payment.EmployeeID}></input>
                    </div>
                    <div className="col-md-6">
                        <label for="HoursWorked" className="form-label">Hours Worked</label>
                        <input type="number" className="form-control" id="HoursWorked" name="HoursWorked" required value={`${payment.HoursWorked}`.toString().slice(0,10)}></input>
                    </div>
                    <div className="col-md-6">
                        <label for="PayPeriodID" className="form-label">Pay Period ID</label>
                        <input type="number" className="form-control" id="PayPeriodID" name="PayPeriodID" required value={`${payment.PayPeriodID}`.toString().slice(0,10)}></input>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PaymentInfo;