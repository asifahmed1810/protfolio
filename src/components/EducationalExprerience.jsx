import React from 'react';

const EducationalExperience = () => {
    return (
        <div className="my-16 px-4">
            <h2 className="text-4xl text-center font-bold text-orange-600">Educational Experience</h2>

            <div className="flex justify-center items-center mt-16">
                <div className="card bg-slate-900 text-white w-full max-w-4xl shadow-xl p-6">
                    <div className="card-body space-y-10">
                        {/* Bachelor's Degree */}
                        <div className='space-y-4'>
                            <h2 className="card-title text-2xl text-rose-500">
                                Bachelor of Science (B.Sc.)
                            </h2>
                            <p className="mt-2">
                                <strong>Department:</strong> Computer Science and Engineering (CSE)
                            </p>
                            <p>
                                <strong>Institution:</strong> Independent University, Bangladesh (IUB)
                            </p>
                            <p>
                                <strong>Concentration:</strong> Software Development, Artificial Intelligence
                            </p>
                            <p>
                                <strong>Year:</strong> 2022 - Present
                            </p>
                        </div>

                        <hr className="border-gray-600" />

                        {/* Higher Secondary Certificate */}
                        <div className='space-y-4'>
                            <h2 className="card-title text-2xl text-rose-500">
                                Higher Secondary Certificate (HSC)
                            </h2>
                            <p className="mt-2">
                                <strong>Institution:</strong> Adamjee Cantonment College
                            </p>
                            <p>
                                <strong>Year:</strong> 2020
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EducationalExperience;
