import React from 'react';
import Contact from '../Contact/Contact';
import FakeData from '../FakeData/FakeData';
import Footer from '../Footer/Footer';
import MainHead from '../MainHead/MainHead';
import SampleProject from '../Project/SampleProject';

const Home = () => {
    return (
        <div>
            <MainHead></MainHead>
            <FakeData></FakeData>
            <SampleProject></SampleProject>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;