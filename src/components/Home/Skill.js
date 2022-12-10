import React from 'react';
import { FaBootstrap, FaCss3Alt, FaHtml5, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiExpress, SiJavascript, SiJsonwebtokens, SiMaterialui, SiMongodb, SiRedux, SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const Skill = () => {
    return (
        <div id='contact' className="max-w-[992px] mx-auto my-16 mb-24">
            <div className='mb-8'>
                <h2 className="text-3xl font-bold mb-2">Professional Skill</h2>
                <hr className='w-56' />
            </div>

            <div className='mx-6 text-slate-600'>
                <div className='flex flex-col md:flex-row items-center justify-between'>
                    <div>
                        <h2 className="text-3xl font-semibold mb-4">Front End</h2>
                        <div className='flex flex-row gap-4'>
                            <button className='text-2xl p-4 border border-accent rounded shadow-2xl hover:bg-accent hover:text-white transition duration-150 hover:ease-in'>
                                <FaReact />
                            </button>
                            <button className='text-2xl p-4 border border-accent rounded shadow-2xl hover:bg-accent hover:text-white transition duration-150 hover:ease-in'>
                                <SiJavascript />
                            </button>
                            <button className='text-2xl p-4 border border-accent rounded shadow-2xl hover:bg-accent hover:text-white transition duration-150 hover:ease-in'>
                                <FaHtml5 />
                            </button>
                            <button className='text-2xl p-4 border border-accent rounded shadow-2xl hover:bg-accent hover:text-white transition duration-150 hover:ease-in'>
                                <FaCss3Alt />
                            </button>
                        </div>
                        <br />
                        <div className='flex flex-row gap-4'>
                            <button className='text-2xl p-4 border border-accent rounded shadow-2xl hover:bg-accent hover:text-white transition duration-150 hover:ease-in'>
                                <SiTailwindcss />
                            </button>
                            <button className='text-2xl p-4 border border-accent rounded shadow-2xl hover:bg-accent hover:text-white transition duration-150 hover:ease-in'>
                                <FaBootstrap />
                            </button>
                            <button className='text-2xl p-4 border border-accent rounded shadow-2xl hover:bg-accent hover:text-white transition duration-150 hover:ease-in'>
                                <SiMaterialui />
                            </button>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-3xl font-semibold mb-4">Back End</h2>
                        <div className='flex flex-row gap-4'>
                            <button className='text-2xl p-4 border border-accent rounded shadow-2xl hover:bg-accent hover:text-white transition duration-150 hover:ease-in'>
                                <FaNodeJs />
                            </button>
                            <button className='text-2xl p-4 border border-accent rounded shadow-2xl hover:bg-accent hover:text-white transition duration-150 hover:ease-in'>
                                <SiMongodb />
                            </button>
                            <button className='text-2xl p-4 border border-accent rounded shadow-2xl hover:bg-accent hover:text-white transition duration-150 hover:ease-in'>
                                <SiJsonwebtokens />
                            </button>
                            <button className='text-2xl p-4 border border-accent rounded shadow-2xl hover:bg-accent hover:text-white transition duration-150 hover:ease-in'>
                                <SiExpress />
                            </button>
                        </div>
                        <br />
                        <div className='flex flex-row gap-4'>
                            <button className='text-2xl p-4 border border-accent rounded shadow-2xl hover:bg-accent hover:text-white transition duration-150 hover:ease-in'>
                                <SiRedux />
                            </button>
                            <button className='text-2xl p-4 border border-accent rounded shadow-2xl hover:bg-accent hover:text-white transition duration-150 hover:ease-in'>
                                <TbBrandNextjs />
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Skill;