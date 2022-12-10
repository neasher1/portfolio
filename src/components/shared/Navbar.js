import React from 'react';
import { FaCloudDownloadAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import neasher from '../../../src/assets/neasher-bg1.png';
import resume from '../../../src/assets/Resume/resume of Neasher.pdf';

const Navbar = () => {
    return (
        <div className="bg-white card shadow-2xl">
            <div className='max-w-[992px] navbar mx-auto'>
                <div className="navbar-start ">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 
                             0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round"
                                    strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg- 
                         base-100 rounded-box w-52">
                            <li>
                                <a href='#projects' className='font-bold hover:bg-[#EDF2F7]'>Projects</a>
                            </li>
                            <li>
                                <a href='#about' className='font-bold hover:bg-[#EDF2F7]'>About</a>
                            </li>
                            <li>
                                <a href='#contact' className='font-bold hover:bg-[#EDF2F7]'>Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className="avatar">
                        <div className="w-12 rounded-full">
                            <Link to='/'><img src={neasher} alt='neasher' /></Link>
                        </div>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <a href='#projects' className='font-bold hover:bg-[#EDF2F7]'>Projects</a>
                        </li>
                        <li>
                            <a href='#about' className='font-bold hover:bg-[#EDF2F7]'>About</a>
                        </li>
                        <li>
                            <a href='#contact' className='font-bold hover:bg-[#EDF2F7]'>Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a href={resume} target="_blank" rel="noopener noreferrer">
                        <button className="btn btn-accent text-white font-bold">Resume <span className='text-xl mx-2'><FaCloudDownloadAlt /></span> </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;