
import React, { Component } from 'react';
import './home.css';

export class Home extends Component {

  state = {
    mails: "",
    pass: ""
  };

  change = e =>
  {
    this.setState({
      [e.target.name]: e.target.value
    });
  };


onSubmit = e =>
{
  e.preventDefault();
  console.log(this.state);
}

  render() {
    return (
      <div>
      <div className = "custom-forms-content">
 <div className = "container">
 <div className = "forms-content">
   <div className = "row">
   <div className = "col-lg-12 col-md-12 col-sm-12 col-xs-12">
   <form>
   <div className = "col-lg-12 col-md-12 col-sm-12 col-xs-12">
     <h1 className="sample-form-header">Form - home </h1>
   </div>

 <div className = "col-lg-12 col-md-12 col-sm-12 col-xs-12"> 
   <div className="form-row">
     <div className="form-group col-md-6">
       <label>Email</label>
       <input type="email" className="form-control" placeholder="Email" name="mails"
        value = {this.state.mails}
         onChange = {e => this.change(e)}/>
     </div>
     <div className="form-group col-md-6">
       <label>Password</label>
       <input type="password" className="form-control" placeholder="Password" name="pass"
        value = {this.state.pass} 
        onChange = { e => this.change(e)}/>
     </div>
   </div>
   <button className="btn btn-primary" onClick={e => this.onSubmit(e)}>Sign in</button>
  


     </div>
   </form>
   </div>
   </div>
   </div>
</div>
</div>


        
      </div>
    )
  }
}

export default Home















