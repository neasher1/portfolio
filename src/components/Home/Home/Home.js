import React from 'react';
import Header from '../Header';
import HighLights from '../HighLights';

const Home = () => {
    return (
        <div className="max-w-[992px] mx-auto my-12">
            <div className='mx-6'>
                <Header></Header>
                <HighLights></HighLights>
            </div>
        </div>
    );
};

export default Home;