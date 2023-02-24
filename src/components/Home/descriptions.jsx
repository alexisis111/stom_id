import React, { useState } from 'react';
import Hygiene from '../../assets/svgImages/hygiene';
import Implantation from '../../assets/svgImages/implantation';
import Paradontal from '../../assets/svgImages/paradontal';
import Pricus from '../../assets/svgImages/pricus';
import Profilact from '../../assets/svgImages/profilact';
import Prosthetics from '../../assets/svgImages/prosthetics';
import Surgery from '../../assets/svgImages/surgery';
import Treatment from '../../assets/svgImages/treatment';
import Modal from '../modal/modal';
import Slider from '../slider/slider';



const Descriptions = () => {
    const [modalActive, setModalActive] = useState(false);
    const handleOnClose = () => setModalActive(false)
    return (
        <div>
            <section class="text-gray-600 body-font bg-slate-200">
                <div class="container px-5 py-4 mx-auto">
                    <div class="flex flex-col text-center w-full">
                        <h1 class="sm:text-4xl text-2xl font-medium title-font mb-4 text-gray-900">
                            Тестовый коммит
                            Оказываем широкий спектр стоматологических услуг</h1>
                        {/* <p class="lg:w-2/3 mx-auto leading-relaxed text-base"></p>
                        <p class="lg:w-2/3 mx-auto leading-relaxed text-base"></p> */}
                    </div>
                    <div class="flex flex-col md:flex-row">
                        <div class="m-2 group basis-1/2">
                            <div class="border border-gray-200 p-6 rounded-lg hover:bg-teal-300 text-center">
                                <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-400 group-hover:bg-indigo-500 text-indigo-500 mb-4 ">
                                    <Profilact />
                                </div>
                                <h2 class="text-lg text-gray-900 font-medium title-font mb-2 group-hover:text-white">Профилактика</h2>
                                <button onClick={() => {
                                    setModalActive(true)
                                }} className='leading-relaxed text-base group-hover:text-white open_btn' >Подробнее</button>
                            </div>
                            <Modal onClose={handleOnClose} active={modalActive}>
                                <section class="text-gray-600 body-font">
                                    <div class="container mx-auto flex flex-col">
                                        <div class="lg:w-4/6 mx-auto">
                                            <div class="rounded-lg h-64 overflow-hidden">
                                                <img alt="content" class="object-cover object-center h-full w-full" src="https://dummyimage.com/1200x500"/>
                                            </div>
                                            <div class="flex flex-col sm:flex-row mt-10">
                                                <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                                                    <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                                                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                                            <circle cx="12" cy="7" r="4"></circle>
                                                        </svg>
                                                    </div>
                                                    <div class="flex flex-col items-center text-center justify-center">
                                                        <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">Phoebe Caulfield</h2>
                                                        <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                                                        <p class="text-base">Raclette knausgaard hella meggs normcore williamsburg enamel pin sartorial venmo tbh hot chicken gentrify portland.</p>
                                                    </div>
                                                </div>
                                                <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                                                    <p class="leading-relaxed text-lg mb-4">Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami everyday carry hexagon locavore direct trade art party. Locavore small batch listicle gastropub farm-to-table lumbersexual salvia messenger bag. Coloring book flannel truffaut craft beer drinking vinegar sartorial, disrupt fashion axe normcore meh butcher. Portland 90's scenester vexillologist forage post-ironic asymmetrical, chartreuse disrupt butcher paleo intelligentsia pabst before they sold out four loko. 3 wolf moon brooklyn.</p>
                                                    <a class="text-indigo-500 inline-flex items-center">Learn More
                                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </Modal>
                        </div>
                        <div class="m-2 group basis-1/2">
                            <div class="border border-gray-200 p-6 rounded-lg hover:bg-teal-300 text-center">
                                <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-400 group-hover:bg-indigo-500 text-indigo-500 mb-4 ">
                                    <Hygiene />
                                </div>
                                <h2 class="text-lg text-gray-900 font-medium title-font mb-2 group-hover:text-white">Гигиена</h2>
                                <p class="leading-relaxed text-base group-hover:text-white">Подробнее</p>
                            </div>
                        </div>
                        <div class="m-2 group basis-1/2">
                            <div class="border border-gray-200 p-6 rounded-lg hover:bg-teal-300 text-center">
                                <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-400 group-hover:bg-indigo-500 text-indigo-500 mb-4 ">
                                    <Treatment />
                                </div>
                                <h2 class="text-lg text-gray-900 font-medium title-font mb-2 group-hover:text-white">Лечение</h2>
                                <p class="leading-relaxed text-base group-hover:text-white">Подробнее</p>
                            </div>
                        </div>
                        <div class="m-2 group basis-1/2">
                            <div class="border border-gray-200 p-6 rounded-lg hover:bg-teal-300 text-center">
                                <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-400 group-hover:bg-indigo-500 text-indigo-500 mb-4 ">
                                    <Surgery />
                                </div>
                                <h2 class="text-lg text-gray-900 font-medium title-font mb-2 group-hover:text-white">Хирургия</h2>
                                <p class="leading-relaxed text-base group-hover:text-white">Подробнее</p>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col md:flex-row">
                        <div class="m-2 group basis-1/2 ">
                            <div class="border border-gray-200 p-6 rounded-lg hover:bg-teal-300 text-center">
                                <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-400 group-hover:bg-indigo-500 text-indigo-500 mb-4 ">
                                    <Paradontal />
                                </div>
                                <h2 class="text-lg text-gray-900 font-medium title-font mb-2 group-hover:text-white">Парадонтит</h2>
                                <p class="leading-relaxed text-base group-hover:text-white">Подробнее</p>
                            </div>
                        </div>
                        <div class="m-2 group basis-1/2">
                            <div class="border border-gray-200 p-6 rounded-lg hover:bg-teal-300 text-center">
                                <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-400 group-hover:bg-indigo-500 text-indigo-500 mb-4 ">
                                    <Implantation />
                                </div>
                                <h2 class="text-lg text-gray-900 font-medium title-font mb-2 group-hover:text-white">Импланты</h2>
                                <p class="leading-relaxed text-base group-hover:text-white">Подробнее</p>
                            </div>
                        </div>
                        <div class="m-2 group basis-1/2">
                            <div class="border border-gray-200 p-6 rounded-lg hover:bg-teal-300 text-center">
                                <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-400 group-hover:bg-indigo-500 text-indigo-500 mb-4 ">
                                    <Prosthetics />
                                </div>
                                <h2 class="text-lg text-gray-900 font-medium title-font mb-2 group-hover:text-white">Протезы</h2>
                                <p class="leading-relaxed text-base group-hover:text-white">Подробнее</p>
                            </div>
                        </div>
                        <div class="m-2 group basis-1/2">
                            <div class="border border-gray-200 p-6 rounded-lg hover:bg-teal-300 text-center">
                                <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-400 group-hover:bg-indigo-500 text-indigo-500 mb-4 ">
                                    <Pricus />
                                </div>
                                <h2 class="text-lg text-gray-900 font-medium title-font mb-2 group-hover:text-white">Виниры</h2>
                                <p class="leading-relaxed text-base group-hover:text-white">Подробнее</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}

export default Descriptions;
