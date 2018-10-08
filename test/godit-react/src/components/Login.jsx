import React, { Component } from 'react'
import './Mobile.css';
export class Login extends Component {
  constructor(props)
	{
		super(props);
		this.state = {
			adminname : "",
		passwrd: "",
			redirect: false
			  
		}	
		
	}
	change = e => 
	{
	 this.setState({
		 [e.target.name] : e.target.value
	 })
	}
	onSubmit = e =>
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
				this.props.onRouteChange('home');
				}else{
					console.log(json);
				}
		})
		
	}
    
      render() {
        const onRouteChange = this.props.onRouteChange;
        return (
          <React.Fragment>
          <div className = "custom-mobile">
     <div className = "container">
     <div className = "custom-mobile-content">
       <div className = "row">
       <div className = "col-lg-12 col-md-12 col-sm-12 col-xs-12">
       <form>
       <div className = "col-lg-12 col-md-12 col-sm-12 col-xs-12">
         <h4 className="custom-header">Login </h4>
       </div>
    
     <div className = "col-lg-12 col-md-12 col-sm-12 col-xs-12"> 
       <div className="form-row">
         <div className="form-group col-md-12">
           <input type="text" className="form-control custom-mobile-number-field" placeholder="Enter User Name" name="adminname"
            value = {this.state.adminname}
             onChange = {e => this.change(e)}/>
         </div>
         
           
         <div className="form-group col-md-12">
           <input type="password" className="form-control custom-mobile-number-field" placeholder="Enter Password" name="passwrd"
            value = {this.state.passwrd} 
            onChange = { e => this.change(e)}/>
         </div>
       </div>
       <button className="btn btn-info" onClick={e => this.onSubmit(e)}>Log In</button>
      
    
    
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

export default Login