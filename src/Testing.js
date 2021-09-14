import { useState, useEffect} from "react";
import {Link} from "react-router-dom";

function Testing(){
    useEffect(()=> {
        fetchOptions();
    }, []);

    const [options, setOptions] = useState([]);

    const fetchOptions = async () => {
        const url = "https://project-7d68.restdb.io/rest/testing";
        const data = await fetch (url, {
            method: 'GET',
            headers: {
                'cache-control': 'no-cache',
                'x-apikey': '612aec7343cedb6d1f97ea5f'
            }
        })
        const options = await data.json();
        setOptions(options)
        console.log(options);
    };
    return(
        <div className="card">
            <div className="card-body">
                <h2 className="card-title">Select Payment</h2>
                <ul className="list-group">
                    {options.map(option => (
                        <Link to={`/Testing/${option._id}`} className="list-group-item nav-link linkNoDecoration"><li className="list-group-item linkNoDecoration">Payment {option._id} for {option.employee[0].FirstName} {option.employee[0].LastName} for 10 hours worked</li></Link>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Testing;