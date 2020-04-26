import React, { Component } from "react";
//import { DropdownMenu, City } from 'react-bootstrap-dropdown-menu'

export default class Registration  extends Component {
    render() {
        return (

       /*     constructor(props) {
                super(props);
                this.state = {
                  Name: null,
                  email: null,
                  Mobile : null,
                  Zipcode : null,
                  errors: {
                    fullName: '',
                    email: '',
                    Mobile: '',
                    Zipcode: '',
                  }
                };
              
            }
              handleChange = (event) => {
                event.preventDefault();
                const { name, value } = event.target;
                let errors = this.state.errors;
              
                switch (name) {
                  case 'fullName': 
                    errors.fullName = 
                      value.length < 5
                        ? 'Full Name must be 5 characters long!'
                        : '';
                    break;
                  case 'email': 
                    errors.email = 
                      validEmailRegex.test(value)
                        ? ''
                        : 'Email is not valid!';
                    break;
                  case 'Mobile': 
                    errors.Mobile = 
                      value.length < 10
                        ? 'Mobile must be 8 characters long!'
                        : '';
                    break;
                  default:
                    break;

                    case 'Zipcode': 
                    errors.Zipcode = 
                      value.length < 6
                        ? 'Zipcode must be 8 characters long!'
                        : '';
                    break;
                  default:
                    break;
                }
              
                this.setState({errors, [name]: value}, ()=> {
                    console.log(errors)
                })

            }*/

            <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>


                <div className="form-group">
                    <label>Mobile No.</label>
                    <input type="number" className="form-control" placeholder="Enter Mobile No." />
                </div>

                <div className="form-group">
                    <label>Date of Birth.</label>
                    <input type="date" className="form-control" placeholder="Enter DOB." />
                </div>

                <div className="form-group">
                    <label>City</label>
                    <input type="text" className="form-control" placeholder="Enter your city." />
                </div>

                <div className="form-group">
                    <label>Zipcode</label>
                    <input type="number" className="form-control" placeholder="Enter your zipcode." />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="create your password." />
                </div>
                
                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="logincomp.js">sign in?</a>
                </p>
                </form>
        );
    }
}