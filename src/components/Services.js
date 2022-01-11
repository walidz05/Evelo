import React from 'react';

const Services = () => {
    return (

        <div className='services'>
                <div className="container">
                     <div className="heading__services">
                                <div className="row">
                                    <div className="col-6">
                                        <div className="heading_left">
                                                 <h1>01</h1>
                                        </div>
                                   
                                    </div>
                                    <div className="col-6">
                                        <div className="heading__right">

                                            <h1>WHAT ARE YOU PLANING TO <br />
                                                USE AN ELECTRIC BIKE FOR?
                                             </h1>



                                        </div>
                                    </div>
                                </div>

                                <div className="services_element">
                                <div className="row text-center">
                                    <div className="col-3">
                                        <div className="box_service">
                                            <i class="fas fa-biking"></i>
                                            <p>RECREATION</p>
                                        </div>
                                    </div>
                                     <div className="col-3">
                                        <div className="box_service active_box">

                                         <i class="fas fa-briefcase"></i>
                                        <p>COMMUTING</p>
                                        </div>

                                    </div>
                                     <div className="col-3">
                                        <div className="box_service">

                                        <i class="far fa-plus-square"></i>
                                        <p>EXERCICE</p>
                                        </div>

                                    </div>
                                     <div className="col-3">
                                        <div className="box_service">

                                         <i class="far fa-plus-square"></i>
                                        <p>EVERYTHING</p>
                                        </div>

                                    </div>
                                </div>
                                </div>

                        </div>
                    
                </div>
        </div>
    )
}

export default Services
