import React from "react";

const Resume = () => {
    return (
        <div className="bg-gray-900 my-20  text-white min-h-screen p-8">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-orange-500">Asif Ahmed</h1>
                    <p className="text-lg mt-2 text-gray-400">Frontend Developer | React.js Developer | Proficient in MERN Stack | Eager to Expand Back-End Expertise</p>
                    <p className="mt-4">
                        Email: <a href="mailto:asifahmed18oct@gmail.com" className="text-blue-400">asifahmed18oct@gmail.com</a> | Phone: +8801611376188
                    </p>
                    <p>
                        LinkedIn: <a href="https://www.linkedin.com/in/asif-ahmed-a2a60226a/" target="_blank" rel="noopener noreferrer" className="text-blue-400">linkedin.com/in/asifahmed</a> | GitHub: <a href="https://github.com/asifahmed1810" target="_blank" rel="noopener noreferrer" className="text-blue-400">github.com/asifahmed</a>
                    </p>
                </div>

                {/* Skills Section */}
                <div className="mt-12">
                    <h2 className="text-3xl font-bold border-b-2 border-orange-500 pb-2">Skills</h2>
                    <ul className="grid grid-cols-2 gap-4 mt-6">
                        <li>React.js</li>
                        <li>Node.js</li>
                        <li>MongoDB</li>
                        <li>HTML & CSS</li>
                        <li>Tailwind CSS</li>
                        <li>JavaScript</li>
                        <li>Firebase Authentication</li>
                        <li>Python</li>
                        <li>Java</li>
                    </ul>
                </div>



                {/* Education Section */}
                <div className="mt-12">
                    <h2 className="text-3xl font-bold border-b-2 border-orange-500 pb-2">Education</h2>
                    <div className="mt-6 space-y-4">
                        <div>
                            <h3 className="text-xl font-bold">Bachelor's in Computer Science</h3>
                            <p className="text-gray-400"> Independent University ,
                                Bangladesh(IUB)  - Duration (2022 - present)</p>

                        </div>
                        <div>
                            <h3 className="text-xl font-bold">Higher Secondary
                                Certificate (HSC) </h3>
                            <p className="text-gray-400">Adamjee Cantonment College- 2020</p>
                        </div>
                    </div>
                </div>

                {/*  HOBBIES & INTERESTS Section */}
                <div className="mt-12">
                    <h2 className="text-3xl font-bold border-b-2 border-orange-500 pb-2"> HOBBIES & INTERESTS</h2>
                    <div className="mt-6 space-y-4">
                        <div>

                            <ul className="list-disc list-inside mt-2">
                                <li>Gaming</li>
                                <li>Exploring and learning
                                    about emerging
                                    technologies</li>
                                <li>Problem-solving and
                                    building tech-related
                                    projects</li>
                            </ul>
                        </div>

                    </div>
                </div>

                {/* Contact Section */}
                <div className="mt-12">
                    <h2 className="text-3xl font-bold border-b-2 border-orange-500 pb-2">Contact</h2>
                    <p className="mt-6">
                        I'm open to new opportunities and collaborations! Feel free to reach out to me via email or connect on LinkedIn.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Resume;
