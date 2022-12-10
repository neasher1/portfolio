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
        <div className="max-w-[992px] mx-auto my-12">
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