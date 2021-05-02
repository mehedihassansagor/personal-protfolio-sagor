import React from 'react';
import './Skill.css'

const Skills = ({ singleInfo }) => {
    return (
        <div>
            <div >
            <div className="card col-ms-12 card-animation" style={{ width: "15rem",textAlign: "center",boxShadow:'2px 2px 5px  gray'}}>
                <img  src={singleInfo.img} className="card-img-top img-fluid skill-img" alt="..."  style={{ height: "150px",width: "150px",padding: "5%",marginLeft:"17%"}}/>
                <div class="card-body">
                    <p class="card-text">{singleInfo.name}</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Skills;