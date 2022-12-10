import React, { useEffect, useState } from 'react';
import Project from './Project';

const Projects = () => {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setProjects(data))
    }, []);
    console.log(projects);

    return (
        <div id='projects' className="max-w-[992px] mx-auto my-16">
            <div className='mb-8'>
                <h2 className="text-3xl font-bold mb-2">My Projects</h2>
                <hr className='w-40' />
            </div>
            <div className='mx-6 grid grid-cols-1 md:grid-cols-2 gap-8'>
                {
                    projects.map(project => <Project
                        key={project.id}
                        project={project}
                    ></Project>)
                }
            </div>
        </div>
    );
};

export default Projects;