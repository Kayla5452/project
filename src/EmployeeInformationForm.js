import React from "react";

class EmployeeForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            Name: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({Name: event.target.value});
    }
    handleSubmit(event){
        alert("A name was submitted: "+ this.state.Name);

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
                Name: this.state.Name
            },
            json: true
        };

        request(options, function (error, response, body ){
            if (error) throw new Error(error);
            console.log(body);
        });


        event.preventDefault();
    }

    render(){
        return(
            <div className="card">
                <form onSubmit={this.handleSubmit}>
                    <label>Name</label>
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}
export default EmployeeForm;