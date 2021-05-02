import React from 'react';
import './About.css'
import headImage from '../images/headImage.png'
const About = () => {
    return (
        <div>
            <div className="row">
                <div className="col-md-6">
                    <img src={headImage} alt="" />
                </div>

                <div className="col-md-6 about-text text-center mt-5 pt-5">
                    <h2 style={{borderBottom:"3px solid salmon"}} className="mt-5 pt-5">About</h2>
                    <br />
                    <p className="justify-content-center pr-4">I am junior web developer .Today I can make mid level web site. I am so much studies person. I am ensuring that I will so much comfortable for your organization. I am so much communicative person. I have the skill working closely with others at team environment and with a flexible approach to work</p>

                </div>
            </div>

            <div className="row m-5">
                <div className="col-md-6">
                    <h3 style={{borderBottom:"3px solid salmon"}}>Comfortable With</h3>
                    <h6>JavaScript, ES6, React, Node.js, Rest API, Material-UI, MongoDB, Bootstrap4, React Bootstrap,JSON, HTML, CSS.</h6>
                    <h3 style={{borderBottom:"3px solid salmon"}}>Familiar With</h3>
                    <h6 >Redux,TypeScript, Express.js, NPM, VS Code, Notepad++,.</h6>
                    <h3 style={{borderBottom:"3px solid salmon"}}>Tools</h3>
                        <h6>Heroku, Netlify, Firebase.</h6>
                </div>
                <div className="col-md-6 text-center mt-5">
                    <h5>Phone: 01856354435</h5>
                    <h5>Email: mehedihassansagor1641998@gmail.com</h5>
                    <a target = "_blank" className="about-link" target = "_blank" href="https://github.com/Sagor6876778787">GitHub</a>
                    <a target = "_blank" className="about-link" target = "_blank" href="https://www.linkedin.com/in/mehedi-hassan-sagor-a75878210/">Linkedin</a>
                    <a target = "_blank" className="about-link" target = "_blank" href="https://www.facebook.com/sagor286">Facebook</a>
                </div>
            </div>

        </div>

    );
};

export default About;