import React, { Component } from 'react'
import './Footer.css';
import { Link } from 'react-router-dom';
export class Footer extends Component {
  render() {
    return (
     <React.Fragment>
       <div className="footer">
      <div className = "container">
        <div className = "row">
          <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
          <h5>MY ACCOUNT</h5>
                <ul>
                    <Link to ="/Client"><li>My Account</li></Link>
                    <li>Addressess</li>
                    <li>discount</li>
                    <li>Order History</li>
                </ul>
          </div>

          <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
        <h5>services</h5>
        <ul>
            <li>Recharge</li>
            <li>Insurance</li>
            <li>Banking</li>
        </ul>
        </div>

        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
        <h5>information</h5>
        <ul>
            <li><Link to="/policy">Privacy Policy</Link></li>
            <li><Link to="/refund">Refund Policy</Link></li>
            <li><Link to="/terms_condition">Terms & Condition</Link></li>
        </ul>
        </div>

                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
        <h5>contact us</h5>
        <p>Chankya e-commerce Ltd. <br /> Pathan Road,<br /> Aurangabad,<br /> Maharashtra</p>
        </div>

        </div>
      
      </div>
       
       
       
       
       
       </div>
     </React.Fragment>
    )
  }
}

export default Footer
