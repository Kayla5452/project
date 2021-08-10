import React from "react";
//make sure to install react router dom using "npm i react-router-dom"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
//put all links to different components below here
import Landing from "./Landing";
import Header from "./Header";
import Footer from "./Footer";

//Main function to control which is shown and what is not
function Main(){
    return(
        <Router>
            <div>
                <Header/>
                <Switch>
                    <Route path="/" exact component={Landing}/>
                </Switch>
                <Footer/>
            </div>
        </Router>
    )
}
export default Main;