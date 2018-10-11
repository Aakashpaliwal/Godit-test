import React, { Component } from 'react'
import '../Datacard/Datacard';
import {Link} from 'react-router-dom';
export class Electricity extends Component {
    state = {
        estate: "",
        eboard: "",
        ecnumber: "",
        ecity: "",
        eapartment: "",
        eapartmentnumber: ""
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
    <div className = "custom-mobile">
    <div className = "container">
    <div className="custom-datacard-content">
    <div className = "row">
    <div className = "col-lg-12 col-md-12 col-sm-12 col-xs-12">
    <h4 className="custom-header">Pay For Electricity</h4>
  <ul className="nav nav-pills" role="tablist">
    <li className="nav-item">
      <a className="nav-link active" data-toggle="pill" href="#home">Electricity Boards</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" data-toggle="pill" href="#menu1">Apartments</a>
    </li>
  </ul>
<hr></hr>
 
  <div className="tab-content">
    <div id="home" className="container tab-pane active"><br />
    <div className = ""> 
       <div className="form-row">
         <div className="form-group col-md-12">
          
           <input type="text" className="form-control custom-mobile-number-field" placeholder="Enter State" name="estate"
            value = {this.state.estate}
             onChange = {e => this.change(e)}/>
         </div>
         <div className="form-group col-md-12">
          
           <input type="text" className="form-control custom-mobile-number-field" placeholder="Enter Board" name="eboard"
            value = {this.state.eboard}
             onChange = {e => this.change(e)}/>
         </div>
         <div className="form-group col-md-12">
          
           <input type="text" className="form-control custom-mobile-number-field" placeholder="Enter Consumer Number" name="ecnumber"
            value = {this.state.ecnumber}
             onChange = {e => this.change(e)}/>
         </div>
         
         <Link to ="/Checkout"><button className="btn btn-success">Procced</button></Link>
         </div>
    </div>
    </div>
    <div id="menu1" className="container tab-pane fade"><br />
    <div className = ""> 
       <div className="form-row">
         <div className="form-group col-md-12">
         
           <input type="text" className="form-control custom-mobile-number-field" placeholder="Enter City" name="ecity"
            value = {this.state.ecity}
             onChange = {e => this.change(e)}/>
         </div>
         <div className="form-group col-md-12">
         
           <input type="text" className="form-control custom-mobile-number-field" placeholder="Enter Apartment" name="eapartment"
            value = {this.state.eapartment}
             onChange = {e => this.change(e)}/>
         </div>
         <div className="form-group col-md-12">
          
           <input type="text" className="form-control custom-mobile-number-field" placeholder="Enter Apartment Number" name="eapartmentnumber"
            value = {this.state.eapartmentnumber}
             onChange = {e => this.change(e)}/>
         </div>
        
         <Link to ="/Checkout"><button className="btn btn-success">Procced</button></Link>
         </div>
    </div>
    </div>
    
  </div>
  </div>
    </div>
    </div>
    </div>
    </div>



    
            
          
          </React.Fragment>
        )
      }
    }

export default Electricity
