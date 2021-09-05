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
import PayPeriodForm from "./PaymentCycleForm";
import PayPeriodSelect from "./PayPeriodSelect";
import PayPeriodInfo from "./PayPeriodInfo";
import PaymentSelect from "./PaymentSelect";
import PaymentInfo from "./PaymentInfo";

//Main function to control which is shown and what is not
function Main(){
    return(
        <Router>
            <div>
                <Header/>
                <Switch>
                    <Route path="/" exact component={Landing}/>
                    <Route path="/Employee/New" exact component={Employee}/>
                    <Route path="/Employee/Information" exact component={EmployeeInfoSelect}/>
                    <Route path="/Employee/Information/:id" exact component={(props)=> <EmployeeInformation {...props} key={window.location.pathname}/>}/>
                    <Route path="/Payment/PaymentForm" exact component={Hours}/>
                    <Route path="/Payment/Information" exact component={PaymentSelect}/>
                    <Route path="/Payment/Information/:id" exact component={(props)=> <PaymentInfo {...props} key={window.location.pathname}/>}/>
                    <Route path="/Payment/PayPeriodForm" exact component={PayPeriodForm}/>
                    <Route path="/Payment/PayPeriod" exact component={PayPeriodSelect}/>
                    <Route path="/Payment/PayPeriod/:id" exact component={(props)=> <PayPeriodInfo {...props} key={window.location.pathname}/>}/>
                </Switch>
                <Footer/>
            </div>
        </Router>
    )
}
export default Main;