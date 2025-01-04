import React from 'react';
import namelogo from '../assets/name-logo.jpg'

const Navbar = () => {
    const links = <>
        <li><a>Home</a></li>

        <li><a>Project</a></li>
        <li><a>Resume</a></li>
        <li><a>Contact</a></li>
    </>
    return (
        <div className="navbar fixed z-10  bg-opacity-30 bg-gray-500 w-4/5 mx-auto rounded-lg">
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
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal font-semibold px-1">
                   {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-neutral">Button</a>
            </div>
        </div>
    );
};

export default Navbar;