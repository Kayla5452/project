import { useState, useEffect} from "react";
import {Link} from "react-router-dom";

function PaymentSelect(){
    useEffect(()=> {
        fetchOptions();
    }, []);

    const [options, setOptions] = useState([]);

    const fetchOptions = async () => {
        const url = "https://project-7d68.restdb.io/rest/payment";
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
                <h2 className="card-title">Select Payment</h2>
                <ul className="list-group">
                    {options.map(option => (
                        <Link to={`/Payment/Information/${option._id}`} className="list-group-item nav-link linkNoDecoration"><li className="list-group-item linkNoDecoration">Payment {option.PaymentID} for {option.EmployeeID} for {option.HoursWorked} hours worked</li></Link>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default PaymentSelect;