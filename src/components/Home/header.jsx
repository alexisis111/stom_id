import React from 'react';
import main from '../../assets/photo.png'
import Descriptions from './descriptions';

const Header = () => {
    return (
        <div>
            <div className="relative w-full h-full bg-no-repeat bg-cover bg-center bg-gradient-to-r from-blue-500 to-cyan-400  ">
                <div className='container mx-auto flex flex-col md:flex-row '>
                    <section class=" body-font basis-1/2 flex text-center ml-0 md:ml-20">
                        <div class="container m-auto ">
                            <div class="flex flex-col w-full text-center">
                                <p className='text-center text-2xl text-white'>Стоматологическая клиника</p>
                                <div className='flex flex-row  leading-relaxed mx-auto md:text-4xl text-2xl text-white animate-pulse'>
                                    <h1 class="md:text-9xl text-7xl title-font mb-4 underline decoration-cyan-400 font-extrabold text-slate-200 drop-shadow-md">Stom</h1>id
                                </div>
                                <p className='text-center text-2xl text-white'>Для Вас много учимся и много работаем!</p>
                            </div>
                        </div>
                    </section>
                    <section className='mx-auto md:mx-0' >
                        <img src={main} alt="" />
                    </section>
                </div>
            </div>
            <Descriptions />
        </div >
    );
}

export default Header;
