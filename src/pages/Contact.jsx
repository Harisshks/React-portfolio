import React from "react";
import { Linkedin,Github,Phone,Mail} from 'lucide-react';
import '../assests/css/style.css'
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <>
    <Navbar/>
      <div className="w-full h-screen flex flex-col justify-center items-center pfbg ">
        <h2 className="text-3xl font-bold mb-6 text-center navtext">Contact Me :</h2>
        <div className="w-[90%] max-w-4xl h-1/2 flex flex-col md:flex-row gap-10 justify-around items-center">
        <div className="flex flex-col items-center">
        <a href="https://www.linkedin.com/in/harissh-k-s-053a16274/" target="_blank">    
        <Linkedin
              size={60}
              className="text-black hover:text-white transition duration-300"
            />
            <p className="mt-2 text-lg font-semibold">LinkedIn</p>
            </a>
          </div>
          <div className="flex flex-col items-center">
          <a href="https://github.com/Harisshks" target="_blank"><Github
              size={60}
              className="text-black hover:text-white transition duration-300"
            />
            <p className="mt-2 text-lg font-semibold">Github</p>
            </a>
          </div>
          <div className="flex flex-col items-center">
          <a href="tel:+919790730924" class="phone-link">
          <Phone
              size={60}
              className="text-black hover:text-white transition duration-300"
            />
            <p className="mt-2 text-lg font-semibold">Phone</p>
            </a>
          </div>
          <div className="flex flex-col items-center">
          <a href="mailto:harisshhari8@gmail.com" class="email-link ">
          <Mail
              size={60}
              className="text-black hover:text-white transition duration-300"
            />
            <p className="mt-2 text-lg font-semibold">&nbsp;&nbsp;Mail</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;