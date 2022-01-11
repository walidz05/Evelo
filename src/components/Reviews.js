import React from 'react'

const Reviews = () => {
    return (

        <div className='reviews'>
            <div className="icon__center">
                <i class="fas fa-quote-left"></i>
            </div>

                
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="text__review">
                            <ul className=''>
                                <li><i className='fas fa-star'></i></li>
                                <li><i className='fas fa-star'></i></li>
                                <li><i className='fas fa-star'></i></li>
                                <li><i className='fas fa-star'></i></li>
                                <li><i className='fas fa-star'></i></li>
                            </ul>
                            <p>After much research, I decided on the 
                                EVELO o Galaxy with the Harmony transmission 
                                and purchased one for my wife forr christmas it wasn't long before i had to have the same machine for myself
                            </p>
                            <h4>BRUCE & MILLIE</h4>
                            <span>VERMONT</span>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="image__review">
                            <img src="/upload/e.jpeg" alt="" />
                        </div>
                    </div>
                </div>


                <div className="row align-items-center">

                    <div className="col-6">
                        <div className="img__bike">
                            <img src="/upload/Two-road-cyclists-in-drops-winter_road_female-a2b8cdd.jpeg" alt="" />
                        </div>
                    </div>

                    <div className="col-6 text-center">
                        <div className="view__more">
                            VIEW MORE REVIEWS<span>
                              <i className="fas fa-arrow-right"></i>
                            </span>
                        </div>
                    </div>

                </div>
            </div>


            <div className="row sponsor d-flex justify-content-center">
                <div className="col-2">
                    <img src="/upload/kisspng-logo-business-sport-sponsor-company-seafood-5ac1a7d7518933.142923491522640855334.jpg" alt="" />
                </div>
                <div className="col-2">
                       <img src="/upload/spon.png" alt="" />
                </div>
                <div className="col-2">
                       <img src="/upload/png-transparent-logo-brand-sponsor-magen-david-text-sport-logo.png" alt="" />
                </div>
                <div className="col-2">
                       <img src="/upload/téléchargement.png" alt="" />
                </div>

                 <div className="col-2">
                       <img src="/upload/images.png" alt="" />
                </div>
                
            </div>




        </div>
    )
}

export default Reviews
