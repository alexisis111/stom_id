import React from 'react';
import SliderComponent from '../slider/sliderComponent';
import Descriptions from './descriptions';
import Header from './header';
import YandexMaps from './Maps/yandexMaps';

const HomePage = () => {
    return (
        <>
            <Header />
            <Descriptions />
            <SliderComponent/>
            <YandexMaps />
        </>
    );
}

export default HomePage;
