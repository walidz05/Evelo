import React from 'react'

const Features = () => {
    return (

        <div className='features'>

            <div className="features__01">
                <h1>03</h1>
            </div>

            <div className="container">

                <div className="row">
                    <div className="col-12">
                        <h1 className='features__heading'>BIKE <br /> FEATURES</h1>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <div className='img__features'>
                            <img src="/upload/ImageNameHere.png" alt="" />
                        </div>
                    </div>   
                </div>

                <div className="features__motion">
                    <div className='features__box'>
                        <div className="features__element">
                            <h4 className='TM'>MOTIONDRIVE <span></span> SYSTEM</h4>
                            <p>EVELO MotionDrive is an exclusiveb electric bike drivetrain technology bringing together the efficiency of a mid-drive motor with the convenience of an internal hub transmission.</p>
                        </div>
                       <div className="row features_last__btn">
                           <div className="col-5">
                                <ul className='list-group list-group-horizontal'>
                                    <li className='list-group-item active'>1</li>
                                    <li className='list-group-item'>2</li>
                                    <li className='list-group-item'>3</li>
                                </ul>
                           </div>
                           <div className="col-7">
                                <button className='btn btn-danger'>
                                    NEXT 
                                    <i className="fas fa-arrow-right"></i>
                                </button>
                           </div>
                       </div>
                    </div>
                </div>



                <div className="second_section_features">
            <div className="row d-flex justify-content-around">  
                    <div className="col-lg-3">
                        <div className="box_features">
                                <i class="fas fa-shipping-fast"></i>
                        <h4>FREE SHIPPING</h4>
                        <p>Free FedEx shipping anywhere in the continental U.S Most in stock orders arrive in 10 buisiness days or less</p>
                        </div>
                        
                    </div>
                    <div className="col-lg-3">
                        <div className="box_features">

                        <i class="fas fa-calendar-alt"></i>
                        <h4>10 DAY AT-HOME TRIAL</h4>
                        <p>
                            if you don't absolutely love your bike.
                            we 'll isssue a 100% retund or exchange it for 
                            another EVELLO product. 
                        </p>
                        </div>

                    </div>
                    <div className="col-lg-3">
                        <div className="box_features">

                        <i class="fas fa-calendar-alt"></i>
                        <h4>4-YEARS-MILE WARRANTY</h4>
                        <p>
                            we stand by the quality of our products with a 4-year 20.000 mile warranty that protects your investment.
                        </p>
                        </div>

                    </div>
                </div>
                </div>
               

            </div>
        </div>
    )
}

export default Features
