import React from "react";
//make sure to install react router dom using "npm i react-router-dom"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
//put all links to different components below here
import Landing from "./Landing";
import Header from "./Header";
import Footer from "./Footer";
import Employee from "./EmployeeInformationForm";
import Hours from "./HoursWorkedForm";
import EmployeeInfoSelect from "./EmployeeInfoSelect";
import EmployeeInformation from "./EmployeeInformation";

//Main function to control which is shown and what is not
function Main(){
    return(
        <Router>
            <div>
                <Header/>
                <Switch>
                    <Route path="/" exact component={Landing}/>
                    <Route path="/Employee/New" exact component={Employee}/>
                    <Route path="/Payment/WorkedHours" exact component={Hours}/>
                    <Route path="/Employee/Information" exact component={EmployeeInfoSelect}/>
                    <Route path="/:id" exact component={(props)=> <EmployeeInformation {...props} key={window.location.pathname}/>}/>
                </Switch>
                <Footer/>
            </div>
        </Router>
    )
}
export default Main;