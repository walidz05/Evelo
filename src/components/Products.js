import React from 'react'

const Products = () => {
    return (

        <div className='products'>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <h1 className="product__heading">
                            OUR <br /> PRODUCTS
                        </h1>
                      
                    </div>
                    <div className="col-6">
                          <ul className='list-group'>
                            <li className='all'>
                              
                              <i className="fas fa-arrow-right"></i>
                                 <span>ALL</span>
                            </li>
                            <li>
                                CONFORT
                            </li>

                            <li>    
                                SPORT UIYLITY
                            </li>

                            <li>
                                SPEACILTY
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="second__section__product">
                            <div className="row">
                    <div className="col-8">
                        <div className="img__bike__product">
                            <img src="/upload/ImageNameHere.png" alt="" />
                                <div className="img__bike__product_txt">
                                    <h5>ARIES MID-DRIVE</h5>
                                     <span>STARTING FROM $3499</span>
                                </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="img_bike_product_second">
                            <img src="/upload/bike1.jpg" alt="" />
                               <div className="img_bike_product_seconde_text">
                                    <h5>GALAXYE</h5>
                            <span>STARTING FROM $3499</span>
                               </div>

                        </div>
                         <div className="img_bike_product_thirty">
                            <img src="/upload/bike1.jpg" alt="" />
                                <div className="img_bike_product_thirty_text">
                                        <h5>AURORA UMITED EDITION</h5>
                            <span>STARTING FROM $3499</span>
                                </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Products
