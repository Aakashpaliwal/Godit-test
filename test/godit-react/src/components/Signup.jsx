import React, { Component } from 'react'
import './Mobile.css';
export class Signup extends Component {
  constructor(props)
	{
		super(props)
		this.state = {
			firstname : "",
			lastname : "",
			pass: "",
      cpass : "",
      mails: "",
      mobile : ""
		}	
	}
	change = e => 
	{
	 this.setState({
		 [e.target.name] : e.target.value
	 })
	}
	getWebsite = () => {
        fetch("/").then(console.log(this.state));
    };
	onSubmit = e =>
	{
		e.preventDefault();
		console.log(this.state);
		this.setState({
      firstname : "",
			lastname : "",
			pass: "",
      cpass : "",
      mails: "",
      mobile : ""
		})


		fetch('admin/signup', {
			method : "POST",
            headers : {
			  "Content-Type" : "application/json"
			},
			body : JSON.stringify(this.state),
          }).then(console.log(this.state));
	}
    
      render() {
        return (
          <React.Fragment>
          <div className = "custom-forms-content">
     <div className = "container">
     <div className = "forms-content">
       <div className = "row">
       <div className = "col-lg-12 col-md-12 col-sm-12 col-xs-12">
       <form>
       <div className = "col-lg-12 col-md-12 col-sm-12 col-xs-12">
         <h4 className="custom-header">Signup</h4>
       </div>
    
     <div className = "col-lg-12 col-md-12 col-sm-12 col-xs-12"> 
       <div className="form-row">
         <div className="form-group col-md-6">
          
           <input type="text" className="form-control custom-mobile-number-field" placeholder="Enter FirstName" name="firstName"
            value = {this.state.firstName}
             onChange = {e => this.change(e)}/>
         </div>
         <div className="form-group col-md-6">
          
           <input type="text" className="form-control custom-mobile-number-field" placeholder="Enter Last Name" name="lastname"
            value = {this.state.lastname} 
            onChange = { e => this.change(e)}/>
         </div>
         <div className="form-group col-md-6">
           
           <input type="email" className="form-control custom-mobile-number-field" placeholder="Enter Email Id" name="mails"
            value = {this.state.mails} 
            onChange = { e => this.change(e)}/>
         </div>
         <div className="form-group col-md-6">
          
           <input type="number" className="form-control custom-mobile-number-field" placeholder="Enter Mobile Number" name="mobile"
            value = {this.state.mobile} 
            onChange = { e => this.change(e)}/>
         </div>
         <div className="form-group col-md-6">
          
           <input type="password" className="form-control custom-mobile-number-field" placeholder="Enter Password" name="pass"
            value = {this.state.pass} 
            onChange = { e => this.change(e)}/>
         </div>
         <div className="form-group col-md-6">
         
           <input type="password" className="form-control custom-mobile-number-field" placeholder="Enter Password Again" name="cpass"
            value = {this.state.cpass} 
            onChange = { e => this.change(e)}/>
         </div>
       </div>
       <button className="btn btn-info" onClick={e => this.onSubmit(e)}>Sign Up</button>
      
    
    
         </div>
       </form>
       </div>
       </div>
       </div>
    </div>
    
    
    
            
          </div>
          </React.Fragment>
        )
      }
    }

export default Signup
