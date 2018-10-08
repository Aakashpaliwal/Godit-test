import React from "react";
// import { Link } from "react-router-dom";

const NavBar = () => {
  return (

    <div>
    <div className="upper-navbar">
    <div className="container">
    <div className="row">
    <div className = "col-lg-9 col-md-9 col-sm-12 col-xs-12">
    <p><i class="fa fa-envelope-o" aria-hidden="true"></i>&nbsp;&nbsp;swapnil@fsjars.com</p>
    </div>
    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
    <div className="custom-upper-social">
    <ul class = "list-inline">
    <li class="list-inline-item"><i class="fa fa-facebook" aria-hidden="true"></i></li>
    <li class="list-inline-item"><i class="fa fa-twitter" aria-hidden="true"></i></li>
    <li class="list-inline-item"><i class="fa fa-linkedin" aria-hidden="true"></i></li>
    </ul>
    </div>
    </div>
    </div>
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
  );
};

export default NavBar;
