import React from 'react';
import bdShop from '../images/bd-shop.PNG'
import repair from '../images/service.png'
import food from '../images/hungry.PNG'
import TextLoop from 'react-text-loop';
import service2 from '../images/two1.PNG'
import service3 from '../images/two2.PNG'
import bdShop1 from '../images/shop1.PNG'
import bdShop2 from '../images/shop2.PNG'
import food1 from '../images/food1.PNG'
import food2 from '../images/food2.PNG'

const SampleProject = () => {
    return (
        <div className="container">
            <h3 style={{ marginTop: '100px' }}>My Projects are , <TextLoop interval={500}>
                <span><span style={{ color: 'green', fontWeight: "700" }}>T</span>WO-WHEELER repair <span style={{ color: 'green', fontWeight: "700" }}>S</span>hop</span>
                <span><span style={{ color: 'green', fontWeight: "700" }}>B</span>D-SHOP</span>
                <span><span style={{ color: 'green', fontWeight: "700" }}>F</span>ood Corder</span>
                <span><span style={{ color: 'green', fontWeight: "700" }}>C</span>hampion <span style={{ color: 'green', fontWeight: "700" }}>L</span>eague</span> </TextLoop></h3>
                
            <div>
                <div className="row mt-5" style={{ borderTop: "3px solid salmon" }}>
                    <div className="col-md-6">
                        {/* <img style={{ height: '100%', width: '100%' }} src={repair} alt="" /> */}

                        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img style={{ height: '250px', width: '100%' }} src={service2} class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img style={{ height: '250px', width: '100%' }} src={repair} class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img style={{ height: '250px', width: '100%' }} src={service3} class="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>



                    </div>
                    <div className="col-md-6">
                        <div className="text-center" style={{ marginLeft: '200px' }}>
                            <h6 className="mt-5">TWO-WHEELER repair shop</h6>

                            <span>1. Here you can take service.</span>
                            <br />
                            <span>2. You have to pay for it.</span>
                            <br />
                            <span>3. you can give review here.</span>
                            <br />
                            <span>4. You have to login first</span>
                            <br />
                            <div className="mt-4">
                                <a target="_blank" href="https://github.com/Sagor6876778787/two-whilers" className="card-link code-link " >code</a>
                                <a target="_blank" href="https://github.com/Sagor6876778787/two-whilers-server" className="card-link code-link " >server code</a>
                                <a target="_blank" href="https://two-wheelers-b697a.web.app/" className="card-link code-link " >Website</a>

                            </div>

                        </div>
                    </div>
                </div>
            </div>


            <div>
                <div className="row mt-5" style={{ borderTop: "3px solid salmon" }}>
                    <div className="col-md-6">
                        {/* <img style={{ height: '100%', width: '100%' }} src={bdShop} alt="" /> */}

                        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img style={{ height: '250px', width: '100%' }} src={bdShop} class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img style={{ height: '250px', width: '100%' }} src={bdShop1} class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img style={{ height: '250px', width: '100%' }} src={bdShop2} class="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>

                    </div>
                    <div className="col-md-6">
                        <div className="text-center" style={{ marginLeft: '200px' }}>
                            <h6 className="mt-5">BD-SHOP</h6>

                            <span>1. Here you can buy grocery item.</span>
                            <br />
                            <span>2. You can give feedback here.</span>
                            <br />
                            <span>3. You can see all order of your</span>
                            <br />
                            <span>4. Here admin can also add more products.</span>

                            <div className="mt-4">
                                <a target="_blank" href="https://github.com/Sagor6876778787/bd-shop" className="card-link code-link " >code</a>
                                <a target="_blank" href="https://github.com/Sagor6876778787/bd-shop-client" className="card-link code-link " >server code</a>
                                <a target="_blank" href="https://shop-bd-a96e6.web.app/" className="card-link code-link " >website</a>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="row mt-5" style={{ borderTop: "3px solid salmon" }}>
                    <div className="col-md-6">
                        {/* <img style={{ height: '100%', width: '100%' }} src={food} alt="" /> */}
                        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img style={{ height: '250px', width: '100%' }} src={food} class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img style={{ height: '250px', width: '100%' }} src={food1} class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img style={{ height: '250px', width: '100%' }} src={food2} class="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="text-center" style={{ marginLeft: '200px' }}>
                            <h6 className="mt-5">food-corner</h6>

                            <span>1.Here you get all kinds of food.</span>
                            <br />
                            <span>2. You get resonable price here.</span>
                            <br />
                            <span>3. You can also find here foregin food also</span>


                            <div className="mt-4">
                                <a target="_blank" href="https://github.com/Sagor6876778787/hungry" className="card-link code-link " >code</a>
                                <a target="_blank" href="https://sagor6876778787.github.io/hungry/" className="card-link code-link " >Website</a>


                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <button type="button" class="mt-5 btn btn-outline-success btn-lg ml-3"> <a href="/project" style={{ textDecoration: "none", color: "green" }}>Explore more...</a> </button>

        </div>

    );
};

export default SampleProject;