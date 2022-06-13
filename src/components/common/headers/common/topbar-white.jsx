import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { withTranslate } from 'react-redux-multilingual'
import { AuthContext } from "./auth-context";
import AuthProvider from './auth-provider';
class TopBarWhite extends Component {

    render() {
        const {translate} = this.props;
        const auth = this.context;
        return (
            <div>
                {/* <button
          type="primary"
          className="btn btn--ghost"
          block
          onClick={() => auth.onSignIn()}
        >lopgin</button> */}

		
                <div className="top-header white-bg border-bottom-grey">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="header-contact">
                                    <ul>
                                        <li>Welcome to our Rezingo</li>
                                        <li><i className="fa fa-phone" aria-hidden="true"></i>call_us:  123 - 456 - 7890</li>
                                      
                                    </ul>
                                </div>
                            </div>
                            
                            <div className="col-lg-6 text-right">
                                <ul className="header-dropdown">
                                    {/* <li className="mobile-wishlist compare-mobile"><Link to={`${process.env.PUBLIC_URL}/compare`}><i className="fa fa-random" aria-hidden="true"></i>compare</Link></li> */}
                                    <li className="mobile-wishlist"><Link to={`${process.env.PUBLIC_URL}/wishlist`}><i className="fa fa-heart" aria-hidden="true"></i>wishlist</Link></li>
                                    <li className="onhover-dropdown mobile-account">{
			auth.isAuthenticated ? <span className="px-2">Hi {auth.account.name} </span> : <p><i className="fa fa-user" aria-hidden="true"></i> UserAccont</p>
		}
                                        
                                        
                                        <ul className="onhover-show-div">
                                    
                                        {auth.isAuthenticated  ?
    <li>
        
        <p className="px-3" onClick={() => auth.onSignOut()}><i className="fa fa-sign-out text-danger" aria-hidden="true"></i>Logout</p>
    </li>:
    <li>
       <p className="px-3" onClick={() => auth.onSignIn()}><i className="fa fa-sign-in text-success" aria-hidden="true" ></i>Login</p>
    </li>}
                                        </ul>
                                    </li>
                                </ul>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
TopBarWhite.contextType = AuthContext;

export default AuthProvider(TopBarWhite);