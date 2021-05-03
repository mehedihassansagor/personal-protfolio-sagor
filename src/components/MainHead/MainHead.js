import React from 'react';
import './MainHead.css'
import img from '../images/headImage.png'
import myFile from '../images/sagors resume.pdf'

import TextLoop from "react-text-loop";

const MainHead = () => {
    return (
        <div className="d-flex row  main-head">
            <div className="col-md-7">
                <img className="img-fluid" src={img} alt="" />
            </div>
            <div className="col-md-5 d-flex align-items-center col-sm-12">
                <div className="my-word">
                    <h1 class="text-end"> <span style={{ color: "green" }}>H</span>ello,</h1>

                    <h1 class="text-end my-name"><span style={{ color: "green" }}>T</span>his is  Mehedi Hassan <span style={{ color: "green" }}>S</span>agor</h1>
                    <h4 class="text-end" ><h2>
                        <TextLoop>
                            <span>An <span style={{ color: "green" }}>I</span>ngenious</span>
                            <span>An <span style={{ color: "green" }}>I</span>ntelligent</span>
                            <span>An <span style={{ color: "green" }}>E</span>nterprising</span>

                        </TextLoop> Front-end WEB <span style={{ color: "green" }}>D</span>eveloper

                     </h2>
                    </h4>

                    <div className="mt-5">
                        <button type="button" class="btn btn-outline-success btn-lg">
                             <a target="_blank" style={{ textDecoration: "none", color: "green" }} href={myFile} download="sagors resume.pdf">Download Resume</a> </button>
                        <button type="button" class="btn btn-outline-success btn-lg ml-3"> <a href="/project" style={{ textDecoration: "none", color: "green" }}>My Projects</a> </button>
                        
                    </div>

                </div>
            </div>

        </div>
    );
};

export default MainHead;