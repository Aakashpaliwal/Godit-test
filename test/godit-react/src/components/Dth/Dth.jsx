import React, { Component } from 'react'
import './Dth.css';
import '../Mobile.css';
import {Link} from 'react-router-dom';

export class Dth extends Component {
    state = {
        operator: "",
        customerid: "",
        amount: ""
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
     <div className = "custom-dth-forms-content">
       <div className = "row">
       <div className = "col-lg-12 col-md-12 col-sm-12 col-xs-12">
       <form>
       <div className = "col-lg-12 col-md-12 col-sm-12 col-xs-12">
         <h5 className="dth-form-header">Dth</h5>
       </div>
    
     <div className = "col-lg-12 col-md-12 col-sm-12 col-xs-12"> 
       <div className="form-row">
         <div className="form-group col-md-12">
           <input type="text" className="form-control custom-mobile-number-field" placeholder="Enter Operator" name="operator"
            value = {this.state.operator}
             onChange = {e => this.change(e)}/>
         </div>
         
           
         <div className="form-group col-md-12">
           <input type="text" className="form-control custom-mobile-number-field" placeholder="Enter Customer Id" name="customerid"
            value = {this.state.customerid} 
            onChange = { e => this.change(e)}/>
         </div>

         <div className="form-group col-md-12">
           <input type="text" className="form-control custom-mobile-number-field" placeholder="Enter Amount" name="amount"
            value = {this.state.amount} 
            onChange = { e => this.change(e)}/>
         </div>

       </div>
       <Link to ="/Checkout"><button className="btn btn-info">Proceed</button></Link>
      
    
    
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

export default Dth
