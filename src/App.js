import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Login from './Components/logincomp.js';
import Registration from './Components/regcomp.js';


function App() {
  return (<Router>
    <div className="App">
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className = "container">

         <Link className="navbar-brand" to={"/sign-in"}>Authentication Page</Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
               <ul className="navbar-nav ml-auto">
                 <li className="nav-item">
                     <Link className="nav-link" to={"/logincomp.js"}>Login</Link>
                </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/regcomp.js"}>Registration</Link>
                 </li>
               </ul>
           </div>
      </div>
   </nav>

   <div className="auth-wrapper">
        <div className="auth-inner">
        <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/logincomp.js" component={Login} />
            <Route path="/regcomp.js" component={Registration} />
          </Switch>

        </div>

    </div>

  </div>
  </Router>

  );
}

export default App;
