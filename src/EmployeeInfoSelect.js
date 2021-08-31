import {useState, useEffect} from "react";
import {Link} from "react-router-dom"

function EmployeeInfoSelect(){
    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const url = "https://project-7d68.restdb.io/rest/employee";
        const data = await fetch(url, {method: 'GET',
        headers: 
        { 'cache-control': 'no-cache',
            'x-apikey': '612aec7343cedb6d1f97ea5f' }});
        const items = await data.json();
        setItems(items)
    };
    return(
        <div className="card">
            <div className="card-body">
                <h2 className="card-title">Select Employee</h2>
                <ul className="list-group">
                    {items.map(item => (
                        <Link to={`/Employee/Information/${item._id}`} className="nav-item linkNoDecoration"><li className="list-group-item linkNoDecoration">{item.FirstName} {item.LastName}</li></Link>
                    ))}
                </ul>
            </div>
        </div>
    )
}
export default EmployeeInfoSelect;