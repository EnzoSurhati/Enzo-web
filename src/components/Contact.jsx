import React, { useState } from "react";
import Lottie from "lottie-react";
import contact from "../assets/Contact.json";
import emailjs from "emailjs-com";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("enzo_connect12", "template_7mlmnwv", e.target, "bIXK5LIc4fqj0Nc-i").then(
      (result) => {
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3000);
        console.log(result.text);
      },
      (error) => {
        alert("Failed to send the message. Please try again.");
        console.log(error.text);
      }
    );

    e.target.reset(); // Clears the form after sending a message.
  };

  return (
    <>
      {showPopup && (
        <div className="fixed top-5 right-5 bg-green-600 text-white bg-opacity-90 px-4 py-2 rounded shadow-lg transition-all z-50">
          ✅ Message was successfully sent!
        </div>
      )}
      <section id="contact" className="z-50 bg-gray-800 relative py-10 px-5 md:px-0">
        <div className="mb-16 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="md:w-1/2 mb-8 ml-2 md:mb-0">
              <h2 className="text-3xl font-bold mb-3 text-red-500 font-major font-bold">Get in Touch</h2>
              <p className="mb-4 text-white/85">
                Always open to new challenges and opportunities. Feel free to contact me!
              </p>
              <div className="flex space-x-6">
                <a
                  href="https://www.linkedin.com/in/enzosurhati/"
                  target="_blank"
                  rel="noopener noreferrer">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="text-blue-700 text-3xl hover:scale-110 transition-transform"
                  />
                </a>
                <a href="https://github.com/EnzoSurhati" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="text-gray-900 text-3xl hover:scale-110 transition-transform"
                  />
                </a>
              </div>
              <Lottie animationData={contact} className="w-[350px] mx-auto lg:w-[500px]" />
            </div>
            <form
              onSubmit={sendEmail}
              className="w-full md:w-1/2 bg-gray-100 rounded-lg border border-red-300 shadow-lg shadow-red-500 p-10">
              <h1 className="text-gray-900 text-4xl font-bold mb-7">Contact Me</h1>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Full Name"
                  className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"></input>
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"></input>
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Enter Your Message"
                  className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <button className="bg-red-500 text-white px-3 py-2 rounded-lg">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
