import React, { Component } from 'react';

class Metro extends Component {
    state = {
        metro_amount : ""
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
          <h5 className="dth-form-header">Pay Your Water Bill</h5>
        </div>
     
      <div className = "col-lg-12 col-md-12 col-sm-12 col-xs-12"> 
        <div className="form-row">
          <div className="form-group col-md-12">
            <input type="text" className="form-control custom-mobile-number-field" placeholder="Enter Metro" name="metro_amount"
             value = {this.state.metro_amount}
              onChange = {e => this.change(e)}/>
          </div>
        </div>
        <button className="btn btn-info" onClick={e => this.onSubmit(e)}>Proceed</button>
       
     
     
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
export default Metro;