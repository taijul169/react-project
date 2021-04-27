import React,{Component} from 'react';
import Logo from '../images/logo.png'
import DehazeIcon from '@material-ui/icons/Dehaze';

class Header extends Component{
    state = {clicked:false}
     eventHandle =()=>{
        this.setState({clicked:!this.state.clicked})
    }

    render(){
        return ( <>
         
            <header className="header-area">
              <div className="container">
                  <div className="row">
                      <div className="col-md-4 col-sm-4 col-12">
                          <div className="header-left d-flex">
                          <a href="index.html"><img src={Logo} alt="logo.png"/></a>
                          <button className="collapseBTN" onClick={this.eventHandle}><DehazeIcon/></button>
                      </div>
                      </div>
                      <div className="col-md-8 col-sm-8 col-12">
                          <div className="main-menu">
                              <ul className={this.state.clicked ? 'nav-menu-active' : 'nav-menu'}>
                                  <li><a href="#">Home</a></li>
                                  <li><a href="#">About Us</a></li>
                                  <li><a href="#">App Features</a></li>
                                  <li><a href="#" className="contactus">Contact Us</a></li>
                              </ul>
                              
                      </div>
                      </div>
                  </div>
              </div>
            </header>
          </>
      )

    }
    
}

export default Header;
