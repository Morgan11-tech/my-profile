import { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

import "./App.css";

function App() {

  return (
    <>
      <div className="text-blue-700">hello lalala</div>
      <div className="bg-green-100 bg-cover min-h-screen flex items-center justify-center">
        <div className="flex items-center justify-center">
          <div className="bg-white flex rounded-2xl shadow-lg p-5">
            {/* image */}
            <div className="sm:block hidden sm:w-96 w-1/2">
              <img className="rounded-2xl" src="src/assets/profile-img.jpg" />
            </div>
            <div className="sm:w-1/2 px-12">
              <h1 className="text-lg font-medium text-left mt-9">👋🏾 Hi I'm</h1>
              <p className="text-left text-4xl font-bold">Morgan</p>
              <p className="text-left text-lg font-medium">
                I'm studying Computer Science
              </p>
              <p className="text-left text-lg font-medium mb-5">
                at Ashesi University
              </p>
              <p className="text-left text-lg font-bold hover:text-green-400 text-black">Dedicated</p>
              <p className="text-left text-lg font-bold hover:text-yellow-400">Hardworking</p>
              <p className="text-left text-lg font-bold hover:text-sky-400">Passionate</p>
              
              {/* a quote */}
              <div className="mt-9">
               <blockquote className="p-4 border-l-4 bg-neutral-100 text-neutral-600 border-neutral-500">

               <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512">
                <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"/></svg>
               
                  <p>I wanna be a hero</p>
                  <cite>
                    -
                    <a href="..." target="_blank">
                      nickd
                    </a>
                  </cite>
                </blockquote>
                
                {/* follow me */}
               <div className="grid grid-cols-4 gap-0 mt-5 ml-10">
               <a href="https://www.linkedin.com/in/n-sarpong-morgan/" target="_blank" className="hover:animate-wiggle"><FaLinkedin size={40} /></a>
                <a href="https://github.com/Morgan11-tech" target="_blank" className="hover:animate-wiggle"><FaGithubSquare size={40} /></a>
                <a href="https://www.instagram.com/morg.ie__/" target="_blank" className="hover:animate-wiggle"><FaInstagramSquare size={40} /></a>
               </div>
                
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
