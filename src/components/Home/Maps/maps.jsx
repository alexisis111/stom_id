import React, { useState } from 'react';
import we from '../../../assets/we.jpg'
import we1 from '../../../assets/we1.jpg'
import SliderInMap from '../../slider/sliderInMap';



const Maps = () => {


    const [active, setActive] = useState(false)

    return (
        <section class="text-gray-600 body-font relative bg-[url('./assets/Screenshot_1.jpg')]">
            <div class="container  mx-auto flex sm:flex-nowrap flex-wrap">
                <div class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                    <iframe width="100%" height="100%" class="absolute inset-0" frameborder="0" marginheight="0" marginwidth="0" title="map" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d487.94387869260856!2d28.735308529247444!3d60.71270455493908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4697334d34c2fb49%3A0x8bea8c93514e1788!2zc3RvbV9pZCB8INGB0YLQvtC80LDRgtC-0LvQvtCz0LjRjyDQktGL0LHQvtGA0LMgfCDQu9C10YfQtdC90LjQtSDQutCw0YDQuNC10YHQsCB8INCy0LjQvdC40YDRiyB8INGN0YHRgtC10YLQuNGH0LXRgdC60LDRjyDRgNC10YHRgtCw0LLRgNCw0YbQuNGPIHwg0L_RgNC-0YLQtdC30LjRgNC-0LLQsNC90LjQtQ!5e0!3m2!1sen!2sus!4v1677317362964!5m2!1sen!2sus" ></iframe>
                    {active
                        ? null
                        : <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                            <button active={active} onClick={() => {
                                setActive(true)
                            }} className='absolute top-1 right-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class=" cursor-pointer w-6 h-6 text-my hover:text-blue-500 ">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            <div class="lg:w-2/5 px-6 ">
                                <SliderInMap />
                            </div>
                            <div class="lg:w-3/5 px-6 mt-4 lg:mt-0">
                                <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">АДРЕС</h2>
                                <p class="mt-1 flex flex-row">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-my">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                    </svg>

                                    г.Выборг ул. Красноармейская д.16 (вход со двора)</p>
                                <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">EMAIL</h2>
                                <a class=" leading-relaxed flex flex-row">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-my">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                    </svg>

                                    test@mail.com</a>
                                <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">ТЕЛЕФОН</h2>
                                <p class="leading-relaxed flex flex-row">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-my">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                    </svg>
                                    +7 (999) 512-73-10</p>
                                <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">ЧАСЫ РАБОТЫ</h2>
                                <p class="leading-relaxed flex flex-row">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-my">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Ежедневно с 10-00 до 20-00
                                </p>
                            </div>
                        </div>
                    }
                </div>
                <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full">
                    <div class=" flex ">
                        <div class="bg-gray-200  p-8 flex flex-col relative z-10 shadow-md">
                            <h2 class="text-2xl text-center font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-my to-blue-500">Запишитесь на приём</h2>

                            <div class="relative mb-4">
                                <img className='rounded-lg' data-fancybox src={we} alt="" />
                            </div>
                            <div class="relative mb-4">
                                <img className='rounded-lg' data-fancybox src={we1} alt="" />
                            </div>
                            <a class="text-white text-center bg-my border-0 py-2 px-6 focus:outline-none hover:bg-blue-500 rounded text-lg" href="https://app.1denta.ru/booking/booking?orgid=8764#/main" target="blank" >Записаться</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Maps;
