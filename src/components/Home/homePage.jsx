import React from 'react';
import SliderComponent from '../slider/sliderComponent';
import Descriptions from './descriptions';
import Header from './header';
import Maps from './maps/maps';

const HomePage = () => {
    return (
        <>
            <Header />
            <Descriptions />
            <SliderComponent/>
            <Maps />
        </>
    );
}

export default HomePage;
