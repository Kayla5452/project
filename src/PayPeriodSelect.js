import { useState, useEffect} from "react";
import {Link} from "react-router-dom";

function PayPeriodSelect(){
    useEffect(()=> {
        fetchOptions();
    }, []);

    const [options, setOptions] = useState([]);

    const fetchOptions = async () => {
        const url = "https://project-7d68.restdb.io/rest/payperiod";
        const data = await fetch (url, {
            method: 'GET',
            headers: {
                'cache-control': 'no-cache',
                'x-apikey': '612aec7343cedb6d1f97ea5f'
            }
        })
        const options = await data.json();
        setOptions(options)
    };
    return(
        <div className="card">
            <div className="card-body">
                <h2 className="card-title">Select Pay Period</h2>
                <ul className="list-group">
                    {options.map(option => (
                        <Link to={`/Payment/PayPeriod/${option._id}`} className="nav-link linkNoDecoration"><li className="list-group-item linkNoDecoration">{`${option.StartDate}`.toString().slice(0,10)} till {`${option.EndDate}`.toString().slice(0,10)}</li></Link>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default PayPeriodSelect;