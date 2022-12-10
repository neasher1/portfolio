import React from 'react';
import neasher from '../../../src/assets/neasher-bg.png';
import Typewriter from 'typewriter-effect';

const Header = () => {

    return (
        <div className="hero">
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
                    <button className="btn btn-primary my-2">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Header;