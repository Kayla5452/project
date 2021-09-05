import React, {useState, useEffect} from 'react';

function PayPeriodInfo({match}){
    const [payPeriod, setPayPeriod] = useState([]);

    useEffect(() => {
        fetchPayPeriod();
        // eslint-disable-next-line
    }, []);

    const fetchPayPeriod = async () => {
        const url = `https://project-7d68.restdb.io/rest/payperiod/${match.params.id}`;
        const data = await fetch(url, {
            method: 'GET',
            headers: {
                'cache-control': 'no-cache',
                'x-apikey': '612aec7343cedb6d1f97ea5f'
            }
        });
        const payPeriod = await data.json();
        setPayPeriod(payPeriod);
    };

    return(
        <div className="card">
            <div className="card-body">
                <h2>Pay Period for {`${payPeriod.StartDate}`.toString().slice(0,10)} till {`${payPeriod.EndDate}`.toString().slice(0,10)}</h2>
                <form className="row g-3">
                    <div className="col-md-6">
                        <label for="PayPeriodID" className="form-label">Pay Period ID</label>
                        <input type="number" className="form-control" id="PayPeriodID" name="PayPeriodID" required value={payPeriod.PayPeriodID}></input>
                    </div>
                    <div className="col-md-6">
                        <label for="BillingCycle" className="form-label">Pay Period</label>
                        <input type="text" className="form-control" id="BillingCycle" name="BillingCycle" required value={payPeriod.BillingCycle}></input>
                    </div>
                    <div className="col-md-6">
                        <label for="StartDate" className="form-label">Start Date</label>
                        <input type="date" className="form-control" id="StartDate" name="StartDate" required value={`${payPeriod.StartDate}`.toString().slice(0,10)}></input>
                    </div>
                    <div className="col-md-6">
                        <label for="EndDate" className="form-label">End Date</label>
                        <input type="date" className="form-control" id="EndDate" name="EndDate" required value={`${payPeriod.EndDate}`.toString().slice(0,10)}></input>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PayPeriodInfo;