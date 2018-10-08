import React from "react";
import { Link } from "react-router-dom";
import './meganav.css';

const MegaMenu = () => {
  return (

    <div>
    <div className="third-navbar">
    <div className="container-fluid">
    <div className="row">
    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <nav className = "navbar navbar-expand-sm navbar-light">
            <button className = "navbar-toggler" type="button" data-toggle = "collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle Navigation">
                <span className = "navbar-toggler-icon"></span>
            </button>
    <div className="custom-mega-menu" id="navbarSupportedContent">
    <ul class = "list-inline">
    <li class="list-inline-item">
      <Link to ="/Mobile">    <i class="fa fa-mobile fa-2x custom-icon-margin" aria-hidden="true"></i>
                    <br /> 
                 Mobile </Link>
        </li>
        <li class="list-inline-item">
       <Link to ="/Dth"> <i class="fa fa-cc-visa fa-2x" aria-hidden="true"></i>
        <br />
        DTH </Link>
        </li>
        <li className="list-inline-item">
       <Link to ="/Datacard"> <i class="fa fa-credit-card fa-2x custom-icon-margin" aria-hidden="true"></i>
            <br />
           DataCard </Link>
        </li>
        <li className="list-inline-item">
       <Link to ="/Electricity"> <i class="fa fa-bolt fa-2x custom-icon-margin2" aria-hidden="true"></i>
                <br />
           Electricity</Link>
        </li>
        <li className="list-inline-item">
       <Link to ="/Landline"> <i class="fa fa-phone fa-2x custom-icon-margin" aria-hidden="true"></i>
                <br />
           LandLine 
           </Link>
        </li>
       <li className="list-inline-item">
       <Link to ="/Broadband"> <i class="fa fa-tablet fa-2x custom-icon-margin2" aria-hidden="true"></i>
                <br />
            BroadBand</Link>
        </li>
        <li className="list-inline-item">
        <Link to="Gas"><i class="fa fa-free-code-camp fa-2x" aria-hidden="true"></i>
            <br />
            Gas </Link>
        </li>
        <li className="list-inline-item">
        <Link to = "Water"><i class="fa fa-tint fa-2x custom-icon-margin4" aria-hidden="true"></i>
                <br />
            Water</Link>
        </li>
        <li className="list-inline-item">
       <Link to ="Metro"> <i class="fa fa-id-card-o fa-2x custom-icon-margin3" aria-hidden="true"></i>
                    <br />
            Metro</Link>
        </li>
    </ul>
    </div>
   </nav>
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

export default MegaMenu;