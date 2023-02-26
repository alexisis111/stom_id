import React from 'react';
import SliderTailwind from './sliderTailwind';
import img1 from '../../assets/works/1.jpg';
import img2 from '../../assets/works/2.jpg';
import img3 from '../../assets/works/3.jpg';
import img4 from '../../assets/works/4.jpg';
import img5 from '../../assets/works/5.jpg';
import img6 from '../../assets/works/6.jpg';



const SliderComponent = () => {
    return (
        <section class="text-gray-600 body-font overflow-hidden py-10 bg-[url('./assets/Screenshot_1.jpg')]">
            <div class="container mx-auto">
                <h1 class="sm:text-4xl text-2xl text-center pb-10 font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-my to-blue-500 ">
                    Наши работы</h1>
                {/* <div class="flex flex-wrap -m-12">
                    <div class="p-12 md:w-1/2 flex flex-col items-start">
                        <span class="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">для просмотра нажмите на изображение</span>
                        <SliderTailwind />
                    </div>
                    <div class="p-12 md:w-1/2 flex flex-col items-start">
                        <h2 class="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">Заголовок</h2>
                        <p class="leading-relaxed mb-8">тут тестовое описание</p>
                    </div>
                </div> */}
                <section class="text-gray-600 body-font">
                    <div className='flex items-center justify-center'>
                    <span class="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-2xl font-medium tracking-widest text-center">для просмотра нажмите на изображение</span>
                    </div>
                    
                    <div class="container px-5 mx-auto flex flex-wrap">
                        <div class="flex flex-wrap md:-m-2 -m-1">
                            <div class="flex flex-wrap w-1/2">
                                <div class="md:p-2 p-1 w-1/2">
                                    <img data-fancybox="gallery" data-caption="Эстетическая реставрация композитным материалом, было проведено закрытие диастемы, удаление старых пломб, корректировка формы зубов" alt="gallery" class="w-full object-cover h-full object-center block rounded-lg" src={img1} />
                                </div>
                                <div class="md:p-2 p-1 w-1/2">
                                    <img data-fancybox="gallery" data-caption="пациентка обратилась с жалобой отсутствие переднего зуба , уже несколько лет носит съёмный протез 'бабочка', хотела его заменить на новый
                                    Было предложено и сделана адгезивная реставрация по уникальной технологии композитным материалом за 1.5 часа в одно посещение без обточки соседних зубов" alt="gallery" class="w-full object-cover h-full object-center block rounded-lg" src={img2} />
                                </div>
                                <div class="md:p-2 p-1 w-full">
                                    <img data-fancybox="gallery" data-caption="у пациента была травма,удар пришелся на верхнюю челюсть, вследствие зуб 11 выпал. проведена реставрация - адгезивный композитный мост за 1.5 часа работы,без обточки по уникальной технологии" alt="gallery" class="w-full h-full object-cover object-center block rounded-lg" src={img3} />
                                </div>
                            </div>
                            <div class="flex flex-wrap w-1/2">
                                <div class="md:p-2 p-1 w-full">
                                    <img data-fancybox="gallery" data-caption="у пациента жалоба на некрасивую старую пломбу, отсутствие блеска, черные полоски по краям
проведена эстетическая реставрация немецким композитным материалом, всего за 1 час работы" alt="gallery" class="w-full h-full object-cover object-center block rounded-lg" src={img4} />
                                </div>
                                <div class="md:p-2 p-1 w-1/2">
                                    <img data-fancybox="gallery" data-caption="Работу выполнила врач стоматолог Макарова Елена Федоровна
Жалобы пациента на некрасивую неэстетичную пломбу в переднем зубе.
Проведена замена старой пломбы на новую эстетичную реставрацию!❤" alt="gallery" class="w-full object-cover h-full object-center block rounded-lg" src={img5} />
                                </div>
                                <div class="md:p-2 p-1 w-1/2">
                                    <img data-fancybox="gallery" data-caption="верхнее фото до проведения проф гигиены, невооруженным глазом виден зубной камень и налет
нижнее фото после гигиены через 2 недели, видно что десна приняла свое прежнее место
воспаления больше нет ))" alt="gallery" class="w-full object-cover h-full object-center block rounded-lg" src={img6} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
}

export default SliderComponent;
