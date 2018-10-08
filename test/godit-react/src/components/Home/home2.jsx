import React, { Component } from 'react'

export class Home2 extends Component {
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
    <h1 className="sample-form-header">Form1 </h1>
  </div>

<div className = "col-lg-12 col-md-12 col-sm-12 col-xs-12"> 
  <div className="form-row">
    <div className="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" className="form-control" id="inputEmail4" placeholder="Email" name="email" value={this.state.email} onChange={e => this.change(e)} />
    </div>
    <div className="form-group col-md-6">
      <label for="inputPassword4">Password</label>
      <input type="password" className="form-control" id="inputPassword4" placeholder="Password" name="pwd" value={this.state.pwd} onChange={e => this.change(e)} />
    </div>
  </div>
  <div className="form-group">
    <label for="inputAddress">Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" name="address" value={this.state.address} onChange={e => this.change(e)}/>
  </div>
  <div className="form-group">
    <label for="inputAddress2">Address 2</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" name="address2" value={this.state.address2} onChange={e => this.change(e)}/>
  </div>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label for="inputCity">City</label>
      <input type="text" className="form-control" id="inputCity" name="city" value={this.state.city} onChange={e =>this.change(e)}/>
    </div>
    <div className="form-group col-md-4">
      <label for="inputState">State</label>
      <select id="inputState" className="form-control" name="states" value={this.state.states} onChange = {e => this.change(e)}>
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div className="form-group col-md-2">
      <label for="inputZip">Zip</label>
      <input type="text" className="form-control" id="inputZip" name="zip" value={this.state.zip} onChange={e => this.change(e)}/>
    </div>
  </div>
  </div>
  </form>
  </div>
  </div>
  </div>
  </div>
  </div></div>
        
     
    )
  }
}

export default Home2
