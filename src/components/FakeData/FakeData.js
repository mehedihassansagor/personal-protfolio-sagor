import React from 'react';
import reactPic from '../images/react.png'
import esPic from '../images/es6.png'
import jsPic from '../images/js.png'
import nodePic from '../images/node.png'
import mongoPic from '../images/mongodb.png'
import bootstrapPic from '../images/bootstrap.png'
import htmlPic from '../images/html.png'
import cssPic from '../images/css.png'
import Skills from '../Skills/Skills';
import './FakeData.css'
import TextLoop from 'react-text-loop';


const fakeInfo = [{
    name: 'React.js',
    img: reactPic
},
{
    name: 'es6',
    img: esPic
},
{
    name: 'JavasScript',
    img: jsPic
},
{
    name: 'Node.js',
    img: nodePic
},
{
    name: 'MongoDB',
    img: mongoPic
},
{
    name: 'Bootstrap',
    img: bootstrapPic
},
{
    name: 'HTML',
    img: htmlPic
},
{
    name: 'CSS',
    img: cssPic
},]

// const sagor = "habib"
console.log(fakeInfo)

const FakeData = () => {
    return (
        <div  >
            <div  className = ' text-center mt-5 pt-5'>
             <h4> My skill in.....</h4> <h4 style={{marginTop:"10px"}}><TextLoop  interval={500}>
                   {/* <span  style={{color: 'green',fontWeight:"900"}}>My skill</span> */}
                 <span style={{color: 'green',fontWeight:"900"}}>React</span>
                   <span style={{color: 'green',fontWeight:"900"}}>JavasScript</span>
                   <span style={{color: 'green',fontWeight:"900"}}>ES6</span>
                   <span style={{color: 'green',fontWeight:"900"}}>Node.js</span>
                   <span style={{color: 'green',fontWeight:"900"}}>MongoDB</span>
                   <span style={{color: 'green',fontWeight:"900"}}>Bootstrap</span>
                   <span style={{color: 'green',fontWeight:"900"}}>HTML</span>
                   <span style={{color: 'green',fontWeight:"900"}}>CSS</span>
                   </TextLoop></h4>
            </div>
            <div className="container single-data">

                {
                    fakeInfo.map(singleInfo => <Skills singleInfo={singleInfo}></Skills>)
                }


            </div>
        </div>
    );
};

export default FakeData;