import React from 'react';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';

const Skills = () => {
    return (
        <div>
            <h2 className='text-4xl text-center font-bold mt-16  text-orange-600'>Skills</h2>

            <div className="flex flex-wrap justify-center gap-8 mt-16">
                {/* React Skill */}
                <div className="card bg-slate-900 text-white w-full md:w-96 shadow-xl p-6">
                    <div className="card-body">
                        <div className="flex items-center space-x-4">
                            <FaReact className="text-4xl text-blue-500" />
                            <h2 className="card-title text-2xl">React</h2>
                        </div>
                        <div className="mt-4">
                            <div className="w-full bg-gray-700 rounded-full h-4">
                                <div
                                    className="bg-blue-500 h-4 rounded-full"
                                    style={{ width: '80%' }}
                                ></div>
                            </div>
                            <p className="text-right mt-2">80%</p>
                        </div>
                    </div>
                </div>

                {/* Node.js Skill */}
                <div className="card bg-slate-900 text-white w-full md:w-96 shadow-xl p-6">
                    <div className="card-body">
                        <div className="flex items-center space-x-4">
                            <FaNodeJs className="text-4xl text-green-500" />
                            <h2 className="card-title text-2xl">Node.js</h2>
                        </div>
                        <div className="mt-4">
                            <div className="w-full bg-gray-700 rounded-full h-4">
                                <div
                                    className="bg-green-500 h-4 rounded-full"
                                    style={{ width: '40%' }}
                                ></div>
                            </div>
                            <p className="text-right mt-2">40%</p>
                        </div>
                    </div>
                </div>

                {/* MongoDB Skill */}
                <div className="card bg-slate-900 text-white w-full md:w-96 shadow-xl p-6">
                    <div className="card-body">
                        <div className="flex items-center space-x-4">
                            <SiMongodb className="text-4xl text-green-400" />
                            <h2 className="card-title text-2xl">MongoDB</h2>
                        </div>
                        <div className="mt-4">
                            <div className="w-full bg-gray-700 rounded-full h-4">
                                <div
                                    className="bg-green-400 h-4 rounded-full"
                                    style={{ width: '65%' }}
                                ></div>
                            </div>
                            <p className="text-right mt-2">65%</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Skills;