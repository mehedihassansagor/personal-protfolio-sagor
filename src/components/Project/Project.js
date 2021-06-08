import React from 'react';
import champion from '../images/champion.PNG'
import bdShop from '../images/bd-shop.PNG'
import repair from '../images/service.png'
import redux1 from '../images/redux1.PNG'
import food from '../images/hungry.PNG'
import './Project.css'
import TextLoop from 'react-text-loop';



const Project = () => {
    return (
        <div className="container">
            <h3 style={{ marginTop: '100px' }}>My Projects are , <TextLoop interval={500}>
                <span><span style={{ color: 'green', fontWeight: "700" }}>T</span>WO-WHEELER repair <span style={{ color: 'green', fontWeight: "700" }}>S</span>hop</span>
                <span><span style={{ color: 'green', fontWeight: "700" }}>B</span>D-SHOP</span>
                <span><span style={{ color: 'green', fontWeight: "700" }}>D</span>ev-Town</span>
                <span><span style={{ color: 'green', fontWeight: "700" }}>C</span>hampion <span style={{ color: 'green', fontWeight: "700" }}>L</span>eague</span> </TextLoop></h3>
            <div>
                <div className="row mt-5"style={{borderTop:"3px solid salmon"}}>
                    <div className="col-md-6">
                        <img style={{ height: '100%', width: '100%' }} src={repair} alt="" />
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
                <div className="row mt-5" style={{borderTop:"3px solid salmon"}}>
                    <div className="col-md-6">
                        <img style={{ height: '100%', width: '100%' }} src={bdShop} alt="" />
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
                <div className="row mt-5"style={{borderTop:"3px solid salmon"}}>
                    <div className="col-md-6">
                        <img style={{ height: '100%', width: '100%' }} src={food} alt="" />
                    </div>
                    <div className="col-md-6">
                        <div className="text-center" style={{ marginLeft: '200px' }}>
                            <h6 className="mt-5">food-corner</h6>

                            <span>1.Here you get all kinds of food.</span>
                            <br />
                            <span>2. You get reasonable price here.</span>
                            <br />
                            <span>3. You can also find here foreign food also</span>


                            <div className="mt-4">
                                <a target="_blank" href="https://github.com/Sagor6876778787/hungry" className="card-link code-link " >code</a>
                                <a target="_blank" href="https://sagor6876778787.github.io/hungry/" className="card-link code-link " >Website</a>


                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="row mt-5" style={{borderTop:"3px solid salmon"}}>
                    <div className="col-md-6">
                        <img style={{ height: '80%', width: '100%' }} src={redux1} alt="" />
                    </div>
                    <div className="col-md-6">
                        <div className="text-center" style={{ marginLeft: '200px' }}>
                            <h6 className="mt-5">Dev-Town</h6>

                            <span>1. Hire developers from here.</span>
                            <br />
                            <span>2. Get world best developers </span>
                            <br />
                            <span>3. Hire fro intern also</span>
                        
                            <div className="mt-4">
                                <a target="_blank" href="https://github.com/Sagor6876778787/team-work" className="card-link code-link " >code</a>
                
                                <a target="_blank" href="https://elegant-raman-ce9abf.netlify.app/" className="card-link code-link " >website</a>

                            </div>

                        </div>
                    </div>
                </div>
            </div>


            <div>
                <div className="row mt-5"style={{borderTop:"3px solid salmon"}}>
                    <div className="col-md-6">
                        <img style={{ height: '100%', width: '100%' }} src={champion} alt="" />
                    </div>
                    <div className="col-md-6">
                        <div className="text-center" style={{ marginLeft: '200px' }}>
                            <h6 className="mt-5">Champion League</h6>

                            <span>1. Here you can select a team.</span>
                            <br />
                            <span>2.The team which you select you got the individual team information.</span>
                            <br />
                            <span>3. The team is formed by male or female you got the idea by dynamic picture.</span>

                            <div className="mt-4">
                                <a target="_blank" href="https://github.com/Sagor6876778787/champion-legue" className="card-link code-link " >code</a>
                                <a target="_blank" href="Here you can select a team." className="card-link code-link " >website</a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;