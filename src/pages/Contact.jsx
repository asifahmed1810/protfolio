import React from "react";

const Contact = () => {
    return (
        <div className="bg-gray-900 mt-24 text-white min-h-screen p-8">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <h1 className="text-4xl font-bold text-center text-orange-500">Contact Me</h1>
                <p className="text-center text-gray-400 mt-4">
                    Feel free to reach out to me for collaborations, opportunities, or just to say hi!
                </p>

                {/* Contact Form */}
                <div className="mt-12">
                    <form className="space-y-6">
                        {/* Name Field */}
                        <div>
                            <label htmlFor="name" className="block text-lg font-semibold">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter your name"
                                className="w-full mt-2 p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                        </div>

                        {/* Email Field */}
                        <div>
                            <label htmlFor="email" className="block text-lg font-semibold">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                className="w-full mt-2 p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                        </div>

                        {/* Message Field */}
                        <div>
                            <label htmlFor="message" className="block text-lg font-semibold">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                placeholder="Enter your message"
                                className="w-full mt-2 p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="text-center">
                            <button
                                type="submit"
                                className="px-8 py-3 bg-orange-500 hover:bg-orange-600 rounded-lg font-bold text-lg"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>

                {/* Additional Contact Info */}
                <div className="mt-12 text-center">
                    <p className="text-lg font-semibold">Or reach me directly:</p>
                    <p className="mt-2">
                        Email:{" "}
                        <a
                            href="mailto:asifahmed18oct@gmail.com"
                            className="text-blue-400 hover:underline"
                        >
                            asifahmed18oct@gmail.com
                        </a>
                    </p>
                    <p>
                        Phone:{" "}
                        <a href="tel:+1234567890" className="text-blue-400 hover:underline">
                            +8801611376188
                        </a>
                    </p>
                    <div className="mt-4 flex justify-center gap-4">
                        <a
                            href="https://www.linkedin.com/in/asif-ahmed-a2a60226a/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:underline"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="https://github.com/asifahmed1810"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:underline"
                        >
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
