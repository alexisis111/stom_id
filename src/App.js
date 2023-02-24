import React from 'react';
import Slider from "./components/slider/slider"
import { Navbar } from "./components/nav/navbar"
import Header from "./components/Home/header";
import YandexMaps from './components/Home/Maps/yandexMaps';



function App() {
    return (
        <>
            <Navbar />
            <Header />
            <Slider/>
            {/* <YandexMaps /> */}
        </>
    );
}

export default App;
