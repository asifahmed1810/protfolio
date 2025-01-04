import React from 'react';
import Header from '../components/Header';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';
import EducationalExprerience from '../components/EducationalExprerience';
import ContactCard from '../components/ContactCard';
import ProjectList from '../components/ProjectList';


const Home = () => {
    return (
        <div >
           <Header></Header>
           <AboutMe></AboutMe>
           <Skills></Skills>
           <EducationalExprerience></EducationalExprerience>
           <ProjectList></ProjectList>
           <ContactCard></ContactCard>
          
        </div>
    );
};

export default Home;