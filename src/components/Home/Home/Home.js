import React from 'react';
import Projects from '../../Pages/Projects/Projects';
import Contact from '../Contact';
import Header from '../Header';
import Skill from '../Skill';

const Home = () => {
    return (
        <div className="max-w-[992px] mx-auto my-12">
            <div className='mx-6'>
                <Header></Header>
                <Skill></Skill>
                <Projects></Projects>
                <Contact></Contact>
            </div>
        </div>
    );
};

export default Home;