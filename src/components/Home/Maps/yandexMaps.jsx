import React from 'react';

const YandexMaps = () => {
    return (
        <>
            <div className='container flex justify-around px-5 py-24 mx-auto '>
                <div className='flex items-center justify-center md:w-1/2 p-6 hidden md:block'>
                    <a href="https://yandex.ru/maps/org/stomatologiya_vyborg_stom_id/62465178116/?utm_medium=mapframe&utm_source=maps" className='absolute text-gray t-4'>Стоматология-Выборг Stom_id</a>
                    <a href="https://yandex.ru/maps/969/vyborg/category/dental_clinics/184106132/?utm_medium=mapframe&utm_source=maps" className='absolute text-gray mt-14'>Стоматологическая клиника в Выборге</a>
                    <a href="https://yandex.ru/maps/969/vyborg/category/personal_hygiene_products/184105802/?utm_medium=mapframe&utm_source=maps" className='absolute text-gray mt-4' >Средства гигиены в Выборге</a>
                    <iframe src="https://yandex.ru/map-widget/v1/?ll=28.735809%2C60.712806&mode=poi&poi%5Bpoint%5D=28.735921%2C60.712782&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D62465178116&z=20.29" frameborder="1" allowFullScreen="true" className='relative w-full h-screen'>
                    </iframe>
                </div>
                <div className='max-w-7xl p-6 md:flex'>
                    <iframe className='ring-2 ring-blue-500/50 rounded-md' src="https://yandex.ru/maps-reviews-widget/62465178116?comments"></iframe>
                </div>
            </div>

        </>
    );
}

export default YandexMaps;
