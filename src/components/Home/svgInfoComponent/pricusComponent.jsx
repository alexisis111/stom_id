import React, { useState } from 'react';
import Pricus from '../../../assets/svgImages/pricus';
import Modal from '../../modal/modal';
import PricusModal from './modalInComponent/pricusModal';


const PricusComponent = () => {

    const [modalActive, setModalActive] = useState(false);
    const handleOnClose = () => setModalActive(false)

    return (
        <>
            <Modal onClose={handleOnClose} active={modalActive}>
                <PricusModal />
            </Modal>
            <div class="m-2 group basis-1/2">
                <div class="ring-2 ring-blue-500/50 p-6 rounded-r-lg text-center shadow-lg  hover:bg-teal-300">
                    <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-400 group-hover:bg-indigo-500 text-indigo-500 mb-4 ">
                        <Pricus />
                    </div>
                    <h2 class="text-lg text-gray-900 font-semibold title-font mb-2 group-hover:text-white">Виниры</h2>
                    <button onClick={() => {
                        setModalActive(true)
                    }} className='leading-relaxed text-base group-hover:text-white open_btn underline underline-offset-1'>Узнать больше
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                        </svg>
                    </button>
                </div>
            </div>
        </>
    );
}

export default PricusComponent;
