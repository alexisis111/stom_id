import React from 'react';
import './slider.css'
import main from '../../assets/photo.png'
import main1 from '../../assets/photo1.png'


const SliderInMain = () => {

    return (
        <div id="carouselExampleCaptionsFull" className="carousel slide carousel-fade relative h-full"
            data-bs-ride="carousel">
            <div className="carousel-inner relative  overflow-hidden">
                <div className="carousel-item active relative float-left w-full h-full bg-no-repeat bg-cover bg-center ">
                    <div className="relative w-full h-full bg-no-repeat bg-cover bg-center bg-gradient-to-r from-blue-500 to-my">
                        <div className='container mx-auto flex flex-col md:flex-row '>
                            <section class=" body-font basis-1/2 flex text-center ml-0 md:ml-20">
                                <div class="container m-auto ">
                                    <div class="flex flex-col w-full text-center">
                                        <p className='text-center text-2xl text-white italic animate__animated animate__lightSpeedInLeft animate__faster'>Стоматологическая клиника</p>
                                        <div className='flex flex-row  leading-relaxed mx-auto md:text-4xl text-2xl text-white animate-pulse '>
                                            <h1 class="md:text-9xl text-7xl title-font mb-4 underline decoration-my font-extrabold text-slate-200 drop-shadow-md animate__animated animate__lightSpeedInLeft animate__fast">Stom</h1>id
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className='mx-auto md:mx-0' >
                                <img src={main} alt="" />
                            </section>
                        </div>
                    </div>
                </div>
                <div className="carousel-item relative float-left w-full h-full bg-no-repeat bg-cover bg-center">
                    <div className="relative w-full h-full bg-no-repeat bg-cover bg-center bg-gradient-to-r from-my to-blue-500">
                        <div className='container mx-auto flex flex-col md:flex-row '>
                            <section class=" body-font basis-1/2 flex text-center ml-0 md:ml-20">
                                <div class="container m-auto ">
                                    <div class="flex flex-col w-full text-center">
                                        <div className='flex flex-col  leading-relaxed mx-auto md:text-4xl text-2xl text-white'>
                                            <p class=" title-font mb-4 font-extrabold text-slate-200 animate__animated animate__slideInLeft animate__faster	">Мы на страже</p>
                                            <p class=" title-font mb-4 underline decoration-my font-extrabold text-slate-200 animate__animated animate__slideInLeft animate__fast">ЗДОРОВЬЯ</p>
                                            <p class=" title-font mb-4 font-extrabold text-slate-200 animate__animated animate__slideInLeft animate__faster	">Ваших зубов</p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className='mx-auto md:mx-0 ' >
                                <img src={main1} alt="" />
                            </section>
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

export default SliderInMain;