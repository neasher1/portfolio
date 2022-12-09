import React from 'react';
import { Link } from 'react-router-dom';
import neasher from '../../../src/assets/neasher-bg1.png';

const Navbar = () => {
    return (
        <div className="bg-white card shadow-2xl">
            <div className='max-w-[992px] navbar mx-auto'>
                <div className="navbar-start ">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/projects' className='font-bold hover:bg-[#EDF2F7]'>Projects</Link></li>
                            <li><Link to='/about' className='font-bold hover:bg-[#EDF2F7]'>About</Link></li>
                            <li><Link to='/contact' className='font-bold hover:bg-[#EDF2F7]'>Contact</Link></li>
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
                        <li><Link to='/projects' className='font-bold hover:bg-[#EDF2F7]'>Projects</Link></li>
                        <li><Link to='/about' className='font-bold hover:bg-[#EDF2F7]'>About</Link></li>
                        <li><Link to='/contact' className='font-bold hover:bg-[#EDF2F7]'>Contact</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link className="btn btn-accent text-white font-bold">Resume</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;