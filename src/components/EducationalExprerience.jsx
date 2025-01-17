import React from 'react';

const EducationalExprerience = () => {
    return (
        <div>
            <h2 className='text-4xl text-center font-bold mt-16  text-orange-600'>Educational Exprerience</h2>
            <div className="flex justify-center items-center mt-16">
                <div className="card bg-slate-900 text-white w-full md:w-2/3 lg:w-2/3 shadow-xl p-6">
                    <div className="card-body space-y-4">
                        {/* Bachelor's Degree */}
                        <div>
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
                                <strong>Concentration:</strong> Software Development,  Artificial Intelligence
                            </p>
                            
                            <p>
                                <strong>Year:</strong> 2022 - Present
                            </p>
                        </div>
                        <hr className="border-gray-600" />
                        {/* Higher Secondary Certificate */}
                        <div>
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

export default EducationalExprerience;