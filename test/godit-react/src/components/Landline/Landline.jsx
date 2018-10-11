import React, { Component } from 'react';
import '../Mobile.css';
import './Landline.css';
import {Link} from 'react-router-dom';
export class Landline extends Component {
    state = {
       loperator: "",
       lacnumber: ""
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
          <React.Fragment>
          <div className = "custom-forms-content">
     <div className = "container">
     <div className = "custom-landline-forms-content">
       <div className = "row">
       <div className = "col-lg-12 col-md-12 col-sm-12 col-xs-12">
       <form>
       <div className = "col-lg-12 col-md-12 col-sm-12 col-xs-12">
         <h4 className="custom-header">Landline </h4>
       </div>
    
     <div className = "col-lg-12 col-md-12 col-sm-12 col-xs-12"> 
       <div className="form-row">
         <div className="form-group col-md-12">
          
           <input type="text" className="form-control custom-mobile-number-field" placeholder="Enter Operator" name="loperator"
            value = {this.state.loperator}
             onChange = {e => this.change(e)}/>
         </div>
         
           
         <div className="form-group col-md-12">
          
           <input type="text" className="form-control custom-mobile-number-field" placeholder="Enter Account Number" name="lacnumber"
            value = {this.state.lacnumber} 
            onChange = { e => this.change(e)}/>
         </div>
       </div>
      <Link to ="/Checkout"> <button className="btn btn-info">Proceed</button></Link>
      
    
    
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
export default Landline
