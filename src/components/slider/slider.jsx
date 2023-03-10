import React from 'react';
import './slider.css'
import MainDescription from './slide1/mainDescription';
import main from '../../assets/main.jpg'
import main1 from '../../assets/main1.jpg'
import main2 from '../../assets/main2.jpg'


const Slider = () => {
    return (
        <div id="carouselExampleCaptionsFull" className="carousel slide carousel-fade relative h-full"
            data-bs-ride="carousel">
            <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0">
                <button
                    type="button"
                    data-bs-target="#carouselExampleCaptionsFull"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleCaptionsFull"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleCaptionsFull"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                ></button>
            </div>
            <div className="carousel-inner relative  overflow-hidden">
                <div className="carousel-item active relative float-left w-full h-full bg-no-repeat bg-cover bg-center ">
                    <div className='container mx-auto'>
                        <iframe width="100%" height="500px" src="https://www.youtube.com/embed/kcpe4kqZaKg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>

                    {/* <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bc_rgba">
                        <div className="flex justify-center items-center h-full">
                            <MainDescription />
                        </div>
                    </div> */}
                </div>
                <div className="carousel-item relative float-left w-full h-full bg-no-repeat bg-cover bg-center">
                    <img className='changes1 w-full' src={main1} alt="" />
                    <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bc_rgba">
                        <div className="flex justify-center items-center h-full">
                            <MainDescription />
                        </div>
                    </div>
                </div>
                <div className="carousel-item relative float-left w-full h-full bg-no-repeat bg-cover bg-center">
                    <img className='changes2 w-full' src={main2} alt="" />
                    <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bc_rgba">
                        <div className="flex justify-center items-center h-full">
                            <MainDescription />
                        </div>
                    </div>
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

export default Slider;