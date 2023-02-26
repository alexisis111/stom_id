import React from 'react';
import we from '../../../assets/we.jpg'

const YandexMaps = () => {
    return (
        <>
            <div className='px-5 py-24 mx-auto '>
                <section class="ring-2 ring-blue-500/50 rounded-md shadow-lg text-gray-600 body-font relative">
                    <div class="absolute inset-0 bg-gray-300 ">
                        <iframe width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="map" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d487.94387869260856!2d28.735308529247444!3d60.71270455493908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4697334d34c2fb49%3A0x8bea8c93514e1788!2zc3RvbV9pZCB8INGB0YLQvtC80LDRgtC-0LvQvtCz0LjRjyDQktGL0LHQvtGA0LMgfCDQu9C10YfQtdC90LjQtSDQutCw0YDQuNC10YHQsCB8INCy0LjQvdC40YDRiyB8INGN0YHRgtC10YLQuNGH0LXRgdC60LDRjyDRgNC10YHRgtCw0LLRgNCw0YbQuNGPIHwg0L_RgNC-0YLQtdC30LjRgNC-0LLQsNC90LjQtQ!5e0!3m2!1sen!2sus!4v1677317362964!5m2!1sen!2sus" className="filter: grayscale(1) contrast(1.2) opacity(0.4);"></iframe>
                    </div>
                    <div class="container px-5 py-24 mx-auto flex ">
                        <div class="bg-gray-200 lg:w-1/3 md:w-1/2rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
                            <h2 class="text-gray-900 text-2xl text-center font-semibold">Запишитесь на приём</h2>

                            <div class="relative mb-4">
                                <img data-fancybox="gallery" src={we} alt="" />
                            </div>
                            <a class="text-white text-center bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" href="https://app.1denta.ru/booking/booking?orgid=8764#/main" target="blank" >Записаться</a>
                            <div class="relative mt-3">
                                <span class="flex justify-evenly px-3 py-2 ">
                                    <a target="blank" href="https://wa.me/+79995127310"><i
                                        class=" text-gray-500 hover:text-green-500 fa fa-whatsapp fa-2x green-text text-darken-2"></i></a>
                                    <a href="https://vk.com/stom_id_clinic" target="blank"><i
                                        class="ml-6 text-gray-500 hover:text-blue-500 fa fa-vk fa-2x blue-text text-darken-2"></i></a>
                                    <a href="tel:+79995127310" target="blank"><i
                                        class="ml-6 text-gray-500 hover:text-white fa fa-mobile fa-2x green-text text-darken-2"></i></a>
                                </span>
                            </div>
                            <p class="text-xs text-gray-500 mt-3 text-center">Имеются противопоказания, необходимо проконсультироваться с врачом</p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default YandexMaps;
