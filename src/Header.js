import React from "react";
import {Link} from "react-router-dom"

function Header(){
    return(
        <nav class="navbar navbar-expand-lg navbar-light border">
            <div class="container-fluid">
                <Link to="/" className="navbar-brand"><h2>Bundy Trackers</h2></Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">                        
                        <Link to="/" className="nav-link" aria-current="page"><li>Home</li></Link>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Employee Information</a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown"> 
                                <Link to="/Employee/New" className="dropdown-item"><li>Add New Employee</li></Link>
                                <Link to="/Employee/Information" className="dropdown-item"><li>View Employee Information</li></Link>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button" data-bs-toggle="dropdown" aria-expanded="false">Payment Information</a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown2"> 
                            <Link to="/WorkedHours" className="dropdown-item"><li>Add Hours Worked</li></Link>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;