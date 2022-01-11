import React from 'react'

const Footer = () => {
    return (


        <div className='footer'>
            <div className="container">
                <div className="row alls">
                    
                
                    <div className="col-5 col">
                         <div className="group">

                            <div className="phone">
                                <span>Phone</span>
                        <p className=''>
                            +1 877.991.7272
                        </p>
                            </div>
                      
                        <div className="email">
                            <span>EMAIL</span>
                        <p className=''>
                            INFO@ELEVIO
                        </p>
                        </div>

                            <div className="list">
                                   <span>FOLLOW US</span>
                        
                        <ul className='list_social'>
                            <li>
                                <i className="fab fa-twitter"></i>
                            </li>

                            <li>
                                <i className="fab fa-youtube"></i>
                            </li>

                           <li>
                               <i class="fab fa-facebook-square"></i>
                           </li>

                           <li>
                               <i class="fab fa-instagram"></i>
                           </li>
                        </ul>
                            </div>


                            <div className="logo__evelo">
                                <div className="row">
                                    <div className="col-3">
                                           <span className='logo'>EVELO </span>
                                    </div>
                                    <div className="col-9">
                                    <span className='copyright'>@copyright 2019 Evelo. All <br /> Rights Reserved</span>
                                    </div>
                                </div>
                             
                              
                            </div>

                       </div>
                    </div>

                    <div className="col-7">
                        <div className='join'>
                            <div className="row">
                                <div className="col-6">
                                <h3>JOIN OUR <br /> NEWSLETTER</h3>
                       
                                </div>
                                <div className="col-6">
                                         <input className='form-control' placeholder='Your Email Address' type="text" name="" id="" />
                                </div>
                            </div>
                        </div>
                         <div className="link">
                        <div className="row">
                           
                         <div className="col-6">
                                <p>about</p>
                                <ul>
                                    <li>Our Story</li>
                                    <li>Blog</li>
                                    <li>Contact Us</li>
                                    <li>Privacy Policy</li>
                                </ul>
                            </div>
                            <div className="col-6 last">
                                  <p>COMMUNITY</p>
                                <ul>
                                    <li>Become a Dealer</li>
                                    <li>Referal Program</li>
                                    <li>Buyer's Guide</li>
                                    <li>Electric Bike Tour</li>
                                </ul>
                                
                            </div>

                            <div className="col-6">

                                  <p>SHOP</p>
                                <ul>
                                    <li>Our Story</li>
                                    <li>Blog</li>
                                    <li>Contact Us</li>
                                    <li>Privacy Policy</li>
                                </ul>
                                
                            </div>

                            <div className="col-6 last">

                                  <p>SUPPORT</p>
                                <ul>
                                    <li>Our Story</li>
                                    <li>Blog</li>
                                    <li>Contact Us</li>
                                    <li>Privacy Policy</li>
                                </ul>
                                
                            </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
