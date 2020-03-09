import React from 'react';
import Logo from './avalith.png'
import './Navbar.css'

class Navbar extends React.Component{
    constructor(){
        super()
    }


render() {
    return(
<nav className="navbar navbar-expand-lg navbar-light bg-light" >
  <a className="navbar-brand" href="#"> 
  <img src={Logo} style={{height:70, width: 70}} />
</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav"  >
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#"  >Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Cards</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">About Me</a>
      </li>
    </ul>
  </div>
</nav>
    );
}
}

export default Navbar