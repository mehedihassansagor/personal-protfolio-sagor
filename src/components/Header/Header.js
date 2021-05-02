import React from 'react';
// import MainHead from '../MainHead/MainHead';
import './Header.css'


const Header = () => {
  const TextStyle = {
    color: 'green',
  }
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light mt-3">
        <div class="container-fluid ">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto ">
              <li class="nav-item">
                <h5><a style={TextStyle} class="nav-link ms-5 nav-text" href="/home">Home</a></h5>
              </li>
              <li class="nav-item">
                <h5> <a style={TextStyle} class="nav-link ms-5" href="/skills">Skills</a></h5>
              </li>
              <li class="nav-item">
                <h5> <a style={TextStyle} class="nav-link ms-5" href="/project">Project</a></h5>
              </li>
              <li class="nav-item">
                <h5> <a style={TextStyle} class="nav-link ms-5" href="/contact">Contact</a></h5>
              </li>
              <li class="nav-item">
                <h5> <a style={TextStyle} class="nav-link ms-5" href="/about">About</a></h5>
              </li>
              <li class="nav-item">
                <h5> <a style={TextStyle} class="nav-link ms-5" href="/blogs">Blogs</a></h5>
              </li>
              <li class="nav-item">
                <h5> <a id="resume-text" style={TextStyle} style={{ border: '1px solid green', borderRadius: '1vw', }} class="nav-link ms-5" target="_blank" href="https://drive.google.com/file/d/1FwMsHeCKE6wiOOHz8YRrT25dit9Lrtb3/view?usp=sharing">Resume</a></h5>
              </li>


            </ul>
          </div>
        </div>
      </nav>
      {/* <MainHead></MainHead> */}
    </div>
  );
};

export default Header;