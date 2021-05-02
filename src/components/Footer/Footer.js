import React from 'react';
import './Footer.css'
import facebook from '../images/facebook.png'
import instagram from '../images/instagram.png';
import gmail from '../images/gmail.png';

const Footer = () => {
    return (
        <div class="footer-dark mt-5">
            <footer>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6 col-md-3 item">
                            <h3>Services</h3>
                            <ul>
                                <li><a href="#">FrontEnd</a></li>
                                <li><a href="#">BackEnd</a></li>
                                <li><a href="#">React</a></li>
                                <li><a href="#">JavasScript</a></li>
                                <li><a href="#">Node.js</a></li>
                            </ul>
                        </div>
                        <div class="col-sm-6 col-md-3 item">
                            <h3>Contact</h3>
                            <ul>
                                <li><a href="#">Email</a></li>
                                <li><a href="#">Phone</a></li>
                                <li><a target="blank" href="https://www.linkedin.com/in/mehedi-hassan-sagor-a75878210/">Linkedin</a></li>

                            </ul>
                        </div>
                        <div class="col-md-6 item text">
                            <h3>Mhededi Hassan Sagor</h3>
                            <p>A Curious Web Developer.I have the skill working closely with others at team environment and with a flexible approach to
                                work</p>
                        </div>
                        <div class="col item social">
                            <a target="blank" href="https://www.facebook.com/sagor286"><i class="icon ion-social-facebook"><img style={{ height: '100%', width: '100%' }} src={facebook} alt="" /></i></a>

                            <a target="blank" href="https://www.instagram.com/"><i class="icon ion-social-twitter"><img style={{ height: '100%', width: '100%' }} src={instagram} alt="" /></i></a>

                            <a target="blank" href="https://accounts.google.com/signup/v2/webcreateaccount?flowName=GlifWebSignIn&flowEntry=SignUp"><i class="icon ion-social-snapchat"><img style={{ height: '100%', width: '100%' }} src={gmail} alt="" /></i></a>
                        </div>
                    </div>
                    <p class="copyright"> © MEHEDI HASSAN SAGOR || 2021</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;