import React from 'react';
import Header from '../components/Header';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';
import EducationalExprerience from '../components/EducationalExprerience';
import ContactCard from '../components/ContactCard';

const Home = () => {
    return (
        <div >
           <Header></Header>
           <AboutMe></AboutMe>
           <Skills></Skills>
           <EducationalExprerience></EducationalExprerience>
           <ContactCard></ContactCard>
        </div>
    );
};

export default Home;