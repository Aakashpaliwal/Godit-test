import React, { Component } from 'react';
import './Checkout.css';
import {Link} from 'react-router-dom';
class Checkout extends Component {
    render() {
        return (
            <React.Fragment>
            <div>
            <section className="checkout-content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                            <div className="bag-content">
                                <div className="row">
                                    <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                                        <img src={require('../img/wallet-filled-money-tool.png')} className="img-fluid"/>
                                    </div>

                                    <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                                        <p>Phillip SHE 1505BK In ea Earphone (Black)</p>
                                        <p>Sold By : <strong>Atlantis</strong></p>
                                        <br />
                                        <button type="button" className="btn btn-info custom-add-btn">Add MORE</button>
                                        <button type="button" className="btn btn-info custom-coupon-btn">Apply Coupon Code </button>
                                    </div>

                                    <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                                        <p><strong>Rs. 329</strong></p>
                                        <br />
                                        <button type="button" className="btn btn-danger custom-remove-btn">Remove </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                            <h3>Payment Summary</h3>
                            <div className="subtotal">
                                <div className="row">
                                    <div className="Col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                        <p>Subtotal</p>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 text-right">
                                        <p><strong>329</strong></p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="Col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                        <p>Shipping Fee</p>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 text-right">
                                        <p><strong>0</strong></p>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="Col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                        <p><strong>Order Total</strong></p>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 text-right">
                                        <p><strong>329</strong></p>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <button type="button" className="btn btn-danger custom-danger-login form-control">Login To Proccedd</button>
                                        <p className="text-center"><strong>Continue Shopping ></strong></p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
                
            </div>
            </React.Fragment>
        );
    }
}

export default Checkout;