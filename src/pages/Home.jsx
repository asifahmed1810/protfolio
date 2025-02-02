import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../components/Header';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';
import EducationalExprerience from '../components/EducationalExprerience';
import ContactCard from '../components/ContactCard';
import ProjectList from '../components/ProjectList';

const Home = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, easing: 'ease-in-out', once: true });
    }, []);

    return (
        <div>
            <div ><Header /></div>
            <div data-aos="fade-up"><AboutMe /></div>
            <div data-aos="zoom-in"><Skills /></div>
            <div data-aos="zoom-in"><EducationalExprerience /></div>
            <div data-aos="zoom-in"><ProjectList /></div>
            <div data-aos="flip-up"><ContactCard /></div>
        </div>
    );
};

export default Home;
