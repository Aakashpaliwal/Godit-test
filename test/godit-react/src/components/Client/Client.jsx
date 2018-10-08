import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Client.css';

class Client extends Component {
    showDiv = e  => {
        document.getElementById('welcomeDiv').style.display = "block";
    }
    render() {
        return (
            <div>
            <section className="custom-client-data">
            <div className="container custom-client-form">
            <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 custom-upper-sec">
                       <div className="custom-wallet">
                       <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">

                       <img src = {require('../img/wallet-filled-money-tool.png')} className="img-fluid" />
                       </div>
                       <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                           <p className="balance"><strong>Rs. 41.53</strong></p>
                           <p>Your Wallet Balance</p> 
                           </div>
                           </div>
                       </div>
                        </div>

            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                <div className="wallet-form-here">
                <form>
  <div class="form-row">
    <div class="form-group col-md-8">
      <input type="text" class="form-control custom-amount-input" id="inputEmail4" placeholder="Enter Amount to Add Money to Wallet" name="amount" />
    <small><strong>Have a Promo code?</strong></small>
    </div>
    <div class="form-group col-md-4">
    <button type="submit" class="btn btn-primary form-control custom-money-btn">Add Money to Wallet</button>
    </div>
  </div>
</form>
                </div>
            </div>            
            </div>
            </div>
            </section>

    <section className="manual-tab-content">
       <div className="container manual-content-below2">
          <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div className="sidebar-tabs">
          <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" id="pills-personal-tab" data-toggle="pill" href="#pills-personal" role="tab" aria-controls="pills-home" aria-selected="true">Personal Info</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="pills-address-tab" data-toggle="pill" href="#pills-address" role="tab" aria-controls="pills-profile" aria-selected="false">Address</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="pills-change-tab" data-toggle="pill" href="#pills-change" role="tab" aria-controls="pills-contact" aria-selected="false">Change Password</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="pills-merchants-tab" data-toggle="pill" href="#pills-merchants" role="tab" aria-controls="pills-contact" aria-selected="false">Merchants Authorized By You</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="pills-favourite-tab" data-toggle="pill" href="#pills-favourite" role="tab" aria-controls="pills-contact" aria-selected="false">Favourites</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="pills-automatic-tab" data-toggle="pill" href="#pills-automatic" role="tab" aria-controls="pills-contact" aria-selected="false">Automatic Payment</a>
  </li>
</ul>
<hr />
</div>
<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-personal" role="tabpanel" aria-labelledby="pills-personal-tab">
  <div className="custom-tab-content-here">                           
           <div className="row">
               <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12 custom-field-here">
                   <p>Name</p>
                   </div>
                   <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12 custom-read-data">
                    <p className="read-data-here"><strong>Aakash Paliwal</strong><span className="pull-right edit-profile">Edit Profile</span></p>            
                   </div>     

                   <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12 custom-field-here">
                   <p>Email</p>
                   </div>
                   <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12 custom-read-data">
                    <p className="read-data-here"><strong>aakashpaliwal00@gmail.com</strong></p>            
                   </div>     

                   <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12 custom-field-here">
                   <p>Mobile Number</p>
                   </div>
                   <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12 custom-read-data">
                    <p className="read-data-here"><strong>8764049523</strong></p>            
                   </div>     

                   <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12 custom-field-here">
                   <p>Date Of Birth</p>
                   </div>
                   <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12 custom-read-data">
                    <p className="read-data-here"><strong>**/**/*95</strong></p>            
                   </div>

                    <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12 custom-field-here">
                   <p>Gender</p>
                   </div>
                   <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12 custom-read-data">
                    <p className="read-data-here"><strong>Male</strong></p>            
                   </div> 

                    <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12 custom-field-here">
                   <p>KYC Status</p>
                   </div>
                   <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12 custom-read-data">
                    <p className="read-data-here"><strong>Complete</strong></p>            
                   </div>             
               </div>                     
           </div> 

  </div>
  <div class="tab-pane fade" id="pills-address" role="tabpanel" aria-labelledby="pills-address-tab">
  <div className="custom-tab-content-here">                           
           <div className="row">
               <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 custom-field-here">
                   {/* <p>Name</p> */}
                  
<button type="button" className="btn btn-primary custom-show-btn" name="answer" value="Show Div" onClick={e => this.showDiv(e)}>
<i className="fa fa-plus"></i>
<p>Add New Address</p>
</button>
 <div id="welcomeDiv"  class="answer_list" >
     <form className="custom-form-address">
     <p className="header"><strong>Add New Address </strong></p>
  <div class="form-row">
    <div class="form-group col-md-6">
      <input type="text" class="form-control custom-amount-input" id="inputEmail4" placeholder="Pin Code" />
    </div> 
    <div class="form-group col-md-6">
      <input type="text" class="form-control custom-amount-input" id="inputPassword4" placeholder="Full Name"/>
    </div>
  </div>
  <div class="form-group">
    <input type="text" class="form-control custom-amount-input" id="inputAddress" placeholder="Address Line 1"/>
  </div>
  <div class="form-group">
    <input type="text" class="form-control custom-amount-input" id="inputAddress2" placeholder="Address Line 2"/>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <input type="text" class="form-control custom-amount-input" id="inputCity" placeholder="city" />
    </div>
    <div class="form-group col-md-6">
      <input type="text" class="form-control custom-amount-input" id="inputCity" placeholder="State" />
    </div>
    <div class="form-group col-md-12">
      <input type="number" class="form-control custom-amount-input" id="inputZip" placeholder="Mobile Number"/>
    </div>
  </div>
  <button type="submit" class="btn btn-primary form-control custom-money-btn">Save Address</button>
</form>
 </div>
                   </div>          
               </div>                     
           </div> 

  </div>
  <div class="tab-pane fade" id="pills-change" role="tabpanel" aria-labelledby="pills-change-tab">
  <div className="custom-tab-content-here">
        <div className="row">
           <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
           <form className="custom-form-address2">
     <p><strong>Change Password </strong></p>
  <div class="form-row">
    <div class="form-group col-md-12">
      <input type="password" class="form-control custom-amount-input" id="inputEmail4" placeholder="Enter Old Password" />
    </div> 
    <div class="form-group col-md-12">
      <input type="password" class="form-control custom-amount-input" id="inputPassword4" placeholder="Enter New Password"/>
    </div>
    <div class="form-group col-md-12">
      <input type="password" class="form-control custom-amount-input" id="inputPassword4" placeholder="Re - Enter New Password"/>
    </div>
  </div>
  <button type="submit" class="btn btn-primary form-control custom-money-btn">Save Password</button>
</form>                 
           </div>                     
        </div>                        
      </div>

  </div>

  <div class="tab-pane fade" id="pills-merchants" role="tabpanel" aria-labelledby="pills-merchants-tab">
  <div className="custom-tab-content-here">
        <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <p><strong>List of Merchants Authorized By You</strong></p>
        </div>
           <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div className="zomato-para">
            <p>Uber</p>
            </div>
           </div>   

             <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div className="zomato-para">
            <p>Zomato</p>
            </div>
           </div>                     
        </div>                        
      </div>

  </div>

  <div class="tab-pane fade" id="pills-favourite" role="tabpanel" aria-labelledby="pills-favourite-tab">
  <div className="custom-tab-content-here">
        <div className="row">
           <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <p>You have no favourite content yet.</p>                 
           </div>                     
        </div>                        
      </div>

  </div>
  <div class="tab-pane fade" id="pills-automatic" role="tabpanel" aria-labelledby="pills-automatic-tab">
  <div className="custom-tab-content-here">
        <div className="row">
           <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
           <p>You have no automatic content yet.</p>                 
           </div>                     
        </div>                        
      </div>

  </div>
</div>
          </div> 
          </div> 
       </div>     

    </section>        
                
            </div>
        );
    }
}

export default Client;