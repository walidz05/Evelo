import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>

                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <div className="container">
                            <div className='grid-navbar'>

                                <div className='logo'>
                                        <Link className="navbar-brand" to="/">Exvelo</Link>
                                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                        </button>
                                        <div classNameName="collapse navbar-collapse" id="navbarNav">
                                    </div>
                                </div>


                                <ul className="navbar-nav flex-nav">
                                    <li className="nav-item">
                                    <Link to="/home" className="nav-link active" aria-current="page" >BIKES</Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link className="nav-link" to="">ACCESSOIRIES</Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link className="nav-link" to="">REVIEWS</Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link className="nav-link" to="" aria-disabled="true">
                                        SERVICES
                                    </Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link className="nav-link" to="" aria-disabled="true">
                                        CONTACT
                                    </Link>
                                    </li>
                                </ul>


                                <ul className='navbar-nav"'>
                                    <Link className='cart' to="">
                                        <i class="fa fa-shopping-bag" aria-hidden="true"></i>
                                    </Link>
                                </ul>
                            </div>
                            </div>

                </nav>

            <div className="container">

                <div className="header__section">
                    <h1 className='header__title'>
                        LIVE LIFE TO THE FULLES?
                    </h1>
                    <p className='header__paragraph'>
                        Our electric bikes are specifically designed to 
                        give you <br /> the freedom to enjoy a more active and healthier lifestyle.
                    </p>
                </div>
                <div className='header__barside'>
                  
                         <div className="row header__elem">
                          
                                     <div className="col-6">
                                     <p>SHOP BIKES</p>
                                  </div>
                                        <div className="col-6">
                                            <div className='border__header'>
                                                    <span>

                                                    </span>
                                            </div>
                                        </div>
                        
                       
                   </div>
                
                  
                 
                 
                </div>

                <div className="header__circle">
                    <div className='cirle'>
                        <i class="fas fa-caret-right"></i>
                    </div>

                     <div className="text_rotate">
                        <p>
                            PLAY VIDEO
                        </p>
                </div>

                </div>

               



            </div>

        </div>
    )
}

export default Header
