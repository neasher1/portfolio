import React from 'react';

const Project = ({ project }) => {
    const { img, title, description, isItNew, technology } = project;
    return (
        <div className="card shadow-xl">
            <figure className='px-5 pt-5'>
                <img src={img} alt="Car Zone" />
            </figure>
            <div className="card-body px-5 pt-5">
                <div className='flex lg:flex-row flex-col md::items-center md:justify-between'>
                    <div>
                        <h2 className="card-title">
                            {title}
                            {
                                isItNew ? <div className="badge badge-accent">{isItNew}</div> : ""
                            }
                        </h2>
                    </div>
                    <div>
                        <div className="badge">{technology}</div>
                    </div>
                </div>
                <p className='mt-1'>{description}</p>
                <div className="card-actions flex flex-row items-center justify-between mt-3">
                    <button className='btn btn-accent text-white font-bold'>View Project</button>
                    <button className='btn btn-accent text-white font-bold'>Live Site</button>
                </div>
            </div>
        </div>
    );
};

export default Project;