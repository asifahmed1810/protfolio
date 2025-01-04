import React from 'react';
import photo from '../assets/photo.png'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const Header = () => {
    return (
        <div className="hero  min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={photo}
                    className=" w-2/6 mt-14 max-sm:w-2/5 rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold"><span className='text-rose-600'>Hello</span><br /> I am Asif Ahmed</h1>
                    <p className="py-6">
                        Efficient and eager programmer holding a Bachelor’s
                        degree in Computer science from Independent
                        University, Bangladesh (IUB). Fully focused on Web
                        development skills for developing newer and more
                        creative softwares with necessary work stuff.
                    </p>
                    <div className="flex space-x-3 mb-5">
                        <div className="text-2xl">
                            <a href="https://github.com/asifahmed1810" target="_blank" rel="noopener noreferrer">
                                <FaGithub />
                            </a>
                        </div>
                        <div className="text-2xl">
                            <a href="https://www.linkedin.com/in/asif-ahmed-a2a60226a" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin />
                            </a>
                        </div>
                        <div className="text-2xl">
                            <a href="https://www.facebook.com/profile.php?id=100011541277428" target="_blank" rel="noopener noreferrer">
                                <FaFacebook />
                            </a>
                        </div>
                    </div>

                    <button className="btn btn-neutral">Download Resume</button>
                </div>
            </div>
        </div>
    );
};

export default Header;