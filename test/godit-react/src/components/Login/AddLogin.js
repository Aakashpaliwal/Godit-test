import React, { Component } from 'react';
import './Login.css';
import {Link, Redirect} from 'react-router-dom';
import {history} from 'history';
import createHistory from 'history/createBrowserHistory'

class AddLogin extends Component {
	constructor(props)
	{
		super(props);
		this.state = {
			adminname : "",
		passwrd: "",
			redirect: false
			  
		}	
		this.handleInputChange = this.handleInputChange.bind(this);
	}
	handleInputChange(e){
		const target = e.target;
		const value = target.value;
		const name = target.name;
	
		this.setState({
		  [name]: value
		});
	}
	change = e => 
	{
	 this.setState({
		 [e.target.name] : e.target.value
	 })
	}
	onSubmit(e)
	{
		e.preventDefault();
		this.setState({
		adminname : "",
		passwrd: ""
		})
		console.log(this.props);
		
		fetch('admin/login', {
			method : "POST",
            headers : {
              "Content-Type" : "application/json; charset=utf-8"
            },
			body : JSON.stringify(this.state)
		  })
		  .then(response => response.json())
		  .then(json => {
			   if(json.success === true){
				this.props.history.push('/');
				}else{
					console.log(json);
				}
			})
		// .then(response =>  {
		// 	this.props.history.push('/Checkout');
		//   }).catch(err => console.log(err));
		
		
	}
    render() {
		const onRouteChange = this.props.onRouteChange;
        return (
            <div>
               <div class="my-login-page">
	<section class="h-100">
		<div class="container h-100">
			<div class="row justify-content-md-center h-100">
				<div class="card-wrapper">
					<div class="card fat custom-card-margin">
						<div class="card-body">
							<h4 class="card-title">Login</h4>
							<form method="POST" onSubmit = {this.onSubmit.bind(this)}>
							 
								<div class="form-group">
									<label for="email">E-Mail Address</label>

									<input id="email" type="text" class="form-control" name="adminname" value={this.state.adminname} onChange={this.handleInputChange} required autofocus />
								</div>

								<div class="form-group">
									<label for="password">Password
										<a href="forgot.html" class="float-right">
											Forgot Password?
										</a>
									</label>
									<input id="password" type="password" class="form-control" name="password" value={this.state.password} onChange={this.handleInputChange} required data-eye />
								</div>

								<div class="form-group">
									<label>
										<input type="checkbox" name="user_remember" value={this.state.user_remember} onChange={this.handleInputChange}/> Remember Me
									</label>
								</div>

								<div class="form-group no-margin">
									<button class="btn btn-primary btn-block" type="submit">
										Login
									</button>
								</div>
								<div class="margin-top20 text-center">
									Don't have an account? <p onClick={() => onRouteChange('register')}>Register</p>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
    </div>
    
                
            </div>
        );
    }
}

export default AddLogin;