import React from "react";

class EmployeeForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            Name: '',
            LName: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({[name]: value});
    }
    handleSubmit(event){
        alert("Submitted");
        var request = require("request");

        var options = { 
            method: 'POST',
            url: 'https://project-7d68.restdb.io/rest/testing',
            headers: {
                'cache-control': 'no-cache',
                'x-apikey': '612aec7343cedb6d1f97ea5f',
                'content-type' : 'application/json'
            },
            body: {
                Name: this.state.Name,
                LName: this.state.LName
            },
            json: true
        };

        request(options, function (error, response, body ){
            if (error) throw new Error(error);
            console.log(body);
        });

        
        document.getElementByID("employee").reset();
        event.preventDefault();
    }

    render(){
        return(
            <div className="card">
                <form id="employee" onSubmit={this.handleSubmit}>
                    <label>Name</label>
                    <input name="Name" type="text" value={this.state.Name} onChange={this.handleChange}/>
                    <label>Last Name</label>
                    <input name="LName" type="text" value={this.state.LName} onChange={this.handleChange}/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}
export default EmployeeForm;