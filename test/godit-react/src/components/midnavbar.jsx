import React, { Component } from 'react';
import './midnavbar.css';
import {Link} from 'react-router-dom';

class midnavbar extends Component {
  constructor(props)
	{
		super(props);
		this.state = {
    user_mail : "",
    uer_password : "",
    user_name : "",
    admin_mail : "",
    admin_password : "",
			redirect: false
			  
		}	
		
	}
	change = e => 
	{
	 this.setState({
		 [e.target.name] : e.target.value
	 })
	}
	onLogin = e =>
	{
		e.preventDefault();
		this.setState({
      user_mail : "",
      uer_password : "",
      user_name : "",
      admin_mail : "",
      admin_password : ""
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
				this.props.onRouteChange('home');
				}else{
					console.log(json);
				}
		})
		
  }
  onSignup = e =>
	{
		e.preventDefault();
		this.setState({
		adminname : "",
		passwrd: ""
		})
		console.log(this.props);
		
		fetch('admin/signup', {
			method : "POST",
            headers : {
              "Content-Type" : "application/json; charset=utf-8"
            },
			body : JSON.stringify(this.state)
		  })
		  .then(response => response.json())
		  .then(json => {
			   if(json.success === true){
				this.props.onRouteChange('home');
				}else{
					console.log(json);
				}
		})
		
	}
  render() {
    return (
      <React.Fragment>
      <div>
    <div className="second-navbar">
    <div className="container">
    <div className="row">
    <div className = "col-lg-9 col-md-9 col-sm-12 col-xs-12">
    <h1>Godital seva</h1>
    </div>
    <div className="col-lg-3 col-md-3">
    <div className="custom-upper-social">
    <ul class = "list-inline">
        <li class="list-inline-item">
           {/* <Link to="/Login"> <button className="btn btn-info" type="button">Login</button></Link> */}
           
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Login / Signup
</button>
        </li>
        {/* <li class="list-inline-item">
           <Link to="/Signup"><button className="btn btn-primary">Signup</button></Link>
        </li> */}
    </ul>
    </div>
    </div>
    </div>

{/*login/signup modal*/}
    <div className="row">
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-body custom-modal-body">
      <ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">
    Login</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">
    Signup</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">

     <form className="godit-login-form">
    <div class="form-group">
      <input type="email" class="form-control custom-godit-email" id="admin_mail" placeholder="Enter email" name="admin_mail" value={this.state.admin_mail} onChange={e => this.change(e)} />
    </div>
    <div class="form-group">
      <input type="password" class="form-control custom-godit-email" id="admin_password" placeholder="Enter password" name="admin_password" value={this.state.admin_password} onChange={e => this.change(e)}/>
    </div>
    <button type="submit" class="btn btn-info custom-godit-sbmt-btn form-control" onClick={e => this.onLogin(e)}>Submit</button>
  </form>
  </div>
  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
  <form className="godit-login-form">
    <div class="form-group">
      <input type="text" class="form-control custom-godit-email" id="user_name" placeholder="Enter User Name" name="user_name" value={this.state.user_name} onChange={e => this.change(e)}/>
    </div>
    <div class="form-group">
      <input type="email" class="form-control custom-godit-email" id="user_mail" placeholder="Enter email" name="user_mail" value={this.state.user_mail} onChange={e => this.change(e)}/>
    </div>
    <div class="form-group">
      <input type="password" class="form-control custom-godit-email" id="user_password" placeholder="Enter password" name="user_password" value={this.state.user_password} onChange={e => this.change(e)}/>
    </div>
    <button type="submit" class="btn btn-info custom-godit-sbmt-btn form-control" onClick={e => this.onSignup(e)}>Submit</button>
  </form>
  </div>
  <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
</div>
      </div>
      {/* <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div> */}
    </div>
  </div>
</div>
    </div>

    {/*end login/signup modal*/}
    </div>
    </div>



   
    {/* <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/products">Products</Link>
      </li>
      <li>
        <Link to="/posts/2018/06">Posts</Link>
      </li>
      <li>
        <Link to="/admin">Admin</Link>
      </li>
    </ul> */}
    </div>
      </React.Fragment>
    );
  }
}

export default midnavbar;