import React from 'react';
import Header from '../components/Header';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';
import EducationalExprerience from '../components/EducationalExprerience';

const Home = () => {
    return (
        <div >
           <Header></Header>
           <AboutMe></AboutMe>
           <Skills></Skills>
           <EducationalExprerience></EducationalExprerience>
        </div>
    );
};

export default Home;