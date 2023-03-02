import React from 'react';
import './slider.css'
import adress from '../../assets/adress.jpg'
import fasad from '../../assets/fasad.jpeg';


const SliderTailwind = () => {

    return (
        <div id="carouselExampleCaptionsFull" className="carousel slide carousel-fade relative h-full"
            data-bs-ride="carousel">
            <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center ">
                <button
                    type="button"
                    data-bs-target="#carouselExampleCaptionsFull"
                    data-bs-slide-to="0"
                    className="active rouned-full"
                    aria-current="true"
                    aria-label="Slide 1"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleCaptionsFull"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                ></button>
            </div>
            <div className="carousel-inner relative  overflow-hidden rounded-lg">
                <div className="carousel-item active relative float-left w-full h-full bg-no-repeat bg-cover bg-center ">
                    <img class="rounded-lg" className='changes1 w-full' src={adress} alt="" />
                </div>
                <div className="carousel-item relative float-left w-full h-full bg-no-repeat bg-cover bg-center">
                    <img class="rounded-lg" className='changes1 w-full' src={fasad} alt="" />
                </div>
            </div>
            <button
                className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                type="button"
                data-bs-target="#carouselExampleCaptionsFull"
                data-bs-slide="prev"
            >
                <span
                    className="carousel-control-prev-icon inline-block bg-no-repeat"
                    aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                type="button"
                data-bs-target="#carouselExampleCaptionsFull"
                data-bs-slide="next"
            >
                <span
                    className="carousel-control-next-icon inline-block bg-no-repeat"
                    aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default SliderTailwind;