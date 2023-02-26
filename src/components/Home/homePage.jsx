import React from 'react';
import SliderComponent from '../slider/sliderComponent';
import Descriptions from './descriptions';
import Header from './header';
import Maps2 from './Maps/maps2';


const HomePage = () => {
    return (
        <>
            <Header />
            <Descriptions />
            <SliderComponent/>
            <Maps2 />
        </>
    );
}

export default HomePage;
