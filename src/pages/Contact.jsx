import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const Contact = () => {
    const form=useRef();
    const [loading,setLoading]=useState(false);
    const sendEmail=(e)=>{
        e.preventDefault();
        setLoading(true);

        emailjs.sendForm(
            "service_pdxb8qo",
            "template_3gxciig",
            form.current,
            "PH2qNd4c6IJnmfCWw"
        ).then(
            (result)=>{
                console.log(result.text);
                setLoading(false);
                form.current.reset();
                Swal.fire({
                    icon: "success",
                    title: "Message Sent!",
                    text: "Thank you for reaching out. I will get back to you soon!",
                    confirmButtonColor: "#ff5722",
                });
            },
            (error)=>{

                console.log(error.text);
                setLoading(false);

                // SweetAlert2 error message
                Swal.fire({
                    icon: "error",
                    title: "Oops!",
                    text: "Something went wrong. Please try again later.",
                    confirmButtonColor: "#ff5722",
                });

            }
        )
    }


    return (
     <div className="bg-gray-900 my-24 text-white min-h-screen p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-center text-orange-500">Contact Me</h1>
                <p className="text-center text-gray-400 mt-4">
                    Feel free to reach out to me for collaborations, opportunities, or just to say hi!
                </p>

                {/* Contact Form */}
                <div className="mt-12">
                    <form ref={form} onSubmit={sendEmail} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-lg font-semibold">Name</label>
                            <input type="text" id="name" name="name" required placeholder="Enter your name"
                                className="w-full mt-2 p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"/>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-lg font-semibold">Email</label>
                            <input type="email" id="email" name="email" required placeholder="Enter your email"
                                className="w-full mt-2 p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"/>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-lg font-semibold">Message</label>
                            <textarea id="message" name="message" rows="5" required placeholder="Enter your message"
                                className="w-full mt-2 p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"></textarea>
                        </div>

                        <div className="text-center">
                            <button type="submit"
                                className="px-8 py-3 bg-orange-500 hover:bg-orange-600 rounded-lg font-bold text-lg">
                                {loading ? "Sending..." : "Send Message"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
