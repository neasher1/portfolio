import React from 'react';
import Projects from '../../Pages/Projects/Projects';
import Header from '../Header';

const Home = () => {
    return (
        <div className="max-w-[992px] mx-auto my-12">
            <div className='mx-6'>
                <Header></Header>
                <Projects></Projects>
            </div>
        </div>
    );
};

export default Home;