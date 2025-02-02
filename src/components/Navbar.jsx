import React from 'react';
import namelogo from '../assets/name-logo.jpg'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const links = <>
        <li><Link to={'/'}>Home</Link></li>

        <li><Link to={'/projects'}>Projects</Link></li>
        <li><Link to={'/resume'}>Resume </Link></li>
        <li><Link to={'/contact'}>Contact</Link></li>
    </>
    return (
        <div className='bg-black text-white w-full'>
            <div className="navbar fixed z-10 top-0 bg-opacity-50 bg-stone-800 w-4/5 mx-auto rounded-lg">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>

                        </div>
                        <ul
                            tabIndex={0}
                            className="menu font-semibold menu-sm dropdown-content text-black bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <img className='h-12 w-12 rounded-full' src={namelogo} alt="" />
                </div>
                <div className="navbar-center  hidden lg:flex">
                    <ul className="menu  menu-horizontal font-semibold px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a
                        className="btn btn-neutral"
                        href="https://drive.google.com/uc?export=download&id=14INRE_HNzFMKyUdF0gypEp3JPNebmVwK"
                        
                        download
                    >
                        Download Resume
                    </a>
                </div>
            </div>
        </div>

    );
};

export default Navbar;