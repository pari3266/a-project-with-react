import React, { Component } from 'react';
import './LocalStorage.css';
import Header from './Header';
import HeaderSignIn from './HeaderSignIn';

export default class AddDocumentComponent extends Component {
    documentData;
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.state = {
            firstName: '',
            lastName: '',
            age: ''
        }
    }
handleChange= (e)=> {
    e.preventDefault();
    this.setState({[e.target.name]:e.target.value});
}
handleFormSubmit(e) {
    e.preventDefault();
    localStorage.setItem('document',JSON.stringify(this.state));
}
componentDidMount() {
    this.documentData = JSON.parse(localStorage.getItem('document'));
 
    if (localStorage.getItem('document')) {
        this.setState({
           firstName: this.documentData.firstName,
           lastName: this.documentData.lastName,
           age: this.documentData.age
    })
    
    } else {
        this.setState({
            firstName: '',
            lastName: '',
            age: ''
        })
    
}
}
render() {
    if(localStorage.getItem('document')){
        return <Header / > ;
    }
    if(!(localStorage.getItem('document'))){
    return (
        <div>
            <HeaderSignIn / > 
            <form onSubmit={this.handleFormSubmit} autoComplete="off">
                <div>
                    <label>firstName
        
                    </label>
                    <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
                </div>
                <div>
                    <label>lastName</label>
                    <input type="text" name="lastName"  value={this.state.lastName} onChange={this.handleChange} />
                </div>
                <div>
                    <label>age</label>
                    <input type="number" name="age" value={this.state.age} onChange={this.handleChange} />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Submit</button>
            </form>
     </div>
    );}
}}

