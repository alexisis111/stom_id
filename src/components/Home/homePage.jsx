import React from 'react';
import SliderComponent from '../slider/sliderComponent';
import Descriptions from './descriptions';
import SliderInMain from '../slider/sliderInMain';
import Maps from './Maps/maps';


const HomePage = () => {
    return (
        <>
            <SliderInMain />
            <Descriptions />
            <SliderComponent/>
            <Maps />
        </>
    );
}

export default HomePage;
