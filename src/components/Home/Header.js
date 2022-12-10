import React from 'react';
import neasher from '../../../src/assets/neasher-bg.png';
import Typewriter from 'typewriter-effect';
import { FaCloudDownloadAlt, FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom';
import resume from '../../../src/assets/Resume/resume of Neasher.pdf';

const Header = () => {

    return (
        <div id='#about' className="hero">
            <div className="hero-content flex-col lg:flex-row gap-x-16">
                <div className="avatar">
                    <div className="w-24 rounded-full ring ring-accent ring-offset-base-100 ring-offset-2">
                        <img src={neasher} alt='Neasher' />
                    </div>
                </div>

                <div>
                    <h3 className="text-2xl font-semibold">Hey! 👋</h3>
                    <hr className='w-12 mt-2' />
                    <h1 className="text-3xl font-semibold my-4">My name is Neasher Ahmed and I'm a
                        <span className='text-accent'>
                            <Typewriter
                                options={{
                                    strings: ["Front End Developer.", "React Developer."],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </span>
                    </h1>

                    <p className="text-xl">I am a quick learner which is my strength. Besides, I am always curious to explore new technologies, improving my interpersonal skills and my strategic thinking.</p>
                    <p className="my-4 text-xl">This is my digital garden, where I write about the things I'm working on and share what I've learned. 😊</p>
                    <div className='flex flex-row gap-4'>
                        <a href='https://www.facebook.com/neasher.ahmed/' className='text-2xl p-3 rounded shadow-2xl hover:bg-accent hover:text-white transition duration-150 hover:ease-in' target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                        <a href='https://www.linkedin.com/in/neasher/' className='text-2xl p-3 rounded shadow-2xl hover:bg-accent hover:text-white transition duration-150 hover:ease-in' target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                        <a href='https://github.com/neasher1' className='text-2xl p-3 rounded shadow-2xl hover:bg-accent hover:text-white transition duration-150 hover:ease-in' target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                        <a href={resume} target="_blank" rel="noopener noreferrer" className='text-2xl p-3 rounded shadow-2xl hover:bg-accent hover:text-white transition duration-150 hover:ease-in'><FaCloudDownloadAlt /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;