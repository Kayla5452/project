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
                        <Link to="/EmployeeForm" className="nav-link"><li>Employee Form</li></Link>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;