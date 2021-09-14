import React from "react";
//import { Link, Redirect } from "react-router-dom";

class TestingForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id: window.location.href.substring(window.location.href.lastIndexOf('/') + 1),
            Employee: '',
            Hours: '',
            PayPeriod: '',
            redirect: null,
            resultEmployee: {},
            resultPayPeriod: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name
        this.setState({[name]: value});
    }
    handleSubmit(event){
        alert("Payment has been updated")
        const data = {
            employee: this.state.Employee,
            payperiod: this.state.PayPeriod,
            hours: this.state.Hours
        };
        const url = `https://project-7d68.restdb.io/rest/testing`;

        fetch(url, {method: 'POST', headers: {'Content-Type': 'application/json','cache-control': 'no-cache','x-apikey': '612aec7343cedb6d1f97ea5f'}, body: JSON.stringify(data)})
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.log('Error:', error);
        });

        event.preventDefault();
    }
    componentDidMount(){
        const url = `https://project-7d68.restdb.io/rest/testing`;
        fetch(url, {method: 'GET', headers: {'Content-Type': 'application/json','cache-control': 'no-cache','x-apikey': '612aec7343cedb6d1f97ea5f'}})
        .then(result => result.json())
        .then(
            (result) => {
                this.setState({
                    resultEmployee: result,
                    resultPayPeriod: result.payperiod
                });
                console.log(result);
            },
            
            (error) => {
                console.log('Error:',error);
            }
        )
    }
    render(){
        return(
            <div>

            </div>
        )
    }
};

export default TestingForm;